import type { Evento } from "@/types/evento";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { HowItWorks } from "@/components/HowItWorks";
import { NextEventSection } from "@/components/NextEventSection";
import { EmptyState } from "@/components/EmptyState";

interface HomePageProps {
  eventos: Evento[];
  loading: boolean;
  onComprar: (evento: Evento) => void;
  setPage: (page: string) => void;
  onVerDetalhes: (evento: Evento) => void; 
}

export function HomePage({ eventos, loading, onComprar, setPage, onVerDetalhes }: HomePageProps) {
  return (
    <>
      <Ticker eventos={eventos} />
      <Hero setPage={setPage} />


      <section className="py-[72px] px-12 max-md:px-5 max-md:py-14">
        <SectionHeader tag="Em destaque" title="Ingressos à Venda" subtitle="Escolha seu evento e a quantidade de ingressos." />
        {loading ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        ) : eventos.length === 0 ? (
          <EmptyState icon="🎟️" title="Nenhum evento disponível" description="Verifique se a API está rodando em localhost:8080" />
        ) : (
          <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
              {eventos.slice(0, 3).map((e, i) => (
                <EventCard key={e.id} evento={e} onComprar={onComprar} delay={i * 0.1} onClick={onVerDetalhes} /> 
              ))}
            </div>
            {eventos.length > 3 && (
              <div className="text-center mt-8">
                <button
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-extrabold text-sm transition-all shadow-[0_4px_14px_hsla(220,82%,34%,0.22)] hover:bg-arena-blue-dark hover:-translate-y-0.5"
                  onClick={() => setPage("eventos")}
                >
                  Ver todos os eventos →
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <section className="px-12 pb-[72px] max-md:px-5 max-md:pb-14">
        <HowItWorks />
      </section>

      <section className="px-12 pb-[72px] max-md:px-5 max-md:pb-14">
        <SectionHeader tag="Não perca" title="Próximo Evento" subtitle="Escolha o próximo evento que você deseja." />
        <NextEventSection eventos={eventos} loading={loading} onComprar={onComprar} />
      </section>
    </>
  );
}