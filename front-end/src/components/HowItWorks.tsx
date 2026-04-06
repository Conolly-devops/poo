import { STEPS } from "@/constants";

export function HowItWorks() {
  return (
    <div className="relative bg-gradient-to-br from-arena-blue-dark to-primary rounded-[20px] px-12 py-14 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 36px)" }} />
      
      <div className="relative mb-11">
        <div className="text-[11px] font-extrabold tracking-[2.5px] uppercase text-white/55 mb-2">Simples assim</div>
        <h2 className="font-heading text-[clamp(22px,2.8vw,32px)] font-black tracking-tight text-primary-foreground mb-1.5">Como Funciona</h2>
        <p className="text-[15px] text-white/65">Saiba mais sobre a compra de ingressos.</p>
      </div>

      <div className="relative grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-9">
        {STEPS.map((s, i) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 bg-white/12 border border-white/20 rounded-[18px] flex items-center justify-center text-[28px] mx-auto mb-4">
              {s.icon}
            </div>
            <div className="text-[10px] font-extrabold tracking-[2px] text-white/50 uppercase mb-2">Passo {i + 1}</div>
            <div className="font-heading text-base font-extrabold text-primary-foreground mb-2">{s.title}</div>
            <p className="text-[13px] text-white/65 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
