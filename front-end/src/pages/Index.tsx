import { useState } from "react";
import { useEventos } from "@/hooks/useEventos";
import { getIngressoStatus } from "@/lib/evento-utils";
import type { Evento } from "@/types/evento";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { EventsPage } from "@/pages/EventsPage";
import { HelpPage } from "@/pages/HelpPage";
import { EventDetailsPage } from "@/pages/EventDetailsPage";
import { toast } from "sonner";

const Index = () => {
  const [page, setPage] = useState("home");
  const [eventoSelecionado, setEventoSelecionado] = useState<Evento | null>(null);
  const { data: eventos = [], isLoading } = useEventos();

  const handleComprar = (evento: Evento) => {
    if (getIngressoStatus(evento.ingressosTotal, evento.ingressosVendidos).esgotado) return;
    toast(`🎟️ Redirecionando para compra: ${evento.nome}`);
  };

  const handleVerDetalhes = (evento: Evento) => {
    setEventoSelecionado(evento);
    setPage("detalhes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        page={page} 
        setPage={setPage} 
        eventos={eventos} 
        onVerDetalhes={handleVerDetalhes} 
      />
      
      <main className="flex-1">
        {page === "home" && (
          <HomePage eventos={eventos} loading={isLoading} onComprar={handleComprar} onVerDetalhes={handleVerDetalhes} setPage={setPage} />
        )}
        {page === "eventos" && (
          <EventsPage eventos={eventos} loading={isLoading} onComprar={handleComprar} onVerDetalhes={handleVerDetalhes} />
        )}
        {page === "ajuda" && <HelpPage />}
        {page === "detalhes" && eventoSelecionado && (
          <EventDetailsPage evento={eventoSelecionado} onVoltar={() => setPage("eventos")} onComprar={handleComprar} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;