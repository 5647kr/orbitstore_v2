import { ListFilter } from "lucide-react";

export default function FilterEventsAside({
  filterEvents,
  handleFilterEvents,
}: {
  filterEvents: string;
  handleFilterEvents: (value: string) => void;
}) {
  return (
    <aside className="static md:sticky left-0 top-10 w-full md:w-70 flex flex-row md:flex-col">
      <div className="py-4 border-b-2 border-(--main) hidden md:flex md:items-center md:gap-4">
        <ListFilter />
        <p className="text-lg font-bold">이벤트 상태</p>
      </div>

      <div className="w-full">
        <ul className="w-full grid grid-cols-2 md:grid-cols-1">
          <li className="w-full">
            <button
              type="button"
              className={`w-full py-4 border-b border-(--border) text-left ${filterEvents === "전체" ? "text-(--text) font-bold" : "text-(--mute) font-normal"}`}
              onClick={() => handleFilterEvents("전체")}>
              전체 이벤트
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`w-full py-4 border-b border-(--border) text-left ${filterEvents === "예정" ? "text-(--text) font-bold" : "text-(--mute) font-normal"}`}
              onClick={() => handleFilterEvents("예정")}>
              예정된 이벤트
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`w-full py-4 border-b border-(--border) text-left ${filterEvents === "진행" ? "text-(--text) font-bold" : "text-(--mute) font-normal"}`}
              onClick={() => handleFilterEvents("진행")}>
              진행 중 이벤트
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`w-full py-4 border-b border-(--border) text-left ${filterEvents === "종료" ? "text-(--text) font-bold" : "text-(--mute) font-normal"}`}
              onClick={() => handleFilterEvents("종료")}>
              종료된 이벤트
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
