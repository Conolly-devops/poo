interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-9">
      <div className="text-[11px] font-extrabold tracking-[2.5px] uppercase text-primary mb-2">{tag}</div>
      <h2 className="font-heading text-[clamp(22px,2.8vw,32px)] font-black tracking-tight text-arena-blue-dark mb-1.5">{title}</h2>
      {subtitle && <p className="text-[15px] text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
