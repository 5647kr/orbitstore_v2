import { ListFilter, X } from "lucide-react";

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
] as const;

const brands = [
  { id: "orion", title: "Orion" },
  { id: "celestron", title: "Celestron" },
  { id: "sky-watcher", title: "Sky-Watcher" },
  { id: "omegon", title: "Omegon" },
] as const;

const options = [
  { id: "support", title: "GoTo 지원" },
  { id: "haveStuck", title: "재고 있는 상품만" },
] as const;

export default function FilterProductAside({
  filterProducts,
  handleFilterProducts,
  handleResetFilter,
  handleActiveFilter,
}: {
  filterProducts: FilterProducts;
  handleFilterProducts: (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: string,
  ) => void;
  handleResetFilter: () => void;
  handleActiveFilter: () => void;
}) {
  return (
    <aside className="absolute left-0 top-0 w-full h-screen overflow-y-auto z-10 p-5 md:w-70 md:relative md:h-auto bg-(--bg)">
      <div className="py-4 border-b-2 border-(--main) flex items-center gap-4">
        <ListFilter />
        <p className="text-lg font-bold">망원경 필터</p>
      </div>

      <div>
        {/* 정렬 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">정렬</h5>
          <ul className="mt-1">
            {sorts.map((sort) => (
              <li
                key={sort.id}
                className="flex flex-row-reverse justify-end gap-1 items-center">
                <label
                  htmlFor={sort.id}
                  className={`hover:text-(--accent) ${filterProducts.sort === sort.id ? "text-(--accent) font-bold" : "text-(--mute) font-normal"}`}>
                  {sort.title}
                </label>
                <input
                  type="radio"
                  id={sort.id}
                  name="sort"
                  value={sort.id}
                  checked={filterProducts.sort === sort.id}
                  onChange={(e) => handleFilterProducts(e, "sort")}
                  className="accent-(--accent)"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 카테고리 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">카테고리</h5>
          <ul className="mt-1">
            {categorys.map((category) => (
              <li
                key={category.id}
                className="flex flex-row-reverse justify-end gap-1 items-center">
                <label
                  htmlFor={category.id}
                  className={`hover:text-(--accent)`}>
                  {category.title}
                </label>
                <input
                  type="checkbox"
                  id={category.id}
                  name={category.id}
                  checked={filterProducts.category[category.id]}
                  onChange={(e) => handleFilterProducts(e, "category")}
                  className="accent-(--accent)"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 브랜드 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">브랜드</h5>
          <ul className="mt-1">
            {brands.map((brand) => (
              <li
                key={brand.id}
                className="flex flex-row-reverse justify-end gap-1 items-center">
                <label htmlFor={brand.id} className={`hover:text-(--accent)`}>
                  {brand.title}
                </label>
                <input
                  type="checkbox"
                  id={brand.id}
                  name={brand.id}
                  checked={filterProducts.brand[brand.id]}
                  onChange={(e) => handleFilterProducts(e, "brand")}
                  className="accent-(--accent)"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 가격 */}
        <div className="py-4 border-t border-(--border)">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-lg">가격 범위</h5>
            <span className="text-sm text-(--accent)">
              최대 {filterProducts.price}만원
            </span>
          </div>

          <div className="mt-1">
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              className="w-full accent-(--accent)"
              value={filterProducts.price}
              onChange={(e) => handleFilterProducts(e, "price")}
              name="price"
            />
            <div className="flex items-center justify-between text-(--mute)">
              <span className="text-sm  ">10만원</span>
              <span className="text-sm ">500만원</span>
            </div>
          </div>
        </div>

        {/* 구경 */}
        <div className="py-4 border-t border-(--border)">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-lg">구경</h5>
            <span className="text-sm text-(--accent)">
              최대 {filterProducts.aperture}mm
            </span>
          </div>

          <div className="mt-1">
            <input
              type="range"
              min="50"
              max="500"
              step="50"
              className="w-full accent-(--accent)"
              value={filterProducts.aperture}
              onChange={(e) => handleFilterProducts(e, "aperture")}
              name="aperture"
            />
            <div className="flex items-center justify-between text-(--mute)">
              <span className="text-sm">50mm</span>
              <span className="text-sm">500mm</span>
            </div>
          </div>
        </div>

        {/* 옵션 */}
        <div className="py-4 border-t border-(--border)">
          <h5 className="font-bold text-lg">옵션</h5>
          <ul className="mt-1">
            {options.map((option) => (
              <li
                key={option.id}
                className="flex flex-row-reverse justify-end gap-1 items-center">
                <label htmlFor={option.id} className={`hover:text-(--accent)`}>
                  {option.title}
                </label>
                <input
                  type="checkbox"
                  id={option.id}
                  name={option.id}
                  checked={filterProducts.option[option.id]}
                  onChange={(e) => handleFilterProducts(e, "option")}
                  className="accent-(--accent)"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 필터 초기화 */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-(--mute) border-b border-(--border)"
          onClick={handleResetFilter}>
          전체 초기화
        </button>
      </div>

      <button
        type="button"
        onClick={handleActiveFilter}
        className="absolute top-10 right-5 block md:hidden">
        <X />
      </button>
    </aside>
  );
}
