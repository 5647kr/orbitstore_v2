import { useQuery } from "@tanstack/react-query";
import { fetchCompare } from "../../api/compare/fetchCompare";

export function useCompareQuery({ compareIds }: { compareIds: string[] }) {
  return useQuery<Compare[]>({
    queryKey: ["compare"],
    queryFn: () => {
      return fetchCompare({ compareIds: compareIds });
    },
    enabled: compareIds.length > 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
