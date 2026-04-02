import type { Evento } from "@/types/evento";
import { formatDate, getIngressoStatus, getCategoriaInfo } from "@/lib/evento-utils";

interface EventDetailsPageProps {
  evento: Evento;
  onVoltar: () => void;
  onComprar: (evento: Evento) => void;
}

export function EventDetailsPage({ evento, onVoltar, onComprar }: EventDetailsPageProps) {
  const cat = getCategoriaInfo(evento.categoria);
  const { day, month } = formatDate(evento.data);
  const status = getIngressoStatus(evento.ingressosTotal, evento.ingressosVendidos);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-up">
      <button 
        onClick={onVoltar}
        className="mb-6 text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
      >
        ← Voltar aos eventos
      </button>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-arena-lg">
        {evento.imagemUrl ? (
          <img src={evento.imagemUrl} alt={evento.nome} className="w-full h-80 object-cover bg-secondary" />
        ) : (
          <div className="w-full h-80 bg-gradient-to-br from-arena-blue-light to-secondary flex items-center justify-center text-7xl">
            {cat.emoji}
          </div>
        )}

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 rounded-full text-[11px] font-extrabold tracking-wide uppercase border" style={{ background: cat.light, color: cat.color, borderColor: cat.border }}>
                {cat.emoji} {cat.label}
              </span>
              <h1 className="font-heading text-3xl font-black text-arena-blue-dark tracking-tight">{evento.nome}</h1>
            </div>
            
            <div className="text-center bg-arena-blue-light rounded-[10px] px-4 py-2">
              <div className="font-heading text-2xl font-black text-arena-blue-dark">{day}</div>
              <div className="text-sm font-extrabold tracking-[1.2px] text-primary">{month}</div>
            </div>
          </div>

          <div className="text-muted-foreground text-base leading-relaxed mb-8">
            {evento.descricao}
          </div>

          <div className="flex items-center justify-between p-6 bg-secondary/50 rounded-xl border border-border">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground font-bold uppercase tracking-wide">Status dos Ingressos</span>
              <span className="text-lg font-black" style={{ color: status.color }}>{status.label}</span>
            </div>
            <button
              className="px-8 py-3 rounded-xl text-base font-extrabold bg-primary text-primary-foreground transition-all hover:bg-arena-blue-dark hover:scale-[1.02] disabled:bg-secondary disabled:text-muted-foreground disabled:cursor-not-allowed"
              disabled={status.esgotado}
              onClick={() => onComprar(evento)}
            >
              {status.esgotado ? "Esgotado" : "Comprar Ingresso"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}