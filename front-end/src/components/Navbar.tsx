interface NavbarProps {
  page: string;
  setPage: (page: string) => void;
}

const NAV_ITEMS: [string, string][] = [
  ["home", "Home"],
  ["eventos", "Eventos"],
  ["ajuda", "Ajuda"],
];

export function Navbar({ page, setPage }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[68px] bg-card border-b border-border shadow-arena-sm">
      <div className="flex items-center gap-2.5 font-heading font-black text-[17px] text-arena-blue-dark tracking-tight">
        <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-lg animate-pulse-ring">
          🏟
        </div>
        ARENA PE
      </div>

      <ul className="flex gap-9 list-none">
        {NAV_ITEMS.map(([key, label]) => (
          <li
            key={key}
            className={`text-sm font-bold cursor-pointer transition-colors relative ${
              page === key
                ? "text-primary after:absolute after:bottom-[-23px] after:left-0 after:right-0 after:h-[3px] after:bg-primary after:rounded-t"
                : "text-muted-foreground hover:text-primary"
            }`}
            onClick={() => setPage(key)}
          >
            {label}
          </li>
        ))}
      </ul>

      <div className="flex gap-2.5 items-center">
        <button className="w-[38px] h-[38px] bg-secondary rounded-[10px] flex items-center justify-center text-[15px] text-muted-foreground hover:bg-arena-blue-light hover:text-primary transition-colors">
          ≡
        </button>
        <button className="w-[38px] h-[38px] bg-secondary rounded-[10px] flex items-center justify-center text-[15px] text-muted-foreground hover:bg-arena-blue-light hover:text-primary transition-colors">
          👤
        </button>
      </div>
    </nav>
  );
}
