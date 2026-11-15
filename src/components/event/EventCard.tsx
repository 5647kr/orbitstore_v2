import { memo } from "react";
import { eventDateState } from "../../lib/eventDateState";
import { ArrowRight } from "lucide-react";

const EventCard = memo(function EventCard({ item }: { item: Events }) {
  const startDate = item.startDate;
  const endDate = item.endDate;
  const eventState = eventDateState({ startDate, endDate });
  return (
    <div className="group rounded-md overflow-hidden">
      {/* 이미지 */}
      <div className="relative rounded-md overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full object-cover aspect-square group-hover:scale-110 duration-500"
        />

        <span
          className={`absolute top-5 left-5 z-10 text-(--bg) text-sm py-2 px-4 rounded-md ${eventState === "예정" ? "bg-(--accent)" : eventState === "진행" ? "bg-(--success)" : "bg-(--mute)"}`}>
          {eventState}
        </span>

        {eventState === "종료" && (
          <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] left-0 top-0 flex justify-center items-center z-5">
            <strong className="text-sm text-(--bg) ">
              종료된 이벤트 입니다.
            </strong>
          </div>
        )}
      </div>

      {/* 본문 */}
      <div className="py-4 border-b border-(--border) px-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-(--accent)">{item.category}</span>
          <ArrowRight />
        </div>
        <h3 className="text-lg line-clamp-1 break-keep mt-4">{item.title}</h3>
        <p className="text-sm text-(--mute) line-clamp-1 break-keep mt-2">
          {item.desc}
        </p>
        <p className="text-sm text-(--mute) mt-8 mb-4">
          <span>{item.startDate}</span>
          <span> ~ </span>
          <span>{item.endDate}</span>
        </p>

        <span
          className={`text-sm border-b ${eventState === "예정" ? "text-(--accent) border-(--accent)" : eventState === "진행" ? "text-(--success) border-(--success)" : "text-(--mute) border-(--mute)"}`}>
          {eventState === "예정"
            ? "오픈 알림 신청"
            : eventState === "진행"
              ? "지금 참여하기"
              : "기록 보기"}
        </span>
      </div>
    </div>
  );
});

const EventSkeleton = function EventSkeleton() {
  return (
    <div className="group rounded-md overflow-hidden">
      {/* 이미지 */}
      <div className="relative rounded-md overflow-hidden">
        <div className="w-full object-cover aspect-square bg-(--border) animate-pulse" />

        <div className="rounded-md bg-(--bg-sub) w-14 h-9 absolute top-5 left-5" />
      </div>

      {/* 본문 */}
      <div className="py-4 border-b border-(--border) px-2">
        <div className="flex justify-between items-center">
          <div className="rounded-md bg-(--bg-sub) w-9 h-5" />
          <ArrowRight />
        </div>
        <div className="rounded-md bg-(--bg-sub) w-90 h-7 mt-4" />
        <div className="rounded-md bg-(--bg-sub) w-full h-5 mt-2" />
        <div className="rounded-md bg-(--bg-sub) w-37.5 h-4 mt-8 mb-4" />
        <div className="rounded-md bg-(--bg-sub) w-12.5 h-4.5 mt-8 mb-4" />
      </div>
    </div>
  );
};

export { EventCard, EventSkeleton };
