import { RotateCcw, X } from "lucide-react";
import { useFilterStore } from "../../store/useFilterStore";
import CheckBoxInput from "./CheckBoxInput";
import RadioInput from "./RadioInput";
import { useState } from "react";

const sorts = [
  { id: "recent", title: "최신순" },
  { id: "highPrice", title: "높은가격순" },
  { id: "lowPrice", title: "낮은가격순" },
  { id: "popular", title: "인기순" },
];

const categorys = [
  { id: "굴절망원경", title: "굴절망원경" },
  { id: "반사망원경", title: "반사망원경" },
  { id: "돕소니안", title: "돕소니안" },
];

const brands = [
  { id: "orion", title: "Orion" },
  { id: "celestron", title: "Celestron" },
  { id: "sky-watcher", title: "Sky-Watcher" },
  { id: "omegon", title: "Omegon" },
];

const prices = [
  { id: "0~300000", title: "30만원 이하" },
  { id: "300000~700000", title: "30 ~ 70만원" },
  { id: "700000~1500000", title: "70 ~ 150만원" },
  { id: "1500000~", title: "150만원 이상" },
];

const apertures = [
  { id: "0~99", title: "100mm 미만" },
  { id: "100~149", title: "100 ~ 150mm 미만" },
  { id: "150~", title: "150mm 이상" },
];

const options = [
  { id: "support", title: "GoTo 지원" },
  { id: "haveStuck", title: "재고 있는 상품만" },
];

export default function FilterAside({
  handleActiveFilter,
}: {
  handleActiveFilter: () => void;
}) {
  const filterState = useFilterStore((state) => state.filterState);
  const resetfilterState = useFilterStore((state) => state.resetFilterState);
  const handleCustomPrice = useFilterStore((state) => state.handleCustomPrice);
  const [customPrice, setCustomPrice] = useState({
    minPrice: "",
    maxPrice: "",
  });

  // 가격 입력
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomPrice((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  // 커스텀 가격 검색
  const searchCustomPrice = () => {
    const price = customPrice.minPrice + "~" + customPrice.maxPrice;
    handleCustomPrice(price);
  };

  // 전체해제
  const resetFilter = () => {
    resetfilterState();
    setCustomPrice({
      minPrice: "",
      maxPrice: "",
    });
  };

  const isFilterActive =
    filterState.sort !== "recent" ||
    filterState.price !== "" ||
    filterState.aperture !== "" ||
    Object.values(filterState.brand).some((value) => value) ||
    Object.values(filterState.category).some((value) => value) ||
    Object.values(filterState.option).some((value) => value);

  return (
    <aside className="absolute left-0 top-0 w-full h-screen overflow-y-auto z-10 md:w-70 md:relative md:h-auto md:pb-0 bg-(--bg)">
      <div className="p-4">
        <h4 className="font-bold text-xl">필터</h4>
      </div>

      <div className="px-4">
        {/* 정렬 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">정렬</h5>
          <ul className="pl-4 pt-1">
            {sorts.map((sort) => (
              <li key={sort.id}>
                <RadioInput item={sort} filterName="sort" />
              </li>
            ))}
          </ul>
        </div>

        {/* 카테고리 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">카테고리</h5>
          <ul className="pl-4 pt-1">
            {categorys.map((category) => (
              <li key={category.id}>
                <CheckBoxInput item={category} filterName="category" />
              </li>
            ))}
          </ul>
        </div>

        {/* 브랜드 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">브랜드</h5>
          <ul className="pl-4 pt-1">
            {brands.map((brand) => (
              <li key={brand.id}>
                <CheckBoxInput item={brand} filterName="brand" />
              </li>
            ))}
          </ul>
        </div>

        {/* 가격 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">가격 범위</h5>
          <div className="flex items-center gap-1">
            <input
              type="text"
              name="minPrice"
              maxLength={9}
              value={customPrice.minPrice}
              onChange={handlePrice}
              className="text-sm min-w-20 w-full p-1"
            />
            <span>~</span>
            <input
              type="text"
              name="maxPrice"
              maxLength={9}
              value={customPrice.maxPrice}
              onChange={handlePrice}
              className="text-sm min-w-20 w-full p-1"
            />
            <button
              type="button"
              onClick={searchCustomPrice}
              className="text-sm bg-(--accent) hover:bg-(--bg-sub) text-(--bg) w-full max-w-25 p-1 cursor-pointer">
              검색
            </button>
          </div>
          <ul className="pl-4 pt-1">
            {prices.map((price) => (
              <li key={price.id}>
                <RadioInput item={price} filterName="price" />
              </li>
            ))}
          </ul>
        </div>

        {/* 구경 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">구경</h5>
          <ul className="pl-4 pt-1">
            {apertures.map((aperture) => (
              <li key={aperture.id}>
                <RadioInput item={aperture} filterName="aperture" />
              </li>
            ))}
          </ul>
        </div>

        {/* 옵션 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">옵션</h5>
          <ul className="pl-4 pt-1">
            {options.map((option) => (
              <li key={option.id}>
                <CheckBoxInput item={option} filterName="option" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 초기화 버튼 */}
      {isFilterActive && (
        <div className="bg-(--bg) p-4 md:p-0 sticky z-10 bottom-0 left-0 w-full md:static">
          <button
            type="button"
            className="group text-sm border border-(--border) hover:border-(--error) text-(--error) flex items-center gap-1 py-1 pl-1 pr-2 md:absolute md:top-4 md:right-4 cursor-pointer"
            onClick={resetFilter}>
            <RotateCcw
              size={12}
              className="transition-transform duration-500 group-hover:-rotate-120"
            />
            <span>전체해제</span>
          </button>
        </div>
      )}

      {/* 닫기 버튼 */}
      <button
        type="button"
        className="flex items-center gap-1 py-1 pl-1 pr-2 border border-(--border) md:hidden absolute top-4 right-4 cursor-pointer"
        onClick={handleActiveFilter}>
        <span className="text-sm">닫기</span>
        <X size={12} />
      </button>
    </aside>
  );
}
