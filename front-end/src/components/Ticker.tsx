import type { Evento } from "@/types/evento";
import { CATEGORIAS } from "@/constants";

interface TickerProps {
  eventos: Evento[];
}

export function Ticker({ eventos }: TickerProps) {
  const items = eventos.length
    ? eventos.map((e) => `${CATEGORIAS[e.categoria]?.emoji || "🎟"} ${e.nome}`)
    : ["🏟 Arena Pernambuco", "🎟 Ingressos disponíveis", "⭐ A Arena da Inclusão"];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden bg-primary py-[9px] whitespace-nowrap">
      <div className="inline-block animate-ticker">
        {repeated.map((text, i) => (
          <span key={i}>
            <span className="inline-block font-heading text-[11.5px] font-extrabold tracking-[1.8px] uppercase text-primary-foreground/85 mr-3">
              {text}
            </span>
            <span className="text-primary-foreground/35 mr-3 text-sm"> · </span>
          </span>
        ))}
      </div>
    </div>
  );
}
