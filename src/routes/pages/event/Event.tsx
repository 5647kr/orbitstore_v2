import { Link, useLocation } from "react-router";
import NavigatePath from "../../../components/common/NavigatePath";
import Wrap from "../../../components/common/Wrap";
import FilterEventsAside from "../../../components/event/FilterEventsAside";
import { useMemo, useState } from "react";
import { useEventsQuery } from "../../../hook/events/useEventsQuery";
import { eventDateState } from "../../../lib/eventDateState";
import { EventCard, EventSkeleton } from "../../../components/event/EventCard";

export default function Event() {
  const { pathname } = useLocation();
  const { data: events = [], isLoading } = useEventsQuery();
  const [filterEvents, setFilterEvents] = useState("전체");

  const handleFilterEvents = (value: string) => {
    setFilterEvents(value);
  };

  const filteredEvents = useMemo(() => {
    // filterEvents가 전체일 때
    if (filterEvents === "전체") return events;

    // filterEvents가 전체가 아닌 나머지인 경우라면
    const matchEvents = events.filter((event) => {
      const startDate = event.startDate;
      const endDate = event.endDate;

      // 이벤트 상태 결과: 예정, 진행, 종료
      const eventState = eventDateState({ startDate, endDate });

      return eventState === filterEvents;
    });

    return matchEvents;
  }, [events, filterEvents]);
  return (
    <Wrap>
      <NavigatePath path={pathname} />

      {/* hero */}
      <section className="py-10">
        <span className="text-(--accent) font-bold">EVENTS</span>
        <h2 className="text-5xl my-5">
          더 가까운 우주를 위한
          <br />
          특별한 기회
        </h2>
        <p className="text-sm text-(--mute)">
          다가오는 관측 행사부터 지금 참여할 수 있는
          <br />
          혜택과 지난 이벤트 기록을 확인해보세요.
        </p>
      </section>

      {/* 본문 */}
      <div className="flex flex-col-reverse md:flex-row-reverse gap-10 py-5">
        {/* 가이드 목록 */}
        <section className="flex-1">
          {/* 로딩 중일 때 */}
          {isLoading && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
              {Array.from({ length: 20 }).map((_, index) => (
                <EventSkeleton key={index} />
              ))}
            </div>
          )}

          {/* 로딩 끝났는데 필터 결과 데이터가 없을 때 */}
          {!isLoading && filteredEvents.length === 0 && (
            <div>검색 결과가 없습니다.</div>
          )}

          {/* 로딩 끝 & 필터 결과 데이터 있을 때 */}
          {!isLoading && filteredEvents.length > 0 && (
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
              {filteredEvents.map((event) => (
                <li>
                  <Link to={`/event/${event.id}`}>
                    <EventCard item={event} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 목차 */}
        <div className="relative">
          <FilterEventsAside
            filterEvents={filterEvents}
            handleFilterEvents={handleFilterEvents}
          />
        </div>
      </div>
    </Wrap>
  );
}
