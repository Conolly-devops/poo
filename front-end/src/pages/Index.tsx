import { useState } from "react";
import { useEventos } from "@/hooks/useEventos";
import { getIngressoStatus } from "@/lib/evento-utils";
import type { Evento } from "@/types/evento";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { EventsPage } from "@/pages/EventsPage";
import { HelpPage } from "@/pages/HelpPage";
import { toast } from "sonner";

const Index = () => {
  const [page, setPage] = useState("home");
  const { data: eventos = [], isLoading } = useEventos();

  const handleComprar = (evento: Evento) => {
    if (getIngressoStatus(evento.ingressosTotal, evento.ingressosVendidos).esgotado) return;
    toast(`🎟️ Redirecionando para compra: ${evento.nome}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} setPage={setPage} />
      <main className="flex-1">
        {page === "home" && <HomePage eventos={eventos} loading={isLoading} onComprar={handleComprar} setPage={setPage} />}
        {page === "eventos" && <EventsPage eventos={eventos} loading={isLoading} onComprar={handleComprar} />}
        {page === "ajuda" && <HelpPage />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
