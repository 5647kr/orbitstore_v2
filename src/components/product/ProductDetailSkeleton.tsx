import {
  ArrowRight,
  Download,
  Heart,
  Mail,
  Minus,
  Plus,
  Star,
  Telescope,
} from "lucide-react";
import Wrap from "../common/Wrap";
import ProductDetailIndex from "./ProductDetailIndex";

const wordGuide = [
  {
    id: "구경",
    title: "구경",
    desc: "망원경 주경의 지름입니다. 구경이 클수록 더 많은 빛을 모아 어두운 천체를 밝고 세밀하게 관측할 수 있습니다.",
  },
  {
    id: "초점거리",
    title: "초점거리",
    desc: "렌즈에서 초점이 맺히는 지점까지의 거리입니다. 길수록 같은 아이피스에서 더 높은 배율을 제공합니다.",
  },
  {
    id: "초점비",
    title: "초점비",
    desc: "초점거리를 구경으로 나눈 값입니다. 낮은 초점비는 넓고 밝은 시야에, 높은 초점비는 행성 관측에 유리합니다",
  },
];

const baseSpec = [
  { id: "aperture", title: "구경" },
  { id: "focalLength", title: "초점거리" },
  { id: "apertureRatio", title: "초점비" },
  { id: "weight", title: "무게" },
  { id: "goto", title: "GoTo" },
  { id: "portability", title: "휴대성" },
];

