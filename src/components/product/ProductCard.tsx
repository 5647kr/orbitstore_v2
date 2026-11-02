import { Copy, Heart, Telescope } from "lucide-react";
import { memo } from "react";

const ProductCard = memo(function ProductCard({ item }: { item: Product }) {
  const addCompare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("비교함 저장");
  };

  const addWish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("찜목록 저장");
  };

  return (
    <div className="border border-(--border) min-h-125 flex flex-col relative">
      <div className="bg-(--bg-sub) flex justify-center items-center p-5">
        <img src={item.img} alt={item.title} className="w-60 object-cover" />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* 카테고리 */}
        <div className="text-(--mute) text-sm flex items-center gap-1">
          <span>{item.brand}</span>
          <span>{item.category}</span>
        </div>

        {/* 제품명, 가격 */}
        <div className="mt-3">
          <h2 className="text-base">{item.title}</h2>
          <h3 className="text-(--accent) text-2xl font-bold">
            {item.price.toLocaleString("ko-KR")}원
          </h3>
        </div>

        {/* 간단한 제품 설명 */}
        <div className="flex items-center gap-1 text-sm text-(--mute) mt-5">
          <p>구경 {item.aperture}mm</p>
          <p> · 초점거리 {item.focalLength}mm</p>
          <p> · 초점비 f/{item.apertureRatio}</p>
        </div>

        {/* 비교, 찜 버튼 */}
        <div className="mt-auto flex items-center gap-1">
          <button
            type="button"
            onClick={addCompare}
            className="group border border-(--border) p-1 flex-1 flex justify-center items-center gap-1 hover:border-(--main-dark) transition-all duration-500">
            <Copy size={18} className="group-hover:stroke-(--main-dark)" />
            비교하기
          </button>
          <button
            type="button"
            onClick={addWish}
            className="group border border-(--border) p-1 flex-1 flex justify-center items-center gap-1 hover:border-(--error) transition-all duration-500">
            <Heart size={18} className="group-hover:stroke-(--error)" />
            <span>찜하기</span>
          </button>
        </div>
      </div>

      {/* 품절 표시 */}
      {item.amount === 0 && (
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.75)] flex justify-center items-center">
          <strong className="text-(--error) text-xl py-1 px-4 border-2 border-(--error) rotate-24">
            품절
          </strong>
        </div>
      )}
    </div>
  );
});

const ProductSkeleton = function ProductSkeleton() {
  return (
    <div className="border border-(--border) min-h-125 flex flex-col">
      <div className="bg-(--bg-sub) flex justify-center items-center p-5">
        <Telescope size={240} className="text-(--accent)" />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* 카테고리 */}
        <div className="w-32 h-5 bg-(--border) animate-pulse" />

        {/* 제품명, 가격 */}
        <div className="mt-3">
          <div className="w-34 h-5.5 bg-(--border) animate-pulse" />
          <div className="w-32 h-[28.5px] mt-px bg-(--border) animate-pulse" />
        </div>

        {/* 간단한 제품 설명 */}
        <div className="mt-5">
          <div className="w-50 h-5 bg-(--border) animate-pulse" />
        </div>

        {/* 비교, 찜 버튼 */}
        <div className="mt-auto flex items-center gap-1">
          <div className="group border border-(--border) p-1 flex-1 flex justify-center items-center gap-1 hover:border-(--main-dark) transition-all duration-500">
            <Copy size={18} className="group-hover:stroke-(--main-dark)" />
            비교하기
          </div>
          <div className="group border border-(--border) p-1 flex-1 flex justify-center items-center gap-1 hover:border-(--error) transition-all duration-500">
            <Heart size={18} className="group-hover:stroke-(--error)" />
            <span>찜하기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard, ProductSkeleton };
