import { Heart, ShoppingCartPlus, Telescope } from "lucide-react";
import { memo } from "react";

const ProductCard = memo(function ProductCard({ item }: { item: Products }) {
  const addWish = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("찜목록 저장");
  };

  const addCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("찜목록 저장");
  };

  return (
    <div className="group">
      {/* 이미지 */}
      <div className="bg-(--bg-sub) rounded-md p-5 relative overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full object-cover aspect-square group-hover:scale-110 duration-500"
        />
        <button
          type="button"
          className="bg-(--bg) p-3 rounded-full absolute top-5 left-5"
          onClick={addWish}>
          <Heart />
        </button>
        <button
          type="button"
          className="block md:hidden bg-(--bg) p-3 rounded-full absolute top-5 right-5"
          onClick={addCart}>
          <ShoppingCartPlus />
        </button>
        <button
          type="button"
          className="hidden md:block bg-(--main) w-[calc(100%-40px)] rounded-md absolute translate-y-10 text-(--bg) py-2 group-hover:-translate-y-10 duration-500"
          onClick={addCart}>
          장바구니 담기
        </button>
      </div>

      {/* 기본 정보 */}
      <div className="py-4 border-b border-(--border) px-2">
        <span className="text-sm text-(--accent) font-bold">{item.brand}</span>
        <h3 className="font-bold mt-3">{item.title}</h3>

        <ul className="flex items-center gap-4 mt-1">
          <li className="text-sm text-(--mute)">구경 {item.aperture}mm</li>
          <li className="text-sm text-(--mute)">
            초점거리 {item.focalLength}mm
          </li>
        </ul>

        <strong className="block text-xl mt-4">
          {item.price.toLocaleString("ko-KR")}원
        </strong>
      </div>
    </div>
  );
});

const ProductSkeleton = function ProductSkeleton() {
  return (
    <div className="group">
      {/* 이미지 */}
      <div className="bg-(--bg-sub) rounded-md p-5 relative overflow-hidden">
        <Telescope className="w-full h-auto text-(--accent)" />
        <div className="bg-(--bg) p-3 rounded-full absolute top-5 left-5">
          <Heart />
        </div>
        <div className="block md:hidden bg-(--bg) p-3 rounded-full absolute top-5 right-5">
          <ShoppingCartPlus />
        </div>
      </div>

      {/* 기본 정보 */}
      <div className="py-4 border-b border-(--border) px-2">
        <div className="rounded-md bg-(--border) w-20 h-4 animate-pulse" />

        <div className="rounded-md bg-(--border) w-60 h-6 animate-pulse mt-3" />

        <div className="rounded-md bg-(--border) w-45 h-5 animate-pulse mt-1" />

        <div className="rounded-md bg-(--border) w-30 h-7 animate-pulse mt-4" />
      </div>
    </div>
  );
};

export { ProductCard, ProductSkeleton };
