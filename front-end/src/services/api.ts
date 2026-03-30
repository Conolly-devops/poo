import { API_URL, FALLBACK_EVENTOS } from "@/constants";
import type { Evento } from "@/types/evento";

export async function fetchEventos(): Promise<Evento[]> {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    console.warn("API indisponível, usando dados de fallback.");
    return FALLBACK_EVENTOS;
  }
}
