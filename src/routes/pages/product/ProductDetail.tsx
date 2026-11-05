import { useParams } from "react-router";
import { useProductQuery } from "../../../hook/useProductQuery";
import ProductDetailSkeleton from "../../../components/product/ProductDetailSkeleton";
import { useState } from "react";
import { Minus, Plus, Star, Telescope, X } from "lucide-react";
import Wrap from "../../../components/common/Wrap";

export default function ProductDetail() {
  const { id } = useParams();
  const suitability = [
    { id: "moon", title: "달" },
    { id: "planet", title: "행성" },
    { id: "deepSKy", title: "딥스카이" },
    { id: "astrophotography", title: "천체사진" },
  ];

  const baseSpec = [
    { id: "aperture", title: "구경" },
    { id: "focalLength", title: "초점거리" },
    { id: "apertureRatio", title: "초점비" },
    { id: "weight", title: "무게" },
    { id: "goto", title: "GoTo" },
    { id: "portability", title: "휴대성" },
  ];

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

  const recommendTxt = (recommended: string) => {
    switch (recommended) {
      case "입문자":
        return "망원경이 처음인 입문자";
      case "초보자":
        return "망원경이 어색한 초보자";
      case "숙련자":
        return "망원경이 익숙한 숙련자";
      case "전문가":
        return "망원경이 일상인 전문가";
      default:
        return "망원경이 처음인 입문자";
    }
  };

  const baseSpecTxt = (spec: string) => {
    switch (spec) {
      case "aperture":
        return `${item.aperture}mm`;

      case "focalLength":
        return `${item.focalLength}mm`;

      case "apertureRatio":
        return `f/${item.apertureRatio}`;

      case "weight":
        return `${(item.weight.tubeWeight + item.weight.mountWeight).toFixed(2)}kg`;

      case "goto":
        return `${item.goto}`;

      case "portability":
        return (
          <div className="flex items-center">
            {Array.from({ length: item.portability }).map((_, index) => (
              <Star
                key={index}
                fill="var(--accent)"
                stroke="var(--accent)"
                size={18}
              />
            ))}
          </div>
        );

      default:
        return "-";
    }
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
                <p className="text-sm text-(--mute)">
                  {item.brand} · {item.category}
                </p>
                <h2 className="font-bold text-xl mt-5">{item.title}</h2>
                <h3 className="font-black text-(--accent) text-2xl mt-5">
                  {item.price.toLocaleString("ko-KR")}원
                </h3>
                <p className="text-(--mute) text-sm">배송비 3,000원</p>
              </div>
              {/* 간단 스펙 */}
              <div className="mt-5">
                <ul className="grid grid-cols-3 gap-2">
                  {baseSpec.map((spec) => (
                    <li className="bg-(--bg-sub) py-2 flex flex-col items-center justify-between gap-2.5">
                      <p className="font-semibold">{baseSpecTxt(spec.id)}</p>
                      <span className="text-sm text-(--mute)">
                        {spec.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 관측 적합도 */}
              <div className="bg-(--bg-sub) my-5 py-5 px-2.5">
                <h4 className="text-lg font-bold">관측 적합도</h4>
                <ul className="my-5 flex flex-col gap-2.5">
                  {suitability.map((suit) => (
                    <li key={suit.id} className="flex items-center gap-5">
                      <p className="text-sm w-25 text-(--mute)">{suit.title}</p>
                      <div
                        className="w-full bg-(--bg) h-2 relative before:block before:h-2 before:bg-(--accent) before:w-(--bar-width)"
                        style={
                          {
                            "--bar-width": `${(item.suitability[suit.id] / 5) * 100}%`,
                          } as React.CSSProperties
                        }
                      />
                      <strong>{item.suitability[suit.id]}/5</strong>
                    </li>
                  ))}
                </ul>
                <p>이런 분께 추천 · {recommendTxt(item.recommended)}</p>
              </div>

              {/* 수량, 구매, 장바구니, 찜하기, 비교하기 */}
              <div className="border-t border-(--border) py-5">
                {/* 수량 조작 및 가격 */}
                <div className="flex items-center justify-between">
                  {/* 수량 조작 */}
                  <div className="border border-(--border) w-25 flex items-center gap-2">
                    <button
                      type="button"
                      className="p-1"
                      onClick={handleDecreaseBuyAmount}
                      disabled={buyAmount <= 1}>
                      <Minus size={16} />
                    </button>
                    <span className="text-base p-1 flex-1 flex justify-center items-center">
                      {buyAmount}
                    </span>
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
                {item.desc_jsonb.map(
                  (desc: { title: string; content: string }) => (
                    <li className="bg-(--bg-sub) border border-(--border) px-2.5 py-5 flex-1">
                      <h6 className="font-black text-lg mb-1">{desc.title}</h6>
                      <p className="text-sm text-(--mute)">{desc.content}</p>
                    </li>
                  ),
                )}
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
                <p>
                  {(item.weight.tubeWeight + item.weight.mountWeight).toFixed(
                    2,
                  )}
                  kg
                </p>
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
              <button
                type="button"
                className="border border-(--border) p-2 ml-2">
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
