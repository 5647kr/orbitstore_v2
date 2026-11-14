import { Link, useNavigate, useParams } from "react-router";
import { useGuideQuery } from "../../../../hook/support/useSupportQuery";
import { toast } from "sonner";
import Wrap from "../../../../components/common/Wrap";
import GuideAside from "../../../../components/support/GuideAside";
import { ArrowRight, Check } from "lucide-react";
import GuideSkeleton from "../../../../components/support/GuideSkeleton";

export default function Guide() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    toast.error("잘못된 접근입니다.");
    navigate("/support");
  }

  const { data: guide, isLoading } = useGuideQuery({ id: id! });

  if (isLoading || !guide) {
    return <GuideSkeleton />;
  }

  return (
    <>
      {/* hero */}
      <section className="relative">
        <img
          src={guide.img}
          alt={guide.title}
          className="w-full max-h-120 object-cover"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0 text-(--bg) p-10 flex flex-col justify-end gap-10">
          <h2 className="text-5xl font-bold">{guide.title}</h2>
          <p>{guide.desc}</p>
        </div>
      </section>

      <Wrap>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-10 py-5">
          {/* 가이드 목록 */}
          <section className="flex-1">
            {/* 노트 */}
            <div className="border-l-2 border-(--accent) p-10 bg-(--bg-sub) rounded-r-sm">
              <h3 className="text-(--accent) font-bold text-sm">
                ORBITSTORE BEGINNER'S NOTE
              </h3>
              <p className="mt-4 text-lg">{guide.desc}</p>
            </div>

            {/* 가이드 3단계 */}
            {guide.guideSteps.map((step: GuideSteps, index: number) => (
              <div
                key={step.id}
                id={`guide-step-${step.id}`}
                className="py-10 border-b border-(--border)">
                {/* 제목 */}
                <div>
                  <span className="text-(--accent) text-sm font-bold">
                    STEP 0{index + 1}
                  </span>
                  <h4 className="mt-3 mb-4 text-2xl font-bold">{step.title}</h4>
                  <p className="text-(--mute)">{step.desc}</p>
                </div>
                <div className="mt-5 bg-(--bg-sub) py-5 px-10 rounded-md">
                  <ul>
                    {step.checkList.map((check) => (
                      <li
                        key={check.id}
                        className="flex items-center gap-3 py-2 text-sm">
                        <Check stroke="var(--success)" />
                        <p>{check.checkPoint}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* 마지막 확인 */}
            <div className="bg-(--main-dark) p-10 rounded-md mt-10 text-(--bg) flex flex-col gap-4">
              <p className="font-bold">BEFORE YOU START</p>
              <h4 className="text-3xl">마지막으로 확인하세요.</h4>
              <div>
                <ul className="grid gird-cols-1 gap-4 md:grid-cols-2">
                  {guide.finalCheckList.map((check) => (
                    <li
                      key={check.id}
                      className="p-4 border border-(--mute) rounded-md flex items-center flex-row-reverse justify-end gap-3">
                      <label htmlFor={check.id} className="text-sm">
                        {check.check}
                      </label>
                      <input
                        type="checkbox"
                        className="accent-(--main)"
                        id={check.id}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 목차 */}
          <div className="relative">
            <GuideAside guide={guide} />
          </div>
        </div>
      </Wrap>

      <section className="bg-(--bg-sub) px-10 py-15 mt-10 flex items-center justify-between">
        <div>
          <span className="text-(--accent) font-bold">NEXT GUIDE</span>
          <h5 className="text-3xl mt-4">{guide.nextGuide.title}</h5>
        </div>
        <Link
          to={`/support/guide/${guide.nextGuide.id}`}
          className="flex items-center gap-3 py-2 px-4 bg-(--main) text-(--bg) rounded-md">
          <span>다음 가이드 읽기</span>
          <ArrowRight />
        </Link>
      </section>
    </>
  );
}
