export type EventoCategoria = "SHOW" | "ESPORTE" | "CULTURAL";

export interface Evento {
  id: number;
  nome: string;
  data: string; // "YYYY-MM-DD"
  categoria: EventoCategoria;
  descricao: string;
  ingressosTotal: number;
  ingressosVendidos: number;
  imagemUrl: string | null;
}

export interface CategoriaInfo {
  label: string;
  emoji: string;
  color: string;
  light: string;
  border: string;
}

export interface IngressoStatus {
  label: string;
  color: string;
  pct: number;
  esgotado: boolean;
}
