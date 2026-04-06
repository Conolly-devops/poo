import { MONTHS_PT, CATEGORIAS } from "@/constants";
import type { Evento, IngressoStatus, CategoriaInfo, EventoCategoria } from "@/types/evento";

export function formatDate(str: string) {
  const [y, m, d] = str.split("-");
  return { day: d, month: MONTHS_PT[+m - 1], year: y };
}

export function getIngressoStatus(total: number, vendidos: number): IngressoStatus {
  const livre = (total || 0) - (vendidos || 0);
  const pct = total ? Math.round((vendidos / total) * 100) : 0;
  if (pct >= 100) return { label: "ESGOTADO", color: "#D32F2F", pct: 100, esgotado: true };
  if (pct >= 80) return { label: "Últimas unidades!", color: "#F57C00", pct, esgotado: false };
  return { label: `${livre} disponíveis`, color: "#1565C0", pct, esgotado: false };
}

export function getCategoriaInfo(cat: EventoCategoria): CategoriaInfo {
  return CATEGORIAS[cat] || CATEGORIAS.CULTURAL;
}
