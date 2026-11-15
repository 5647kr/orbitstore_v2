import { useQuery } from "@tanstack/react-query";
import { fetchEvent, fetchEvents } from "../../api/event/fetchEvent";

export function useEventsQuery() {
  return useQuery<Events[]>({
    queryKey: ["events"],
    queryFn: () => {
      return fetchEvents();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function useEventQuery({ id }: { id: string }) {
  return useQuery<Event>({
    queryKey: ["event", id],
    queryFn: () => {
      return fetchEvent({ id: id });
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
