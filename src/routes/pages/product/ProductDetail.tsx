import { useParams } from "react-router";
import { useProductQuery } from "../../../hook/useProductQuery";
import ProductDetailSkeleton from "../../../components/product/ProductDetailSkeleton";
import { useState } from "react";
import { Minus, Plus, Telescope, X } from "lucide-react";
import Wrap from "../../../components/common/Wrap";

export default function ProductDetail() {
  const { id } = useParams();
  // const navigate = useNavigate();

  const { data: item, isLoading } = useProductQuery({ id });

  const [activeNavigate, setActiveNavigate] = useState("");
  const [activeInquiry, setActiveInquiry] = useState(false);
  const [buyAmount, setBuyAmount] = useState(1);

  const handleActiveInquiry = () => {
    setActiveInquiry(true);
  };

  // 구매 수량 증가
  const handleIncreaseBuyAmount = () => {
    if (buyAmount >= item.amount) return;
    setBuyAmount((prev) => prev + 1);
  };

  // 구매 수량 감소
  const handleDecreaseBuyAmount = () => {
    if (buyAmount <= 1) return;
    setBuyAmount((prev) => prev - 1);
  };

  if (isLoading) return <ProductDetailSkeleton />;

  return (
    <>
      <Wrap>
        <div
          className={`flex flex-col gap-5 relative ${activeInquiry ? "h-screen overflow-hidden" : "h-auto"}`}>
          {/* 이미지, 상품 기본 정보란 */}
          <section className="flex flex-col gap-5 md:flex-row">
            {/* 이미지 */}
            <div className="w-full bg-(--bg-sub) flex justify-center items-center p-5 relative">
              <img src={item.img} alt={item.title} />
              <Telescope size={200} className="text-(--accent)" />

              {/* 품절 표시 */}
              {item.amount === 0 && (
                <div className="absolute w-full h-full bg-[rgba(0,0,0,0.75)] flex justify-center items-center">
                  <strong className="text-(--error) text-xl py-1 px-4 border-2 border-(--error) rotate-24">
                    품절
                  </strong>
                </div>
              )}
            </div>
            {/* 정보란 */}
            <div className="w-full">
              {/* 기본 정보 */}
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <h3 className="font-black text-(--accent) text-2xl">
                  {item.price.toLocaleString("ko-KR")}원
                </h3>
                <p className="text-(--mute) text-sm">배송비 3,000원</p>
              </div>
              {/* 간단 스펙 */}
              <div className="mt-5">
                <ul className="grid grid-cols-3 gap-2">
                  <li className="bg-(--bg-sub) py-2 text-center">
                    <p className="font-semibold">{item.aperture}mm</p>
                    <span className="text-sm text-(--mute)">구경</span>
                  </li>
                  <li className="bg-(--bg-sub) py-2 text-center">
                    <p className="font-semibold">{item.focalLength}mm</p>
                    <span className="text-sm text-(--mute)">초점거리</span>
                  </li>
                  <li className="bg-(--bg-sub) py-2 text-center">
                    <p className="font-semibold">{item.apertureRatio}mm</p>
                    <span className="text-sm text-(--mute)">초점비</span>
                  </li>
                  <li className="bg-(--bg-sub) py-2 text-center">
                    <p className="font-semibold">
                      {(item.tubeWeight + item.mountWeight).toFixed(2)}kg
                    </p>
                    <span className="text-sm text-(--mute)">무게</span>
                  </li>
                  <li className="bg-(--bg-sub) py-2 text-center">
                    <p className="font-semibold">{item.goto}</p>
                    <span className="text-sm text-(--mute)">GoTo</span>
                  </li>
                  <li className="bg-(--bg-sub) py-2 text-center">휴대성</li>
                </ul>
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
                    <button
                      type="button"
                      className="p-1"
                      onClick={handleDecreaseBuyAmount}
                      disabled={buyAmount <= 1}>
                      <Minus size={16} />
                    </button>
                    <span className="text-base p-1">{buyAmount}</span>
                    <button
                      type="button"
                      className="p-1"
                      onClick={handleIncreaseBuyAmount}
                      disabled={buyAmount >= item.amount}>
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* 가격 */}
                  <div className="flex items-end gap-1">
                    <p className="text-sm text-(--mute)">총 상품금액</p>
                    <strong className="text-xl font-black text-(--accent)">
                      {(item.price * buyAmount).toLocaleString("ko-KR")}원
                    </strong>
                  </div>
                </div>

                {/* 구매, 장바구니, 찜하기, 비교하기 버튼 모음 */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <button
                    type="button"
                    disabled={item.amount === 0}
                    className={`border p-2 ${item.amount === 0 ? "border-(--mute) bg-(--mute) text-(--bg)" : "border-(--accent) bg-(--accent) text-(--bg)"}`}>
                    {item.amount === 0 ? "품절" : "바로 구매하기"}
                  </button>
                  <button
                    type="button"
                    className="border border-(--border) p-2">
                    장바구니에 담기
                  </button>
                  <button
                    type="button"
                    className="border border-(--border) p-2">
                    비교하기
                  </button>
                  <button
                    type="button"
                    className="border border-(--border) p-2">
                    찜하기
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 상품 네이게이션 */}
          <section className="border-b border-(--border) sticky top-0 left-0 bg-(--bg) p-5 mt-10">
            <ul className="flex items-center gap-5">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveNavigate("base")}
                  className={`"p-1 text-sm hover:text-(--accent) ${activeNavigate === "base" ? "font-bold text-(--accent)" : "font-normal text-(--text)"}`}>
                  상품 정보
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveNavigate("spec")}
                  className={`"p-1 text-sm hover:text-(--accent) ${activeNavigate === "spec" ? "font-bold text-(--accent)" : "font-normal text-(--text)"}`}>
                  상세 스펙
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveNavigate("deliver")}
                  className={`"p-1 text-sm hover:text-(--accent) ${activeNavigate === "deliver" ? "font-bold text-(--accent)" : "font-normal text-(--text)"}`}>
                  배송·환불
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveNavigate("inquiry")}
                  className={`"p-1 text-sm hover:text-(--accent) ${activeNavigate === "inquiry" ? "font-bold text-(--accent)" : "font-normal text-(--text)"}`}>
                  문의
                </button>
              </li>
            </ul>
          </section>

          {/* 상품 정보 & 용어 가이드 */}
          <section className="flex flex-col gap-5">
            {/* 상품 정보 */}
            <div>
              <h5 className="text-2xl font-bold">상품 정보</h5>
              <ul className="flex flex-col gap-5 md:flex-row mt-5">
                <li className="bg-(--bg-sub) border border-(--border) px-2.5 py-5 flex-1">
                  <h6 className="font-black text-lg mb-1">쉬운 설치</h6>
                  <p className="text-sm text-(--mute)">
                    공구 없이 10분 안에 조립할 수 있어 첫 관측까지 빠릅니다.
                  </p>
                </li>
                <li className="bg-(--bg-sub) border border-(--border) px-2.5 py-5 flex-1">
                  <h6 className="font-black text-lg mb-1">선명한 시야</h6>
                  <p className="text-sm text-(--mute)">
                    달과 행성을 또렷하게 관측합니다.
                  </p>
                </li>
                <li className="bg-(--bg-sub) border border-(--border) px-2.5 py-5 flex-1">
                  <h6 className="font-black text-lg mb-1">선명한 시야</h6>
                  <p className="text-sm text-(--mute)">
                    삼각대, 한글 설명서, 설치 영상이 포함됩니다.
                  </p>
                </li>
              </ul>
            </div>

            {/* 용어 가이드 */}
            <div>
              <h5 className="text-2xl font-bold">용어 가이드</h5>
              <ul className="flex flex-col gap-5 md:flex-row mt-5">
                <li className="bg-(--bg-sub) border border-(--border) px-2.5 py-5 flex-1">
                  <h6 className="font-black text-lg mb-1">구경</h6>
                  <p className="text-sm text-(--mute)">
                    빛을 모으는 렌즈/거울의 지름(mm). 클수록 어두운 대상이 잘
                    보입니다.
                  </p>
                </li>
                <li className="bg-(--bg-sub) border border-(--border) px-2.5 py-5 flex-1">
                  <h6 className="font-black text-lg mb-1">초점거리</h6>
                  <p className="text-sm text-(--mute)">
                    렌즈/거울에서 초점까지 거리. 길수록 높은 배율에 유리합니다.
                  </p>
                </li>
                <li className="bg-(--bg-sub) border border-(--border) px-2.5 py-5 flex-1">
                  <h6 className="font-black text-lg mb-1">초점비</h6>
                  <p className="text-sm text-(--mute)">
                    초점거리 ÷ 구경. 작을수록 밝고 사진에 유리합니다.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* 상세 스펙 */}
          <section>
            <h5 className="text-2xl font-bold">상세 스펙</h5>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">형식</span>
                <p>
                  {item.category === "돕소니안"
                    ? item.category
                    : `${item.category.split("망원경")[0]}식`}
                </p>
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">구경</span>
                <p>{item.aperture}mm</p>
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">초점거리</span>
                <p>{item.focalLength}mm</p>
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">초점비</span>
                <p>f/{item.apertureRatio}</p>
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">무게</span>
                <p>{(item.tubeWeight + item.mountWeight).toFixed(2)} kg</p>
              </li>
              <li className="flex items-center border-b border-(--border) p-2">
                <span className="text-(--mute) w-25">GoTo</span>
                <p>{item.goto}</p>
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
              <button
                type="button"
                onClick={handleActiveInquiry}
                className="border border-(--border) py-1 px-2">
                문의하기
              </button>
            </div>
          </section>

          {/* 모바일용 하단 바 */}
          <section className="sticky bottom-0 left-0 bg-(--bg) p-5 flex justify-between items-center md:hidden">
            <strong className="text-xl font-black text-(--accent)">
              {(item.price * buyAmount).toLocaleString("ko-KR")}원
            </strong>
            {/* 장바구니, 바로 결제 버튼 */}
            <div>
              <button
                type="button"
                disabled={item.amount === 0}
                className={`border p-2 ${item.amount === 0 ? "border-(--mute) bg-(--mute) text-(--bg)" : "border-(--accent) bg-(--accent) text-(--bg)"}`}>
                {item.amount === 0 ? "품절" : "바로 구매하기"}
              </button>
              <button type="button" className="border border-(--border) p-2 ml-2">
                장바구니에 담기
              </button>
            </div>
          </section>

          {/* 문의 입력 폼 */}
          {activeInquiry && (
            <div className="fixed w-full h-screen bg-[rgba(0,0,0,0.5)] left-0 bottom-0 z-20 flex justify-center items-center">
              <div className="bg-(--bg) w-[60%]">
                <div className="flex justify-between items-center p-4 bg-(--bg-sub)">
                  <h2 className="text-lg font-semibold">상품 문의</h2>
                  <button type="button" onClick={() => setActiveInquiry(false)}>
                    <X />
                  </button>
                </div>
                <form className="bg-(--bg) p-5">
                  <div>
                    <h3>상품명</h3>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <label htmlFor="inquiry">문의 내용</label>
                    <textarea
                      name=""
                      id="inquiry"
                      className="w-full h-40 resize-none border border-(--border) focus:outline-0 p-1"
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </Wrap>
    </>
  );
}
