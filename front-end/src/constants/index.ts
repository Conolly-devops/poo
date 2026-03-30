import type { CategoriaInfo, EventoCategoria } from "@/types/evento";

export const API_URL = "http://localhost:8080/api/eventos";

export const CATEGORIAS: Record<EventoCategoria, CategoriaInfo> = {
  SHOW:     { label: "Show",     emoji: "🎤", color: "#1565C0", light: "rgba(21,101,192,0.08)", border: "rgba(21,101,192,0.2)" },
  ESPORTE:  { label: "Esporte",  emoji: "⚽", color: "#0D47A1", light: "rgba(13,71,161,0.08)",  border: "rgba(13,71,161,0.2)"  },
  CULTURAL: { label: "Cultural", emoji: "🎨", color: "#1976D2", light: "rgba(25,118,210,0.08)", border: "rgba(25,118,210,0.2)" },
};

export const MONTHS_PT = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];

export const STEPS = [
  { icon: "🎯", title: "Selecione o Evento", desc: "Escolha um evento da lista e clique em comprar." },
  { icon: "💳", title: "Realize o Pagamento", desc: "Preencha os dados e finalize a compra com segurança." },
  { icon: "🎟️", title: "Receba Seu Ingresso", desc: "Os ingressos serão enviados para o seu e-mail." },
];

export const FALLBACK_EVENTOS = [
  { id: 1, nome: "Show do João Gomes", data: "2026-06-24", categoria: "SHOW" as const, descricao: "Gravação do novo DVD do João Gomes na Arena Pernambuco.", ingressosTotal: 45000, ingressosVendidos: 12500, imagemUrl: null },
  { id: 2, nome: "Sport x Náutico — Final Pernambucano", data: "2026-04-15", categoria: "ESPORTE" as const, descricao: "Grande final do Campeonato Pernambucano na Arena.", ingressosTotal: 46000, ingressosVendidos: 46000, imagemUrl: null },
  { id: 3, nome: "Exposição de Arte Armorial", data: "2026-07-05", categoria: "CULTURAL" as const, descricao: "Exposição em homenagem a Ariano Suassuna.", ingressosTotal: 5000, ingressosVendidos: 120, imagemUrl: null },
];
