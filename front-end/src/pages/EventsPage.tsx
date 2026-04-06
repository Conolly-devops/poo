import type { Evento } from "@/types/evento";
import { EventCard } from "@/components/EventCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { EmptyState } from "@/components/EmptyState";

interface EventsPageProps {
  eventos: Evento[];
  loading: boolean;
  onComprar: (evento: Evento) => void;
  onVerDetalhes: (evento: Evento) => void;
}

export function EventsPage({ eventos, loading, onComprar, onVerDetalhes }: EventsPageProps) {
  return (
    <div className="px-12 py-10 min-h-[80vh] max-md:px-5 max-md:py-6">
      <div className="relative bg-gradient-to-br from-arena-blue-dark to-primary rounded-[20px] px-10 py-10 mb-9 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 36px)" }} />
        <h1 className="relative font-heading text-[30px] font-black tracking-tight text-primary-foreground mb-2">Todos os eventos</h1>
        <p className="relative text-[15px] text-white/70 max-w-[560px] leading-relaxed font-light">
          Quer viver experiências incríveis na Arena? Aqui você encontra shows, esportes, exposições e muito mais.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
        </div>
      ) : eventos.length === 0 ? (
        <EmptyState icon="🎟️" title="Nenhum evento encontrado" description="Não existem eventos disponíveis no momento." />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
          {eventos.map((e, i) => (
            <EventCard key={e.id} evento={e} onComprar={onComprar} delay={i * 0.07} onClick={onVerDetalhes} />
          ))}
        </div>
      )}
    </div>
  );
}