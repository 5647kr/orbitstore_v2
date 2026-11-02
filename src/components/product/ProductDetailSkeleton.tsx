import { Minus, Plus, Telescope } from "lucide-react";
import Wrap from "../common/Wrap";

export default function ProductDetailSkeleton() {
  return (
    <>
      <Wrap>
        <div className="flex flex-col gap-5 relative">
          {/* 이미지, 상품 기본 정보란 */}
          <section className="flex flex-col gap-5 md:flex-row">
            {/* 이미지 */}
            <div className="w-full bg-(--bg-sub) flex justify-center items-center p-5">
              <Telescope size={200} className="text-(--accent)" />
            </div>
            {/* 정보란 */}
            <div className="shadow-[inset_0_0_10px_darkred] w-full">
              {/* 기본 정보 */}
              <div>
                <div className="w-40 h-6 bg-(--border) animate-pulse" />
                <div className="w-46 h-8 mt-1 bg-(--border) animate-pulse" />
              </div>
              {/* 간단 스펙 */}
              <div className="mt-5">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-(--border) animate-pulse w-full h-16" />
                  <div className="bg-(--border) animate-pulse w-full h-16" />
                  <div className="bg-(--border) animate-pulse w-full h-16" />
                  <div className="bg-(--border) animate-pulse w-full h-16" />
                  <div className="bg-(--border) animate-pulse w-full h-16" />
                  <div className="bg-(--border) animate-pulse w-full h-16" />
                </div>
              </div>

              {/* 관측 적합도 */}
              <div className="border border-(--border) bg-(--bg-sub) my-5">
                <h4>관측 적합도</h4>
              </div>

              {/* 수량, 구매, 장바구니, 찜하기, 비교하기 */}
              <div className="border-t border-(--border) py-5">
                {/* 수량 조작 및 가격 */}
                <div className="flex items-center justify-between">
                  {/* 수량 조작 */}
                  <div className="border border-(--border) w-fit flex items-center gap-2">
                    <div className="p-1">
                      <Minus size={16} />
                    </div>
                    <span className="text-base p-1">1</span>
                    <div className="p-1">
                      <Plus size={16} />
                    </div>
                  </div>

                  {/* 가격 */}
                  <div className="flex items-end gap-1">
                    <p className="text-sm text-(--mute)">총 상품금액</p>
                    <div className="w-25 h-7 bg-(--border) animate-pulse" />
                  </div>
                </div>

                {/* 구매, 장바구니, 찜하기, 비교하기 버튼 모음 */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <div className="border border-(--accent) bg-(--accent) text-(--bg) p-2 text-center">
                    바로 구매하기
                  </div>
                  <div className="border border-(--border) p-2 text-center">
                    장바구니에 담기
                  </div>
                  <div className="border border-(--border) p-2 text-center">
                    비교하기
                  </div>
                  <div className="border border-(--border) p-2 text-center">
                    찜하기
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 상품 네이게이션 */}
          <section className="border-b border-(--border) sticky top-0 left-0 bg-(--bg) p-5 mt-10">
            <ul className="flex items-center gap-5">
              <li>
                <div className="p-1 text-sm font-normal text-(--text)">
                  상품 정보
                </div>
              </li>
              <li>
                <div className="p-1 text-sm font-normal text-(--text)">
                  상세 스펙
                </div>
              </li>
              <li>
                <div className="p-1 text-sm font-normal text-(--text)">
                  배송·환불
                </div>
              </li>
              <li>
                <div className="p-1 text-sm font-normal text-(--text)">
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
                <div className="bg-(--bg-sub) px-2.5 py-5 w-full h-24" />
                <div className="bg-(--bg-sub) px-2.5 py-5 w-full h-24" />
                <div className="bg-(--bg-sub) px-2.5 py-5 w-full h-24" />
              </div>
            </div>

            {/* 용어 가이드 */}
            <div>
              <h5 className="text-2xl font-bold">용어 가이드</h5>
              <div className="flex flex-col gap-5 md:flex-row mt-5">
                <div className="bg-(--bg-sub) px-2.5 py-5 w-full h-24" />
                <div className="bg-(--bg-sub) px-2.5 py-5 w-full h-24" />
                <div className="bg-(--bg-sub) px-2.5 py-5 w-full h-24" />
              </div>
            </div>
          </section>

          {/* 상세 스펙 */}
          <section className="shadow-[inset_0_0_10px_skyblue]">
            <h5 className="text-2xl font-bold">상세 스펙</h5>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">형식</span>
                <div className="bg-(--bg-sub) w-24 h-6" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">구경</span>
                <div className="bg-(--bg-sub) w-24 h-6" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">초점거리</span>
                <div className="bg-(--bg-sub) w-24 h-6" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">초점비</span>
                <div className="bg-(--bg-sub) w-24 h-6" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">무게</span>
                <div className="bg-(--bg-sub) w-24 h-6" />
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">GoTo</span>
                <div className="bg-(--bg-sub) w-24 h-6" />
              </li>
            </ul>
          </section>

          {/* 배송·교환·환불 */}
          <section className="shadow-[inset_0_0_10px_blue]">
            <h5 className="text-2xl font-bold">배송·교환·환불</h5>
          </section>

          {/* 상품 문의 */}
          <section className="shadow-[inset_0_0_10px_purple]">
            <div className="flex items-center justify-between">
              <h5 className="text-2xl font-bold">상품 문의</h5>
              <div className="border border-(--border) py-1 px-2">문의하기</div>
            </div>
          </section>
        </div>
      </Wrap>
    </>
  );
}
