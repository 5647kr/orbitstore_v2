import { useParams } from "react-router";
import { useEventQuery } from "../../../hook/events/useEventsQuery";
import Wrap from "../../../components/common/Wrap";
import { eventDateState } from "../../../lib/eventDateState";
import EventIndex from "../../../components/event/EventIndex";
import EventSkeleton from "../../../components/event/EventSkeleton";

export default function EventsDetail() {
  const { id } = useParams();

  const { data: event, isLoading } = useEventQuery({ id: id! });

  if (isLoading || !event) return <EventSkeleton />;

  const startDate = event.startDate;
  const endDate = event.endDate;

  const eventState = eventDateState({ startDate, endDate });

  return (
    <>
      {/* hero */}
      <section className="relative">
        <img
          src={event.img}
          alt={event.title}
          className="w-full max-h-120 object-cover"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] left-0 top-0 text-(--bg) p-10 flex flex-col justify-end gap-10">
          <div>
            <span
              className={`text-(--bg) text-sm py-2 px-4 rounded-md inline ${eventState === "예정" ? "bg-(--accent)" : eventState === "진행" ? "bg-(--success)" : "bg-(--mute)"}`}>
              {eventState}
            </span>
            <h2 className="text-5xl font-bold my-4">{event.title}</h2>
            <p>{event.desc}</p>
            <p className="text-sm mt-10">
              <span>{event.startDate}</span>
              <span> ~ </span>
              <span>{event.endDate}</span>
            </p>
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
              className="flex flex-col md:flex-row md:items-center gap-10 pt-5 pb-10 ">
              <strong className="text-5xl text-(--accent) font-bold">
                EVENT
                <br />
                {eventState === "예정"
                  ? "PREVIEW"
                  : eventState === "진행"
                    ? "NOW"
                    : "ARCHIVE"}
              </strong>
              <div>
                <p className="font-bold text-(--accent) text-sm">HOW TO JOIN</p>
                <h3 className="my-4 text-lg">{event.title}</h3>
                <p className="text-sm text-(--mute)">{event.desc}</p>
              </div>
            </div>

            {/* 참여 방법 */}
            <div
              key="participate"
              id="participate"
              className="py-10 border-b border-(--border)">
              <h4 className="text-2xl font-bold">참여 방법</h4>
              <ol className="flex flex-col md:flex-row mt-5">
                {event.participate.map((item, index) => (
                  <li className="py-2">
                    <span className="text-lg font-bold text-(--accent)">
                      0{index + 1}
                    </span>
                    <h5 className="font-bold py-3">{item.title}</h5>
                    <p className="text-sm text-(--mute) pr-5 break-keep">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* 혜택 안내 */}
            <div
              key="rewards"
              id="rewards"
              className="py-10 border-b border-(--border)">
              <h4 className="text-2xl font-bold">혜택 안내</h4>
              <ul className="flex flex-col md:flex-row mt-5">
                {event.rewards.map((item, index) => (
                  <li className="py-2">
                    <span className="text-lg font-bold text-(--accent)">
                      0{index + 1}
                    </span>
                    <h5 className="font-bold py-3">{item.title}</h5>
                    <p className="text-sm text-(--mute) break-keep pr-5">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 유의 사항 */}
            <div
              key="notes"
              id="notes"
              className="py-10 border-b border-(--border)">
              <h4 className="text-2xl font-bold">유의 사항</h4>
              <ul className="mt-5">
                {event.notes.map((note) => (
                  <li key={note.id} className="text-sm text-(--mute)">
                    {note.desc}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 목차 */}
          <div className="relative">
            <EventIndex startDate={event.startDate} endDate={event.endDate} />
          </div>
        </div>
      </Wrap>
    </>
  );
}
