import { ArrowLeft } from "lucide-react";
import Wrap from "../common/Wrap";

export default function EventSkeleton() {
  return (
    <>
      {/* hero */}
      <section className="relative">
        <div className="w-full h-120 bg-(--border)" />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0 text-(--bg) p-10 flex flex-col justify-end gap-10">
          <div>
            <div className="w-14.5 h-8.5 rounded-md bg-(--border) animate-pulse" />
            <div className="w-150 max-w-full h-12 rounded-md bg-(--border) my-4 animate-pulse" />

            <div>
              <div className="w-full h-6 rounded-md bg-(--border) animate-pulse" />
              <div className="w-full h-6 rounded-md bg-(--border) mt-1 animate-pulse" />
            </div>
            <div className="w-40 h-4 rounded-md bg-(--border) mt-10 animate-pulse" />
          </div>
        </div>
      </section>

      <Wrap>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-10 py-5">
          {/* 가이드 목록 */}
          <section key="intro" id="intro" className="flex-1">
            {/* intro */}
            <div
              key="intro"
              id="intro"
              className="flex flex-col md:flex-row md:items-center gap-10 pt-5 pb-10">
              <strong className="text-5xl text-(--accent) font-bold">
                EVENT
              </strong>
              <div className="flex-1">
                <p className="font-bold text-(--accent) text-sm">HOW TO JOIN</p>
                <div className="w-50 h-7 rounded-md bg-(--border) my-4 animate-pulse" />
                <div>
                  <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                </div>
              </div>
            </div>

            {/* 참여 방법 */}
            <div
              key="participate"
              id="participate"
              className="py-10 border-b border-(--border)">
              <h4 className="text-2xl font-bold">참여 방법</h4>
              <div className="flex flex-col md:flex-row mt-5 gap-4">
                <div className="py-2 flex-1">
                  <span className="text-lg font-bold text-(--accent)">01</span>
                  <div className="w-40 h-12 rounded-md bg-(--border) my-3 animate-pulse" />
                  <div>
                    <div className="w-full h-5 rounded-md bg-(--border) animate-pulse" />
                    <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  </div>
                </div>
                <div className="py-2 flex-1">
                  <span className="text-lg font-bold text-(--accent)">02</span>
                  <div className="w-40 h-12 rounded-md bg-(--border) my-3 animate-pulse" />
                  <div>
                    <div className="w-full h-5 rounded-md bg-(--border) animate-pulse" />
                    <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  </div>
                </div>
                <div className="py-2 flex-1">
                  <span className="text-lg font-bold text-(--accent)">03</span>
                  <div className="w-40 h-12 rounded-md bg-(--border) my-3 animate-pulse" />
                  <div>
                    <div className="w-full h-5 rounded-md bg-(--border) animate-pulse" />
                    <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* 혜택 안내 */}
            <div
              key="rewards"
              id="rewards"
              className="py-10 border-b border-(--border)">
              <h4 className="text-2xl font-bold">혜택 안내</h4>
              <div className="flex flex-col md:flex-row mt-5 gap-4">
                <div className="py-2 flex-1">
                  <span className="text-lg font-bold text-(--accent)">01</span>
                  <div className="w-40 h-12 rounded-md bg-(--border) my-3 animate-pulse" />
                  <div>
                    <div className="w-full h-5 rounded-md bg-(--border) animate-pulse" />
                    <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  </div>
                </div>
                <div className="py-2 flex-1">
                  <span className="text-lg font-bold text-(--accent)">02</span>
                  <div className="w-40 h-12 rounded-md bg-(--border) my-3 animate-pulse" />
                  <div>
                    <div className="w-full h-5 rounded-md bg-(--border) animate-pulse" />
                    <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* 유의 사항 */}
            <div
              key="notes"
              id="notes"
              className="py-10 border-b border-(--border)">
              <h4 className="text-2xl font-bold">유의 사항</h4>
              <div className="mt-5">
                <div className="w-full h-5 rounded-md bg-(--border) animate-pulse" />
                <div className="w-full h-5 rounded-md bg-(--border) mt-1 animate-pulse" />
              </div>
            </div>
          </section>

          {/* 목차 */}
          <div className="relative">
            <aside className="static md:sticky left-0 top-10 w-full md:w-70 grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-0 border-t-2 border-(--main)">
              {/* 이벤트 네비게이션 */}
              <div className="py-4 border-b border-(--border) flex flex-col gap-3 col-span-2 md:col-span-1">
                <div className="flex items-center gap-3">
                  <ArrowLeft />
                  <span>이벤트 목록</span>
                </div>
              </div>

              {/* 이벤트 상태 */}
              <div className="py-4 border-b border-(--border) flex flex-col gap-3">
                <h3 className="text-sm text-(--mute)">상태</h3>
                <div className="w-8 h-6 rounded-md bg-(--border) mt-1 animate-pulse" />
              </div>

              {/* 이벤트 기간 */}
              <div className="py-4 border-b border-(--border) flex flex-col gap-3 flex-1">
                <h3 className="text-sm text-(--mute)">이벤트 기간</h3>
                <div className="w-45 h-6 rounded-md bg-(--border) mt-1 animate-pulse" />
              </div>

              {/* step */}
              <div className="hidden md:block py-4">
                <div className="flex items-center gap-4 group">
                  <span className="text-sm text-(--accent)">01</span>
                  <p className="text-sm text-(--mute) py-1 group-hover:text-(--accent)">
                    이벤트 소개
                  </p>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="text-sm text-(--accent)">02</span>
                  <p className="text-sm text-(--mute) py-1 group-hover:text-(--accent)">
                    참여 방법
                  </p>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="text-sm text-(--accent)">03</span>
                  <p className="text-sm text-(--mute) py-1 group-hover:text-(--accent)">
                    혜택 안내
                  </p>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="text-sm text-(--accent)">04</span>
                  <p className="text-sm text-(--mute) py-1 group-hover:text-(--accent)">
                    유의 사항
                  </p>
                </div>
              </div>

              {/* 안내문 */}
              <div className="mt-5 col-span-2 md:col-span-1">
                <div className="w-full h-10 rounded-md bg-(--border) animate-pulse" />
              </div>
            </aside>
          </div>
        </div>
      </Wrap>
    </>
  );
}
