import { useInView } from "react-intersection-observer";
import Wrap from "../../../components/common/Wrap";
import { useProductsQuery } from "../../../hook/product/useProductQuery";
import { useEffect, useLayoutEffect, useState } from "react";
import { ListFilter } from "lucide-react";
import {
  ProductCard,
  ProductSkeleton,
} from "../../../components/product/ProductCard";
import { Link, useLocation } from "react-router";
import FilterProductAside from "../../../components/product/FilterProductAside";
import NavigatePath from "../../../components/common/NavigatePath";

const initFilter: FilterProducts = {
  sort: "recent",
  price: "500",
  aperture: "500",
  category: {
    굴절망원경: false,
    반사망원경: false,
    돕소니안: false,
  },
  brand: {
    orion: false,
    celestron: false,
    "sky-watcher": false,
    omegon: false,
  },
  option: {
    support: false,
    haveStuck: false,
  },
};

export default function Product() {
  const { pathname } = useLocation();
  const [filterProducts, setFilterProducts] = useState(initFilter);
  const [activeFilter, setActiveFilter] = useState(false);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useProductsQuery(filterProducts);

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const products: Products[] = data?.pages.flatMap((page) => page.data) ?? [];

  function handleFilterProducts(
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: string,
  ) {
    const { name, value, checked } = e.target;

    setFilterProducts((prev) => {
      if (
        filterName === "category" ||
        filterName === "brand" ||
        filterName === "option"
      ) {
        return {
          ...prev,
          [filterName]: {
            ...prev[filterName],
            [name]: checked,
          },
        };
      }

      return {
        ...prev,
        [filterName]: value,
      };
    });
  }

  const handleResetFilter = () => {
    setFilterProducts(initFilter);
  };

  // 모바일버전 필터창 토글기능
  const handleActiveFilter = () => {
    setActiveFilter((activeFilter) => !activeFilter);
  };

  useLayoutEffect(() => {
    if (!activeFilter) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [activeFilter]);

  return (
    <Wrap>
      <NavigatePath path={pathname} />

      {/* hero */}
      <section className="py-10 flex items-end justify-between">
        <div>
          <span className="text-(--accent) font-bold">TELESCOPES</span>
          <h2 className="text-5xl my-5">
            당신의 시선을
            <br />더 멀리
          </h2>
          <p className="text-sm text-(--mute)">
            관측 목적과 경험에 맞는 망원경을 찾아보세요.
            <br />
            선택이 어렵다면 제품 비교 기능을 이용해보세요.
          </p>
        </div>
        <button
          type="button"
          onClick={handleActiveFilter}
          className="flex items-center gap-4 border-b border-(--border) md:hidden">
          <ListFilter size={16} />
          <p className="text-sm ">망원경 필터</p>
        </button>
      </section>

      {/* 본문 */}
      <div className="flex flex-col-reverse md:flex-row-reverse gap-10 py-5">
        {/* 망원경 목록 */}
        <section className="flex-1">
          {/* 로딩 중일 때 */}
          {isLoading && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
              {Array.from({ length: 20 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          )}

          {/* 로딩 끝났는데 필터 결과 데이터가 없을 때 */}
          {!isLoading && products.length === 0 && (
            <div>검색 결과가 없습니다.</div>
          )}

          {/* 로딩 끝 & 필터 결과 데이터 있을 때 */}
          {!isLoading && products.length > 0 && (
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
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

        {/* 목차 */}
        <div className={`${activeFilter ? "block" : "hidden"} md:block`}>
          <FilterProductAside
            filterProducts={filterProducts}
            handleFilterProducts={handleFilterProducts}
            handleResetFilter={handleResetFilter}
            handleActiveFilter={handleActiveFilter}
          />
        </div>
      </div>
    </Wrap>
  );
}
