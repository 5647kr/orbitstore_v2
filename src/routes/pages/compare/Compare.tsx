import { useLocation } from "react-router";
import Wrap from "../../../components/common/Wrap";
import NavigatePath from "../../../components/common/NavigatePath";
import { useCompareQuery } from "../../../hook/compare/useCompareQuery";
import useCompareStore from "../../../store/useCompareStore";
import {
  CompareCard,
  CompareCardSkeleton,
} from "../../../components/compare/CompareCard";
import CompareSkeleton from "../../../components/compare/CompareSkeleton";

export default function Compare() {
  const { pathname } = useLocation();
  const compareIds = useCompareStore((state) => state.compareIds);

  const { data: products, isLoading } = useCompareQuery({ compareIds });

  if (compareIds.length === 0) return <CompareSkeleton />;

  const filteredProduct =
    products?.filter((product) => compareIds.includes(product.id)) ?? [];

  const compareMenu = [
    { id: "title", title: `비교 제품 ${filteredProduct?.length} / 4` },
    { id: "brand", title: "브랜드" },
    { id: "category", title: "망원경 종류" },
    { id: "aperture", title: "구경" },
    { id: "focalLength", title: "초점거리" },
    { id: "apertureRatio", title: "초점비" },
    { id: "goto", title: "Goto 지원" },
    { id: "portability", title: "휴대 점수" },
    { id: "recommended", title: "추천 대상" },
  ];

  return (
    <Wrap>
      <NavigatePath path={pathname} />

      {/* hero */}
      <section className="py-10">
        <div>
          <span className="text-(--accent) font-bold">COMPARE</span>
          <h2 className="text-5xl my-5">
            한눈에 비교하고
            <br />더 정확하게 선택하세요
          </h2>
          <p className="text-sm text-(--mute)">
            최대 3개 제품의 핵심 스펙과 특징을 비교할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="border-t-2 border-(--main)">
        <div className="flex overflow-x-auto">
          {/* 제품 텍스트 */}
          <div className="bg-(--bg) flex-1 w-full sticky left-0 z-10 border-r border-(--border)">
            <ul>
              {compareMenu.map((menu, index) => (
                <li
                  key={menu.id}
                  className={`even:bg-(--bg-sub) w-60 p-5 ${index === 0 ? "h-98" : "h-auto"}`}>
                  <p className="">{menu.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 제품이 표시 될 곳 */}
          <div className="flex-4 w-full bg-(--bg)">
            <ul className="flex ">
              {isLoading && (
                <>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li key={index} className="w-60 border-r border-(--border)">
                      <CompareCardSkeleton />
                    </li>
                  ))}
                </>
              )}

              {!isLoading && filteredProduct.length > 0 && (
                <>
                  {filteredProduct.map((product) => (
                    <li
                      key={product.id}
                      className="w-60 border-r border-(--border)">
                      <CompareCard item={product} />
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
    </Wrap>
  );
}
