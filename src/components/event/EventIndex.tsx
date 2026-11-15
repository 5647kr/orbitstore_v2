import { Link } from "react-router";
import { eventDateState } from "../../lib/eventDateState";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function EventIndex({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const eventState = eventDateState({ startDate, endDate });
  const [participateTxt, setParticipateTxt] = useState("오픈 알림 신청");

  const menus = [
    { id: "intro", title: "이벤트 소개" },
    { id: "participate", title: "참여 방법" },
    { id: "rewards", title: "혜택 안내" },
    { id: "notes", title: "유의 사항" },
  ];

  const handleMoveEvent = (id: string) => {
    document.getElementById(`${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <aside className="static md:sticky left-0 top-10 w-full md:w-70 grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-0 border-t-2 border-(--main)">
      {/* 이벤트 네비게이션 */}
      <div className="py-4 border-b border-(--border) flex flex-col gap-3 col-span-2 md:col-span-1">
        <Link to="/event" className="flex items-center gap-3">
          <ArrowLeft />
          <span>이벤트 목록</span>
        </Link>
      </div>

      {/* 이벤트 상태 */}
      <div className="py-4 border-b border-(--border) flex flex-col gap-3">
        <h3 className="text-sm text-(--mute)">상태</h3>
        <p className="font-bold ">{eventState}</p>
      </div>

      {/* 이벤트 기간 */}
      <div className="py-4 border-b border-(--border) flex flex-col gap-3 flex-1">
        <h3 className="text-sm text-(--mute)">이벤트 기간</h3>
        <p className="font-bold">
          <span>{startDate}</span>
          <span> ~ </span>
          <span>{endDate}</span>
        </p>
      </div>

      {/* step */}
      <div className="hidden md:block py-4">
        {menus.map((menu, index) => (
          <button
            type="button"
            className="flex items-center gap-4 group"
            key={menu.id}
            onClick={() => handleMoveEvent(menu.id)}>
            <span className="text-sm text-(--accent)">0{index + 1}</span>
            <p className="text-sm text-(--mute) py-1 group-hover:text-(--accent)">
              {menu.title}
            </p>
          </button>
        ))}
      </div>

      {/* 안내문 */}
      <div className="mt-5 col-span-2 md:col-span-1">
        {eventState === "예정" ? (
          <button
            type="button"
            onClick={() => setParticipateTxt("알림 신청 완료")}
            className="w-full py-2 px-4 text-center bg-(--main) text-(--bg) rounded-md">
            {participateTxt}
          </button>
        ) : eventState === "진행" ? (
          <p className="py-2 px-4 text-center bg-(--main) text-(--bg) rounded-md">
            참여 가능 기간입니다.
          </p>
        ) : (
          <p className="py-2 px-4 text-center bg-(--mute) text-(--bg) rounded-md">
            본 이벤트는 종료되었습니다
          </p>
        )}
      </div>
    </aside>
  );
}
