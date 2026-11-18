import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  fetchProduct,
  fetchProductFaq,
  fetchProducts,
} from "../../api/product/fetchProduct";

export function useProductsQuery(filterProducts: FilterProducts) {
  return useInfiniteQuery({
    queryKey: [
      "products",
      filterProducts.sort,
      filterProducts.price,
      filterProducts.aperture,
      filterProducts.category,
      filterProducts.brand,
      filterProducts.option,
    ],
    queryFn: ({ pageParam }) => {
      return fetchProducts({
        page: pageParam,
        pageNum: 20,
        filterProducts,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function useProductQuery({ id }: { id: string }) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => {
      return fetchProduct({
        id: id,
      });
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function useProductFaqQuery() {
  return useQuery({
    queryKey: ["product", "faq"],
    queryFn: () => fetchProductFaq(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
