import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Evento } from "@/types/evento";

interface NavbarProps {
  page: string;
  setPage: (page: string) => void;
  eventos: Evento[];
  onVerDetalhes: (evento: Evento) => void;
}

const NAV_ITEMS: [string, string][] = [
  ["home", "Home"],
  ["eventos", "Eventos"],
  ["ajuda", "Ajuda"],
];

export function Navbar({ page, setPage, eventos, onVerDetalhes }: NavbarProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [search, setSearch] = useState("");

  const eventosFiltrados = search.length > 0 
    ? eventos.filter((e) => {
        const termoLower = search.toLowerCase();
        return (
          e.nome.toLowerCase().includes(termoLower) ||
          e.categoria.toLowerCase().includes(termoLower)
        );
      }).slice(0, 5)
    : [];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[68px] bg-card border-b border-border shadow-arena-sm">
      
      <div className="flex items-center gap-2.5 font-heading font-black text-[17px] text-arena-blue-dark tracking-tight shrink-0">
        <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-lg animate-pulse-ring">🏟</div>
        ARENA PE
      </div>

      <div className="relative hidden md:flex items-center w-full max-w-md mx-8 z-50">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Pesquisar por nome ou categoria..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[38px] rounded-[10px] bg-secondary pl-9 pr-4 text-sm border-transparent focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-colors placeholder:text-muted-foreground"
        />

        {search.length > 0 && (
          <div className="absolute top-[46px] left-0 right-0 bg-card border border-border rounded-[10px] shadow-lg overflow-hidden flex flex-col z-50">
            {eventosFiltrados.length > 0 ? (
              eventosFiltrados.map((evento) => (
                <div
                  key={evento.id}
                  onClick={() => {
                    onVerDetalhes(evento);
                    setSearch(""); 
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-secondary/80 cursor-pointer transition-colors border-b border-border last:border-0"
                >
                  {evento.imagemUrl ? (
                    <img src={evento.imagemUrl} alt={evento.nome} className="w-10 h-10 rounded-[6px] object-cover bg-secondary" />
                  ) : (
                    <div className="w-10 h-10 rounded-[6px] bg-arena-blue-light flex items-center justify-center text-[18px]">🎟️</div>
                  )}
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[13px] font-bold text-arena-blue-dark truncate">{evento.nome}</span>
                    <span className="text-[11px] text-muted-foreground font-bold tracking-wide uppercase">{evento.categoria}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-sm text-center text-muted-foreground font-medium">
                Nenhum evento encontrado.
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2.5 items-center relative">
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-[15px] transition-colors ${
            menuAberto ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-arena-blue-light hover:text-primary"
          }`}
        >
          ≡
        </button>
        {menuAberto && (
          <div className="absolute top-[50px] right-12 w-48 bg-card border border-border rounded-[10px] shadow-lg py-2 flex flex-col z-50">
            {NAV_ITEMS.map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setPage(key);
                  setMenuAberto(false); 
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-4 py-3 text-left text-sm font-bold transition-colors ${
                  page === key ? "text-primary bg-primary/5 border-l-2 border-primary" : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        <button className="w-[38px] h-[38px] bg-secondary rounded-[10px] flex items-center justify-center text-[15px] text-muted-foreground hover:bg-arena-blue-light hover:text-primary transition-colors">
          👤
        </button>
      </div>
      
    </nav>
  );
}