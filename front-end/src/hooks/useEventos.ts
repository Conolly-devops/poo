import { useQuery } from "@tanstack/react-query";
import { fetchEventos } from "@/services/api";

export function useEventos() {
  return useQuery({
    queryKey: ["eventos"],
    queryFn: fetchEventos,
    staleTime: 30_000,
  });
}
