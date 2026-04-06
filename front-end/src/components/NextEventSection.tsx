import { useState } from "react";
import type { Evento } from "@/types/evento";
import { CATEGORIAS } from "@/constants";
import { getIngressoStatus } from "@/lib/evento-utils";
import { useCountdown } from "@/hooks/useCountdown";

interface NextEventSectionProps {
  eventos: Evento[];
  loading: boolean;
  onComprar: (evento: Evento) => void;
}

export function NextEventSection({ eventos, loading, onComprar }: NextEventSectionProps) {
  const [voted, setVoted] = useState<number | null>(null);

  const proximo = eventos.find((e) => !getIngressoStatus(e.ingressosTotal, e.ingressosVendidos).esgotado) || eventos[0];
  const target = proximo?.data ? `${proximo.data}T20:00:00` : new Date(Date.now() + 86400000 * 3).toISOString();
  const cd = useCountdown(target);

  const displayEventos = loading
    ? [{ id: -1, nome: "Carregando...", categoria: "" }, { id: -2, nome: "...", categoria: "" }, { id: -3, nome: "...", categoria: "" }]
    : eventos.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
      {/* Voting */}
      <div>
        <div className="flex flex-col gap-2.5">
          {displayEventos.map((e: any) => (
            <div
              key={e.id}
              className={`flex items-center gap-3.5 bg-card border-[1.5px] rounded-xl px-4 py-3.5 cursor-pointer transition-all shadow-arena-sm ${
                voted === e.id
                  ? "border-primary bg-arena-blue-light"
                  : "border-border hover:border-primary/30 hover:bg-arena-blue-light"
              }`}
              onClick={() => !loading && setVoted(e.id)}
            >
              <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                voted === e.id ? "border-primary" : "border-border"
              }`}>
                {voted === e.id && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <div>
                <div className="font-bold text-sm text-arena-blue-dark">{e.nome}</div>
                {e.categoria && CATEGORIAS[e.categoria as keyof typeof CATEGORIAS] && (
                  <div className="text-xs text-muted-foreground">
                    {CATEGORIAS[e.categoria as keyof typeof CATEGORIAS].emoji} {CATEGORIAS[e.categoria as keyof typeof CATEGORIAS].label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {!loading && (
          <div className="flex items-center gap-2 mt-3.5 text-[13px] text-muted-foreground">
            <div className="flex">
              {["🧑", "👩", "👨", "🧒"].map((a, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-arena-blue-light border-2 border-card flex items-center justify-center text-xs -ml-2 first:ml-0">
                  {a}
                </div>
              ))}
            </div>
            <span>+130 votaram</span>
          </div>
        )}
      </div>

      {/* Countdown */}
      <div className="bg-card border border-border rounded-lg p-9 shadow-arena-md text-center animate-fade-up">
        <div className="inline-flex items-center gap-[7px] text-[11px] font-extrabold tracking-[2px] uppercase text-primary mb-4">
          <div className="w-[7px] h-[7px] rounded-full bg-destructive animate-pulse-dot" />
          Começa em
        </div>
        <div className="font-heading text-[clamp(32px,5vw,52px)] font-black tracking-[-2px] text-arena-blue-dark">
          {cd.h}:{cd.m}:{cd.s}
        </div>
        {proximo && <div className="mt-2.5 text-sm text-muted-foreground">{proximo.nome}</div>}
        <button
          className="w-full mt-5 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-extrabold text-sm transition-all shadow-[0_4px_14px_hsla(220,82%,34%,0.22)] hover:bg-arena-blue-dark hover:-translate-y-0.5"
          onClick={() => proximo && onComprar(proximo)}
        >
          Garantir meu ingresso 🎟️
        </button>
      </div>
    </div>
  );
}
