interface HeroProps {
  setPage: (page: string) => void;
}

export function Hero({ setPage }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-arena-blue-dark via-primary to-arena-blue-mid py-20 px-12 overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.055]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 44px)" }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-[560px]">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-xs font-bold tracking-[1.2px] uppercase text-white/90 mb-5 animate-fade-up">
          🏟 Arena de Pernambuco
        </div>
        <h1 className="font-heading text-[clamp(34px,4.5vw,54px)] font-black leading-[1.08] tracking-tight text-primary-foreground mb-4 animate-fade-up" style={{ animationDelay: ".08s" }}>
          Pronto para<br />Comprar<br /><span className="text-white/60">Ingressos?</span>
        </h1>
        <p className="text-base font-light text-white/75 max-w-[430px] leading-[1.7] mb-9 animate-fade-up" style={{ animationDelay: ".16s" }}>
          Veja todos os ingressos disponíveis para o seu evento favorito na Arena Pernambuco.
        </p>
        <div className="flex gap-3 flex-wrap animate-fade-up" style={{ animationDelay: ".24s" }}>
          <button
            onClick={() => setPage("ajuda")}
            className="inline-flex items-center gap-2 bg-white/12 border-[1.5px] border-white/30 text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-white/20"
          >
            Seção de Ajuda
          </button>
          <button
            onClick={() => setPage("eventos")}
            className="inline-flex items-center gap-2 bg-card text-arena-blue-dark px-6 py-3 rounded-xl font-extrabold text-sm transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          >
            Ver Eventos →
          </button>
        </div>
      </div>

      {/* Arc */}
      <div className="absolute -bottom-0.5 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(54% 100% at 50% 100%)" }} />
    </div>
  );
}
