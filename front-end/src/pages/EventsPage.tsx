import { useState } from "react";
import type { Evento } from "@/types/evento";
import { EventCard } from "@/components/EventCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { EmptyState } from "@/components/EmptyState";

interface EventsPageProps {
  eventos: Evento[];
  loading: boolean;
  onComprar: (evento: Evento) => void;
}

export function EventsPage({ eventos, loading, onComprar }: EventsPageProps) {
  const [catFilter, setCatFilter] = useState("TODAS");
  const [search, setSearch] = useState("");

  const filtered = eventos.filter((e) => {
    const matchCat = catFilter === "TODAS" || e.categoria === catFilter;
    const matchSearch = e.nome.toLowerCase().includes(search.toLowerCase()) || e.descricao?.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="px-12 py-10 min-h-[80vh] max-md:px-5 max-md:py-6">
      {/* Hero banner */}
      <div className="relative bg-gradient-to-br from-arena-blue-dark to-primary rounded-[20px] px-10 py-10 mb-9 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 36px)" }} />
        <h1 className="relative font-heading text-[30px] font-black tracking-tight text-primary-foreground mb-2">Todos os eventos</h1>
        <p className="relative text-[15px] text-white/70 max-w-[560px] leading-relaxed font-light">
          Quer viver experiências incríveis na Arena? Aqui você encontra shows, esportes, exposições e muito mais.
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2.5 flex-wrap mb-7">
        <select
          className="appearance-none bg-card border-[1.5px] border-border rounded-[10px] py-2 px-3.5 pr-9 text-[13px] font-bold text-arena-blue-dark cursor-pointer shadow-arena-sm hover:border-primary focus:border-primary focus:outline-none transition-colors"
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231040A0' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
        >
          <option value="TODAS">Categoria ▾</option>
          <option value="SHOW">🎤 Show</option>
          <option value="ESPORTE">⚽ Esporte</option>
          <option value="CULTURAL">🎨 Cultural</option>
        </select>

        <div className="flex-1 min-w-[200px] relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">🔍</span>
          <input
            className="w-full bg-card border-[1.5px] border-border rounded-[10px] py-2 pl-10 pr-3.5 text-[13px] text-foreground shadow-arena-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
            type="text"
            placeholder="Buscar por filtro..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState icon="🔎" title="Nenhum evento encontrado" description="Tente ajustar os filtros ou a busca." />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5">
          {filtered.map((e, i) => (
            <EventCard key={e.id} evento={e} onComprar={onComprar} delay={i * 0.07} />
          ))}
        </div>
      )}
    </div>
  );
}
