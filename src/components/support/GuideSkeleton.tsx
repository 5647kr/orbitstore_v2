import { ArrowRight, Check } from "lucide-react";
import Wrap from "../common/Wrap";

export default function GuideSkeleton() {
  return (
    <>
      {/* hero */}
      <section className="relative">
        <div className="w-full h-120 bg-(--border)" />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0 text-(--bg) p-10 flex flex-col justify-end gap-10">
          <div className="w-110 h-12 bg-(--border) animate-pulse rounded-md" />
          <div>
            <div className="w-full h-6 bg-(--border) animate-pulse rounded-md" />
          </div>
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
              <div className="mt-4">
                <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
              </div>
            </div>

            {/* 가이드 3단계 */}
            <div className="py-10 border-b border-(--border)">
              {/* 제목 */}
              <div>
                <span className="text-(--accent) text-sm font-bold">
                  STEP 01
                </span>
                <div className="w-65 h-7 bg-(--border) animate-pulse rounded-md mt-3 mb-4" />
                <>
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                </>
              </div>
              <div className="mt-5 bg-(--bg-sub) py-5 px-10 rounded-md">
                <div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 border-b border-(--border)">
              {/* 제목 */}
              <div>
                <span className="text-(--accent) text-sm font-bold">
                  STEP 02
                </span>
                <div className="w-65 h-7 bg-(--border) animate-pulse rounded-md mt-3 mb-4" />
                <>
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                </>
              </div>
              <div className="mt-5 bg-(--bg-sub) py-5 px-10 rounded-md">
                <div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 border-b border-(--border)">
              {/* 제목 */}
              <div>
                <span className="text-(--accent) text-sm font-bold">
                  STEP 03
                </span>
                <div className="w-65 h-7 bg-(--border) animate-pulse rounded-md mt-3 mb-4" />
                <>
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                  <div className="w-full h-5.5 bg-(--border) animate-pulse rounded-md mt-1" />
                </>
              </div>
              <div className="mt-5 bg-(--bg-sub) py-5 px-10 rounded-md">
                <div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                  <div className="flex items-center gap-3 py-2 text-sm">
                    <Check stroke="var(--success)" />
                    <div className="w-50 h-5 bg-(--border) animate-pulse rounded-md mt-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* 마지막 확인 */}
            <div className="bg-(--main-dark) p-10 rounded-md mt-10 text-(--bg) flex flex-col gap-4">
              <p className="font-bold">BEFORE YOU START</p>
              <h4 className="text-3xl">마지막으로 확인하세요.</h4>
              <div>
                <div className="grid gird-cols-1 gap-4 md:grid-cols-2">
                  <div className="h-13.5 border border-(--mute) rounded-md flex items-center flex-row-reverse justify-end gap-3" />
                  <div className="h-13.5 border border-(--mute) rounded-md flex items-center flex-row-reverse justify-end gap-3" />
                  <div className="h-13.5 border border-(--mute) rounded-md flex items-center flex-row-reverse justify-end gap-3" />
                  <div className="h-13.5 border border-(--mute) rounded-md flex items-center flex-row-reverse justify-end gap-3" />
                </div>
              </div>
            </div>
          </section>

          {/* 목차 */}
          <div className="relative">
            <aside className="static md:sticky left-0 top-10 w-full md:w-70 flex flex-row md:flex-col border-t-2 border-(--main)">
              {/* 읽는 시간 */}
              <div className="py-4 border-b border-(--border) flex flex-col gap-3 flex-1">
                <h3 className="text-sm text-(--mute)">읽는 시간</h3>
                <div className="w-10 h-6 bg-(--border) animate-pulse rounded-md" />
              </div>

              {/* 핵심 내용 */}
              <div className="py-4 border-b border-(--border) flex flex-col gap-3 flex-1">
                <h3 className="text-sm text-(--mute)">핵심 내용</h3>
                <div className="w-40 h-6 bg-(--border) animate-pulse rounded-md" />
              </div>

              {/* step */}
              <div className="hidden md:block py-4">
                <div className="w-25 h-6 bg-(--border) animate-pulse rounded-md my-1" />
                <div className="w-25 h-6 bg-(--border) animate-pulse rounded-md my-1" />
                <div className="w-25 h-6 bg-(--border) animate-pulse rounded-md my-1" />
              </div>
            </aside>
          </div>
        </div>
      </Wrap>

      <section className="bg-(--bg-sub) px-10 py-15 mt-10 flex items-center justify-between">
        <div>
          <span className="text-(--accent) font-bold">NEXT GUIDE</span>
          <div className="w-70 h-9 bg-(--border) animate-pulse rounded-md mt-4" />
        </div>
        <div className="flex items-center gap-3 py-2 px-4 bg-(--main) text-(--bg) rounded-md">
          <span>다음 가이드 읽기</span>
          <ArrowRight />
        </div>
      </section>
    </>
  );
}
