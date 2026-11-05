import { useInView } from "react-intersection-observer";
import Wrap from "../../../components/common/Wrap";
import FilterAside from "../../../components/product/FilterAside";
import { useProductsQuery } from "../../../hook/useProductQuery";
import { useFilterStore } from "../../../store/useFilterStore";
import { useEffect, useState } from "react";
import { Filter, Telescope } from "lucide-react";
import {
  ProductCard,
  ProductSkeleton,
} from "../../../components/product/ProductCard";
import { Link } from "react-router";

export default function Product() {
  const filterState = useFilterStore((state) => state.filterState);
  const [activeFilter, setActiveFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useProductsQuery(filterState);

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const products = data?.pages.flatMap((page) => page.data) ?? [];

  // 모바일버전 필터창 토글기능
  const handleActiveFilter = () => {
    setActiveFilter((activeFilter) => !activeFilter);
  };

  // 검색창 입력
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // 검색 submit 기능
  // const submitSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  return (
    <Wrap>
      {/* 페이지 hero */}
      <section className="shadow-[inset_0_0_10px_red]">...</section>
      <div className="flex flex-row-reverse gap-5 ">
        {/* 제품 목록 */}
        <section
          className={`flex-1 ${activeFilter ? "h-[calc(100vh-48px)] overflow-hidden" : "h-auto"}`}>
          {/* 검색 및 필터링 목록 */}
          <div className="flex justify-end items-center gap-5 mb-10">
            <form>
              <input
                type="text"
                className="py-1 px-2 flex-1 border border-(--border)"
                onChange={handleSearchInput}
                value={searchInput}
                placeholder="제품명 검색"
              />
            </form>

            <button
              type="button"
              className="flex items-center gap-1 py-1 pl-1 pr-2 border border-(--border) md:hidden"
              onClick={handleActiveFilter}>
              <Filter size={16} />
              <span className="">필터</span>
            </button>
          </div>

          {error && <>{error}</>}

          {/* 로딩 중일 경우 */}
          {isLoading && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index}>
                  <ProductSkeleton />
                </div>
              ))}
            </div>
          )}

          {/* 조회 결과가 없을 경우 */}
          {!isLoading && products.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-10">
              <Telescope size={200} className="text-(--error)" />
              <strong className="text-xl text-(--error) font-black">
                조건을 만족하는 제품을 찾을 수 없습니다.
              </strong>
            </div>
          )}

          {/* 조회 결과 데이터가 있을 경우 */}
          {!error && !isLoading && products.length > 0 && (
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  ref={products.length - 1 ? ref : undefined}>
                  <Link to={`/product/${product.id}`} target="_blank">
                    <ProductCard item={product} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 필터링 */}
        <div className={`${activeFilter ? "block" : "hidden"} md:block`}>
          <FilterAside handleActiveFilter={handleActiveFilter} />
        </div>
      </div>
    </Wrap>
  );
}
