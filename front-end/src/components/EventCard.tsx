import type { Evento } from "@/types/evento";
import { formatDate, getIngressoStatus, getCategoriaInfo } from "@/lib/evento-utils";

interface EventCardProps {
  evento: Evento;
  onComprar: (evento: Evento) => void;
  delay?: number;
}

export function EventCard({ evento, onComprar, delay = 0 }: EventCardProps) {
  const cat = getCategoriaInfo(evento.categoria);
  const { day, month } = formatDate(evento.data);
  const status = getIngressoStatus(evento.ingressosTotal, evento.ingressosVendidos);

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 shadow-arena-sm hover:-translate-y-1 hover:shadow-arena-lg hover:border-primary/20 animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {evento.imagemUrl ? (
        <img
          className="w-full aspect-video object-cover block bg-secondary"
          src={evento.imagemUrl}
          alt={evento.nome}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      ) : (
        <div className="w-full aspect-video bg-gradient-to-br from-arena-blue-light to-secondary flex items-center justify-center text-5xl">
          {cat.emoji}
        </div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-start mb-2.5">
          <span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase border"
            style={{ background: cat.light, color: cat.color, borderColor: cat.border }}
          >
            {cat.emoji} {cat.label}
          </span>
          <div className="text-center bg-arena-blue-light rounded-[10px] px-2.5 py-1.5 min-w-[46px]">
            <div className="font-heading text-[19px] font-black leading-none text-arena-blue-dark">{day}</div>
            <div className="text-[10px] font-extrabold tracking-[1.2px] text-primary">{month}</div>
          </div>
        </div>

        <div className="font-heading text-base font-extrabold tracking-tight mb-1.5 leading-snug text-arena-blue-dark">
          {evento.nome}
        </div>
        <div className="text-[13px] text-muted-foreground mb-4 leading-relaxed line-clamp-2">
          {evento.descricao}
        </div>

        <div className="flex items-center justify-between pt-3.5 border-t border-border">
          <div className="flex flex-col gap-1">
            <span className="text-[10.5px] text-muted-foreground font-bold tracking-wide uppercase">Ingressos</span>
            <span className="text-[13px] font-bold" style={{ color: status.color }}>{status.label}</span>
            <div className="h-1 w-[90px] bg-secondary rounded overflow-hidden mt-1">
              <div className="h-full rounded transition-all duration-400" style={{ width: `${status.pct}%`, background: status.color }} />
            </div>
          </div>
          <button
            className="px-4 py-2 rounded-[10px] text-[13px] font-extrabold bg-primary text-primary-foreground transition-all hover:bg-arena-blue-dark hover:scale-[1.04] disabled:bg-secondary disabled:text-muted-foreground disabled:cursor-not-allowed disabled:transform-none tracking-wide"
            disabled={status.esgotado}
            onClick={() => onComprar(evento)}
          >
            {status.esgotado ? "Esgotado" : "Comprar"}
          </button>
        </div>
      </div>
    </div>
  );
}
