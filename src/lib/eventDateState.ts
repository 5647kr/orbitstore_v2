export function eventDateState({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const beforeEndDate =
    Math.ceil(new Date(endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24);
  const beforeStartDate =
    Math.ceil(new Date(startDate).getTime() - Date.now()) /
    (1000 * 60 * 60 * 24);

  const isUpcoming = beforeStartDate > 0;
  const isEnded = beforeEndDate < 0;

  const state = isUpcoming ? "예정" : isEnded ? "종료" : "진행";

  return state;
}
