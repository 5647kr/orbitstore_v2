import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createInquiry,
  fetchFaqs,
  fetchGuide,
  fetchGuides,
} from "../../api/support/fetchSupport";

// FAQ 데이터 조회
export function useFaqsQuery() {
  return useQuery<Faq[]>({
    queryKey: ["faq"],
    queryFn: () => {
      return fetchFaqs();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function useGuidesQuery() {
  return useQuery<Guides[]>({
    queryKey: ["guides"],
    queryFn: () => {
      return fetchGuides();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function useGuideQuery({ id }: { id: string }) {
  return useQuery<Guide>({
    queryKey: ["guide", id],
    queryFn: () => {
      return fetchGuide({ id: id! });
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

// 1:1문의 접수
export function useInquiryMutation() {
  return useMutation({
    mutationKey: ["inquiry"],
    mutationFn: (form: Inquiry) => createInquiry({ form }),
  });
}
