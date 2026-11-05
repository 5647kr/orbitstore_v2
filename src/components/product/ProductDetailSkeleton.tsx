import { Minus, Plus, Telescope } from "lucide-react";
import Wrap from "../common/Wrap";

export default function ProductDetailSkeleton() {
  const baseSpec = [
    { id: "aperture", title: "구경" },
    { id: "focalLength", title: "초점거리" },
    { id: "apertureRatio", title: "초점비" },
    { id: "weight", title: "무게" },
    { id: "goto", title: "GoTo" },
    { id: "portability", title: "휴대성" },
  ];

  return (
    <>
      <Wrap>
        <div className="flex flex-col gap-5 relative ">
          {/* 이미지, 상품 기본 정보란 */}
          <section className="flex flex-col gap-5 md:flex-row">
            {/* 이미지 */}
            <div className="w-full bg-(--bg-sub) flex justify-center items-center p-5 relative">
              <Telescope size={200} className="text-(--accent)" />
            </div>
            {/* 정보란 */}
            <div className="w-full">
              {/* 기본 정보 */}
              <div>
                <div className="w-35 h-4 bg-(--border) animate-pulse" />
                <div className="w-100 h-6 bg-(--border) animate-pulse mt-5" />
                <div className="w-37 h-7 bg-(--border) animate-pulse mt-5" />
                <div className="w-21 h-4 bg-(--border) animate-pulse mt-1" />
              </div>
              {/* 간단 스펙 */}
              <div className="mt-5">
                <div className="grid grid-cols-3 gap-2">
                  {baseSpec.map((_, index) => (
                    <div
                      key={index}
                      className="h-17.5 bg-(--border) animate-pulse"></div>
                  ))}
                </div>
              </div>

              {/* 관측 적합도 */}
              <div className="h-65.5 bg-(--border) animate-pulse my-5" />

              {/* 수량, 구매, 장바구니, 찜하기, 비교하기 */}
              <div className="border-t border-(--border) py-5">
                {/* 수량 조작 및 가격 */}
                <div className="flex items-center justify-between">
                  {/* 수량 조작 */}
                  <div className="border border-(--border) w-25 flex items-center gap-2">
                    <div className="p-1">
                      <Minus size={16} />
                    </div>
                    <span className="text-base p-1 flex-1 flex justify-center items-center">
                      99
                    </span>
                    <div className="p-1">
                      <Plus size={16} />
                    </div>
                  </div>
                  {/* 가격 */}
                  <div className="w-56 h-6 bg-(--border) animate-pulse my-5 " />
                </div>

                {/* 구매, 장바구니, 찜하기, 비교하기 버튼 모음 */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <div className="h-10.5 bg-(--border) animate-pulse" />
                  <div className="h-10.5 bg-(--border) animate-pulse" />
                  <div className="h-10.5 bg-(--border) animate-pulse" />
                  <div className="h-10.5 bg-(--border) animate-pulse" />
                </div>
              </div>
            </div>
          </section>

          {/* 상품 네이게이션 */}
          <section className="border-b border-(--border) sticky top-0 left-0 bg-(--bg) p-5 mt-10 z-20">
            <ul className="flex items-center gap-5">
              <li>
                <div className="p-1 text-sm hover:text-(--accent) font-normal text-(--text)">
                  상품 정보
                </div>
              </li>
              <li>
                <div className="p-1 text-sm hover:text-(--accent) font-normal text-(--text)">
                  상세 스펙
                </div>
              </li>
              <li>
                <div className="p-1 text-sm hover:text-(--accent) font-normal text-(--text)">
                  배송·환불
                </div>
              </li>
              <li>
                <div className="p-1 text-sm hover:text-(--accent) font-normal text-(--text)">
                  문의
                </div>
              </li>
            </ul>
          </section>

          {/* 상품 정보 & 용어 가이드 */}
          <section className="flex flex-col gap-5">
            {/* 상품 정보 */}
            <div>
              <h5 className="text-2xl font-bold">상품 정보</h5>
              <div className="flex flex-col gap-5 md:flex-row mt-5">
                <div className="w-full h-28.5 bg-(--border) animate-pulse" />
                <div className="w-full h-28.5 bg-(--border) animate-pulse" />
                <div className="w-full h-28.5 bg-(--border) animate-pulse" />
              </div>
            </div>

            {/* 용어 가이드 */}
            <div>
              <h5 className="text-2xl font-bold">용어 가이드</h5>
              <div className="flex flex-col gap-5 md:flex-row mt-5">
                <div className="w-full h-28.5 bg-(--border) animate-pulse" />
                <div className="w-full h-28.5 bg-(--border) animate-pulse" />
                <div className="w-full h-28.5 bg-(--border) animate-pulse" />
              </div>
            </div>
          </section>

          {/* 상세 스펙 */}
          <section>
            <h5 className="text-2xl font-bold">상세 스펙</h5>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">형식</span>
                <div className="w-15 h-6 bg-(--border) animate-pulse" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">구경</span>
                <div className="w-15 h-6 bg-(--border) animate-pulse" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">초점거리</span>
                <div className="w-15 h-6 bg-(--border) animate-pulse" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">초점비</span>
                <div className="w-15 h-6 bg-(--border) animate-pulse" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">무게</span>
                <div className="w-15 h-6 bg-(--border) animate-pulse" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">GoTo</span>
                <div className="w-15 h-6 bg-(--border) animate-pulse" />
              </li>
            </ul>
          </section>

          {/* 배송·교환·환불 */}
          <section>
            <h5 className="text-2xl font-bold">배송·교환·환불</h5>
          </section>

          {/* 상품 문의 */}
          <section>
            <div className="flex items-center justify-between">
              <h5 className="text-2xl font-bold">상품 문의</h5>
              <div className="border border-(--border) py-1 px-2">문의하기</div>
            </div>
          </section>

          {/* 모바일용 하단 바 */}
          <section className="sticky bottom-0 left-0 bg-(--bg) p-5 flex justify-between items-center md:hidden">
            <div className="w-40 h-7 bg-(--border) animate-pulse" />
            {/* 장바구니, 바로 결제 버튼 */}
            <div className="flex items-center">
              <div className="w-25 h-10.5 bg-(--border) animate-pulse" />
              <div className="w-29 h-10.5 bg-(--border) animate-pulse ml-2" />
            </div>
          </section>
        </div>
      </Wrap>
    </>
  );
}
