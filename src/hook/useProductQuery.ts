import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchProduct, fetchProducts } from "../api/product/fetchProduct";

export function useProductsQuery(filterState: FilterState) {
  return useInfiniteQuery({
    queryKey: [
      "products",
      filterState.sort,
      filterState.price,
      filterState.aperture,
      filterState.category,
      filterState.brand,
      filterState.option,
    ],
    queryFn: ({ pageParam }) => {
      return fetchProducts({
        page: pageParam,
        pageNum: 20,
        filterState,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function useProductQuery({
  id,
  search,
}: {
  id?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: ["product", id, search],
    queryFn: () => {
      return fetchProduct({
        id: id,
        search: search,
      });
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