export default function ProductDetailSkeleton() {
  return (
    <>
      <Wrap>
        {/* 이미지 및 기본 정보 및 수량 조작 */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* 이미지 */}
          <div className="flex-1 w-full p-5 bg-(--bg-sub) rounded-md flex justify-center items-center">
            <Telescope className="w-full h-auto text-(--accent)" />
          </div>
          {/* 제품 정보 */}
          <div className="flex-1 w-full">
            <div className="text-lg flex items-center gap-5">
              <div className="rounded-md bg-(--border) w-16.75 h-7 animate-pulse" />
              <div className="rounded-md bg-(--border) w-14.5 h-5 animate-pulse" />
            </div>

            {/* 상품명 */}
            <div className="rounded-md bg-(--border) w-70 h-9 animate-pulse my-5" />

            {/* 재고 및 리뷰 */}
            <div className="flex gap-5 items-center">
              <p className="text-sm text-(--mute) border-b border-(--border)">
                리뷰 0개
              </p>
            </div>

            {/* 가격 */}
            <div className="rounded-md bg-(--border) w-45 h-9 animate-pulse my-5" />

            {/* 간단한 스펙 */}
            <ul className="border-y border-(--border) flex items-center py-4">
              <li className="flex-1">
                <h4 className="text-sm text-(--mute)">구경</h4>
                <div className="rounded-md bg-(--border) w-10 h-5 animate-pulse mt-2" />
              </li>
              <li className="flex-1 border-l border-(--border) pl-4">
                <h4 className="text-sm text-(--mute)">초점거리</h4>
                <div className="rounded-md bg-(--border) w-10 h-5 animate-pulse mt-2" />
              </li>
              <li className="flex-1 border-l border-(--border) pl-4">
                <h4 className="text-sm text-(--mute)">초점비</h4>
                <div className="rounded-md bg-(--border) w-10 h-5 animate-pulse mt-2" />
              </li>
            </ul>

            <div>
              <div className="flex items-center justify-between py-4">
                <span className="text-sm text-(--mute)">수량</span>
                {/* 수량 조작 */}
                <div className="border border-(--border) w-25 flex items-center">
                  <div className="p-1">
                    <Minus size={16} />
                  </div>
                  <span className="text-base p-1 flex-1 flex justify-center items-center">
                    1
                  </span>
                  <div className="p-1">
                    <Plus size={16} />
                  </div>
                </div>
              </div>

              {/* 가격 */}
              <div className="flex items-center justify-between py-4">
                <p className="text-sm text-(--mute)">총 상품금액</p>
                <div className="rounded-md bg-(--border) w-45 h-9 animate-pulse" />
              </div>

              {/* 구매, 장바구니, 찜하기, 비교하기 버튼 모음 */}
              <div className="grid grid-cols-6 gap-2 mt-5">
                <div className="rounded-md border border-(--border) col-span-1 p-4 flex justify-center items-center">
                  <Heart />
                </div>
                <div className="rounded-md border border-(--main) p-4 col-span-2 text-center">
                  장바구니
                </div>
                <div className="rounded-md border p-4 col-span-3 border-(--mute) bg-(--mute) text-(--bg) text-center">
                  바로 구매하기
                </div>
                <div className="rounded-md border border-(--main) p-4 col-span-6 flex items-center text-left gap-4 hover:bg-(--main) hover:text-(--bg)">
                  <div className="pr-4">
                    <Download />
                  </div>
                  <div className="flex-1">
                    <p>비교하기</p>
                    <span className="text-sm text-(--mute)">
                      다른 망원경과 주요 사양을 한눈에 비교해보세요
                    </span>
                  </div>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrap>

      {/* info */}
      <section className="bg-(--main) py-5 px-10">
        <ul className="grid grid-cols-3 md:grid-cols-6 text-center text-(--bg) gap-5">
          {baseSpec.map((spec) => (
            <li key={spec.id}>
              <h3 className="text-(--mute)">{spec.title}</h3>
              <div className="rounded-md bg-(--border) w-full h-7 animate-pulse mt-3" />
            </li>
          ))}
        </ul>
      </section>

      <ProductDetailIndex />

      {/* 상품 정보 */}
      <div
        className="bg-(--bg-sub) scroll-mt-20 md:scroll-mt-16"
        key="info"
        id="info">
        <Wrap>
          <h4 className="text-(--accent) text-sm font-bold">
            PRODUCT HIGHLIGHT
          </h4>
          <h5 className="text-2xl font-bold mt-3 mb-4">상품 정보</h5>

          <ul className="flex flex-col md:flex-row gap-4">
            <li className="flex-1">
              <span className="text-lg font-bold text-(--accent)">01</span>
              <div className="rounded-md bg-(--border) w-30 max-w-full h-7 animate-pulse mb-1" />
              <div>
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
              </div>
            </li>
            <li className="flex-1">
              <span className="text-lg font-bold text-(--accent)">02</span>
              <div className="rounded-md bg-(--border) w-30 max-w-full h-7 animate-pulse mb-1" />
              <div>
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
              </div>
            </li>
            <li className="flex-1">
              <span className="text-lg font-bold text-(--accent)">03</span>
              <div className="rounded-md bg-(--border) w-30 max-w-full h-7 animate-pulse mb-1" />
              <div>
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
                <div className="rounded-md bg-(--border) w-full max-w-full h-5 animate-pulse mt-1" />
              </div>
            </li>
          </ul>
        </Wrap>
      </div>

      {/* 관측 적합도 */}
      <div key="fit" id="fit" className=" scroll-mt-20 md:scroll-mt-16">
        <Wrap>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <h4 className="text-(--accent) text-sm font-bold">
                OBSERVATION FIT
              </h4>
              <h5 className="text-2xl font-bold mt-3 mb-4">관측 적합도</h5>
              <p className="text-sm text-(--mute)">
                5점 만점 기준으로 제품의 관측 성향을 한눈에 확인하세요.
              </p>
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <ul>
                <li className="flex items-center gap-4 justify-between py-3">
                  <p className="text-(--mute) w-20 text-sm">달</p>
                  <div className="flex gap-1 flex-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-full h-2 rounded-md bg-(--bg-sub)"
                      />
                    ))}
                  </div>
                  <span className="w-20 text-right">0 / 5</span>
                </li>
                <li className="flex items-center gap-4 justify-between py-3">
                  <p className="text-(--mute) w-20 text-sm">행성</p>
                  <div className="flex gap-1 flex-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-full h-2 rounded-md bg-(--bg-sub)"
                      />
                    ))}
                  </div>
                  <span className="w-20 text-right">0 / 5</span>
                </li>
                <li className="flex items-center gap-4 justify-between py-3">
                  <p className="text-(--mute) w-20 text-sm">천체사진</p>
                  <div className="flex gap-1 flex-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-full h-2 rounded-md bg-(--bg-sub)"
                      />
                    ))}
                  </div>
                  <span className="w-20 text-right">0 / 5</span>
                </li>
                <li className="flex items-center gap-4 justify-between py-3">
                  <p className="text-(--mute) w-20 text-sm">천체사진</p>
                  <div className="flex gap-1 flex-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-full h-2 rounded-md bg-(--bg-sub)"
                      />
                    ))}
                  </div>
                  <span className="w-20 text-right">0 / 5</span>
                </li>
              </ul>
              <div className="rounded-md bg-(--border) ml-auto mt-5 w-50 h-5 animate-pulse" />
            </div>
          </div>
        </Wrap>
      </div>

      {/* 용어 가이드 */}
      <div
        className="bg-(--bg-sub) scroll-mt-20 md:scroll-mt-16"
        key="guide"
        id="guide">
        <Wrap>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <h4 className="text-(--accent) text-sm font-bold">
                TELESCOPE GUIDE
              </h4>
              <h5 className="text-2xl font-bold mt-3 mb-4">용어 가이드</h5>
              <p className="text-sm text-(--mute)">
                어려운 용어도 쉽게 이해하세요
              </p>
            </div>

            <div className="flex-1 mt-4 md:mt-0 border-t-2 border-(--main-dark)">
              <ul>
                {wordGuide.map((guide, index) => (
                  <li key={guide.id}>
                    <details className="group border-b border-(--border) py-5 cursor-pointer">
                      <summary className="flex items-center gap-5">
                        <span className="text-(--accent) text-sm ">
                          0{index + 1}
                        </span>
                        <h6 className="flex-1 text-lg">{guide.title}</h6>
                        <Plus className="group-open:hidden" />
                        <Minus className="hidden group-open:block" />
                      </summary>
                      <div className="py-5 px-10">
                        <p className="text-sm text-(--mute) break-keep">
                          {guide.desc}
                        </p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Wrap>
      </div>

      {/* 상세 스펙 */}
      <div key="spec" id="spec" className=" scroll-mt-20 md:scroll-mt-16">
        <Wrap>
          <div>
            <h4 className="text-(--accent) text-sm font-bold">
              SPECIFICATIONS
            </h4>
            <h5 className="text-2xl font-bold mt-3 mb-4">상세 스펙</h5>

            <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-(--main-dark)">
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
              <>
                <div className="p-4 border-b border-r border-(--border) bg-(--bg-sub) text-(--mute) text-sm flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
                <div className="p-4 border-b border-(--border) text-base flex items-center">
                  <div className="rounded-md bg-(--border) w-50 h-5 animate-pulse" />
                </div>
              </>
            </div>
          </div>
        </Wrap>
      </div>

      {/* 상품 리뷰 추후 추가 예정 */}
      <div
        className="bg-(--bg-sub) scroll-mt-20  md:scroll-mt-16"
        key="review"
        id="review">
        <Wrap>
          <div>
            <h4 className="text-(--accent) text-sm font-bold">
              PRODUCT REVIEW
            </h4>
            <h5 className="text-2xl font-bold mt-3 mb-4">상품 리뷰</h5>
            <p className="text-sm text-(--mute)">
              이 제품을 직접 사용한 고객의 경험이 쌓이는 공간입니다
            </p>
          </div>

          <div className="mt-4 border-t-2 border-(--main-dark) bg-(--bg) rounded-b-md">
            <div className="p-10 flex flex-col items-center text-center md:text-left gap-4 md:flex-row">
              {/* 평균 평점 */}
              <div className="w-full border-b border-r-0 border-(--border) flex-1 md:border-b-0 md:border-r pb-4 md:pb-0">
                <strong className="text-3xl">0.0</strong>
                <p>리뷰 0개</p>
              </div>
              {/* 평균 별 수치 */}
              <div className="flex-1 md:flex-3">
                <div className="flex justify-center md:justify-start">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} />
                  ))}
                </div>
                <p className="mt-3">아직 등록된 리뷰가 없습니다.</p>
                <span className="text-sm text-(--mute)">
                  이 제품을 가장 먼저 사용하고 솔직한 경험을 들려주세요.
                </span>
              </div>
              {/* 리뷰 버튼 */}
              <div>
                <button
                  type="button"
                  className="py-2 px-4 border-2 border-(--main) font-bold ml-auto">
                  리뷰 작성하기
                </button>
              </div>
            </div>

            {/* 리뷰가 있을 경우 보여질 영역 */}
            <div className="p-10">
              <ul>{/* <li>어쩌고 에요</li> */}</ul>
            </div>
          </div>
        </Wrap>
      </div>

      {/* 상품 문의 */}
      <div key="inquiry" id="inquiry" className=" scroll-mt-20 md:scroll-mt-16">
        <Wrap>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <h4 className="text-(--accent) text-sm font-bold">PRODUCT Q&A</h4>
              <h5 className="text-2xl font-bold mt-3 mb-4">상품 문의</h5>
              <p className="text-sm text-(--mute)">
                제품 선택이나 호환성에 대해 궁금한 점을 남겨주세요.
                <br /> 관측 전문가가 영업일 기준 1~2일 내 답변드립니다.
              </p>
            </div>
            <div className="flex-1 mt-4 md:mt-0 border-t-2 border-(--main-dark)">
              {/* 문의 입력 폼 */}
              <div className="p-4 bg-(--bg-sub) rounded-b-md">
                <form className="">
                  <textarea className="bg-(--bg) rounded-md w-full min-h-25 p-4" />
                  <button
                    type="button"
                    className="ml-auto mt-3 block rounded-md py-2 px-4 bg-(--main) text-(--bg) ">
                    상품 문의하기
                  </button>
                </form>
              </div>

              {/* 등록된 상문 문의가 있을 때 */}

              {/* 등록된 상품 문의가 없을 때 */}
              <div className="p-10 flex flex-col items-center gap-5">
                <Mail />
                <p>등록된 상품 문의가 없습니다.</p>
              </div>
            </div>
          </div>
        </Wrap>
      </div>

      {/* 배송·교환·환불 안내*/}
      <div
        className="bg-(--bg-sub) scroll-mt-20  md:scroll-mt-16"
        key="notice"
        id="notice">
        <Wrap>
          <div>
            <h4 className="text-(--accent) text-sm font-bold">
              SHOPPING GUIDE
            </h4>
            <h5 className="text-2xl font-bold mt-3 mb-4">
              배송·교환·환불 안내
            </h5>
            <p className="text-sm text-(--mute)">구매 전 꼭 확인해주세요</p>
          </div>

          <div className="mt-4 border-t-2 border-(--main-dark)">
            <ul>
              <li>
                <div className="group border-b border-(--border) py-5 cursor-pointer flex items-center gap-5">
                  <span className="text-(--accent) text-sm ">01</span>
                  <h6 className="flex-1 text-lg">배송</h6>
                  <Plus className="group-open:hidden" />
                  <Minus className="hidden group-open:block" />
                </div>
              </li>
              <li>
                <div className="group border-b border-(--border) py-5 cursor-pointer flex items-center gap-5">
                  <span className="text-(--accent) text-sm ">02</span>
                  <h6 className="flex-1 text-lg">교환 · 환불</h6>
                  <Plus className="group-open:hidden" />
                  <Minus className="hidden group-open:block" />
                </div>
              </li>
              <li>
                <div className="group border-b border-(--border) py-5 cursor-pointer flex items-center gap-5">
                  <span className="text-(--accent) text-sm ">03</span>
                  <h6 className="flex-1 text-lg">A/S 안내</h6>
                  <Plus className="group-open:hidden" />
                  <Minus className="hidden group-open:block" />
                </div>
              </li>
            </ul>
          </div>
        </Wrap>
      </div>
    </>
  );
}
