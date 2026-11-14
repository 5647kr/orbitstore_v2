import { Link } from "react-router";
import Wrap from "../../../components/common/Wrap";
import { ArrowRight, Headset, Mail, Smartphone } from "lucide-react";
import { useGuidesQuery } from "../../../hook/support/useSupportQuery";

export default function Support() {
  const { data: guides = [], isLoading } = useGuidesQuery();

  return (
    <>
      {/* hero & 검색 */}
      <section className="py-20 text-center bg-(--main) text-(--bg)">
        <span className="text-(--accent) font-bold">ORBITSTORE SUPPORT</span>
        <h2 className="text-5xl my-5">무엇을 도와드릴까요?</h2>
        <p className="text-sm">
          제품 선택부터 관측 방법까지, 필요한 도움을 선택해주세요.
        </p>
      </section>

      <Wrap>
        {/* faq, inquiry, call */}
        <section className="border border-(--border) rounded-md">
          <ul className="flex flex-col md:flex-row md:justify-start">
            <li className="flex-1">
              <Link to="/support/faq" className="p-10 flex flex-col gap-4">
                {/* 이모티콘 */}
                <Mail strokeWidth={2} />

                {/* 제목 */}
                <h3 className="font-bold">자주 묻는 질문</h3>

                {/* 본문 */}
                <p className="text-sm text-(--mute)">
                  배송, 교환, 제품에 대한 <br />
                  답변을 빠르게 확인하세요.
                </p>

                {/* 바로 이동 */}
                <span className="flex items-center text-(--accent) text-sm">
                  FAQ 바로가기
                  <ArrowRight size={18} />
                </span>
              </Link>
            </li>
            <li className="flex-1 border-y border-x-0 border-(--border) md:border-x md:border-y-0">
              <Link to="/support/inquiry" className="p-10 flex flex-col gap-4">
                {/* 이모티콘 */}
                <Headset />
                {/* <Mail strokeWidth={2} /> */}

                {/* 제목 */}
                <h3 className="font-bold">1:1 문의</h3>

                {/* 본문 */}
                <p className="text-sm text-(--mute)">
                  해결되지 않은 궁금증을
                  <br />
                  상담원에게 문의하세요.
                </p>

                {/* 바로 이동 */}
                <span className="flex items-center text-(--accent) text-sm">
                  문의하기
                  <ArrowRight size={18} />
                </span>
              </Link>
            </li>
            <li className="flex-1">
              <div className="p-10 flex flex-col gap-4">
                <Smartphone />

                {/* 제목 */}
                <h3 className="font-bold">전화 상담</h3>

                {/* 본문 */}
                <p className="text-sm text-(--mute)">
                  평일 10:00 ~ 17:00
                  <br />
                  점심 12:30 ~ 13:30
                </p>

                {/* 바로 이동 */}
                <span className="flex items-center text-(--accent) text-sm font-bold">
                  1544-0198
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* guide */}
        <section className="mt-20 mb-10">
          <h3 className="text-lg font-bold text-(--accent)">GUIDE</h3>
          <h4 className="text-2xl mt-4 font-bold">
            관측을 시작하는 분들을 위한 가이드
          </h4>

          <div className="flex flex-col gap-4 md:flex-row mt-4">
            {(isLoading || guides.length === 0) && (
              <>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-47 rounded-md bg-(--border) animate-pulse"
                  />
                ))}
              </>
            )}
          </div>

          {!isLoading && guides.length > 0 && (
            <ul className="flex flex-col gap-4 md:flex-row mt-4">
              {guides.map((guide, index) => (
                <li className="flex-1" key={guide.id}>
                  <Link
                    to={`/support/guide/${guide.id}`}
                    className="p-10 bg-(--bg-sub) rounded-md flex flex-col gap-5 hover:bg-(--main) hover:text-(--bg) duration-500 transition-all hover:-translate-y-1 ">
                    <span className="text-(--accent) text-sm font-bold">
                      GUIDE 0{index + 1}
                    </span>
                    <h4 className="text-lg">{guide.title}</h4>

                    <span className="flex items-center text-sm">
                      문의하기
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </Wrap>
    </>
  );
}
