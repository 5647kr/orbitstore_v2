import { Telescope, X } from "lucide-react";
import { Link } from "react-router";
import useCompareStore from "../../store/useCompareStore";

export function CompareCard({ item }: { item: Compare }) {
  const removeCompareId = useCompareStore((state) => state.removeCompareId);
  return (
    <div className="relative">
      {/* 이미지 및 간단 인포 */}
      <div className="p-5 flex flex-col gap-3">
        <img src={item.img} alt={item.title} />
        <span className="text-(--accent) font-bold text-sm">{item.brand}</span>
        <h2 className="text-sm">{item.title}</h2>
        <p className="font-bold">{item.price.toLocaleString("ko-KR")}원</p>
        <Link
          to={`/product/${item.id}`}
          target="_blank"
          className="py-2 px-4 bg-(--main) text-(--bg) text-center">
          제품 보기
        </Link>
      </div>
      {/* 브랜드 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <p>{item.brand}</p>
      </div>
      {/* 망원경 종류 */}
      <div className="p-5 text-center">
        <p>{item.category}</p>
      </div>
      {/* 구경 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <p>{item.aperture}mm</p>
      </div>
      {/* 초점거리 */}
      <div className="p-5 text-center">
        <p>{item.focalLength}mm</p>
      </div>
      {/* 초점비 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <p>f/{item.apertureRatio}</p>
      </div>
      {/* Goto 지원 */}
      <div className="p-5 text-center">
        <p>{item.goto}</p>
      </div>
      {/* 휴대 점수 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <p>{item.portability} / 5</p>
      </div>
      {/* 추천 대상 */}
      <div className="p-5 text-center">
        <p>{item.recommended}</p>
      </div>

      {/* 삭제 버튼 */}
      <button
        type="button"
        className="absolute top-0 right-0 p-5"
        onClick={() => removeCompareId(item.id)}>
        <X />
      </button>
    </div>
  );
}

export function CompareCardSkeleton() {
  return (
    <div className="relative">
      {/* 이미지 및 간단 인포 */}
      <div className="p-5 flex flex-col gap-3">
        <Telescope className="w-full h-auto text-(--accent)" />
        <div className="w-20 h-5 bg-(--border) animate-pulse rounded-md" />
        <div className="w-full h-5 bg-(--border) animate-pulse rounded-md" />
        <div className="w-25 h-6 bg-(--border) animate-pulse rounded-md" />
        <div className="py-2 px-4 bg-(--main) text-(--bg) text-center">
          제품 보기
        </div>
      </div>
      {/* 브랜드 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>
      {/* 망원경 종류 */}
      <div className="p-5 text-center">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>
      {/* 구경 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>
      {/* 초점거리 */}
      <div className="p-5 text-center">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>
      {/* 초점비 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>
      {/* Goto 지원 */}
      <div className="p-5 text-center">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>
      {/* 휴대 점수 */}
      <div className="p-5 text-center bg-(--bg-sub)">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>
      {/* 추천 대상 */}
      <div className="p-5 text-center">
        <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
      </div>

      {/* 삭제 버튼 */}
      <div className="absolute top-0 right-0 p-5">
        <X />
      </div>
    </div>
  );
}
