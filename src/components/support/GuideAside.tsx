export default function GuideAside({ guide }: { guide: Guide }) {
  const handleMoveGuide = (id: string) => {
    document.getElementById(`guide-step-${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="static md:sticky left-0 top-10 w-full md:w-70 flex flex-row md:flex-col border-t-2 border-(--main)">
      {/* 읽는 시간 */}
      <div className="py-4 border-b border-(--border) flex flex-col gap-3 flex-1">
        <h3 className="text-sm text-(--mute)">읽는 시간</h3>
        <p className="font-bold ">약 {guide.readingTime}분</p>
      </div>

      {/* 핵심 내용 */}
      <div className="py-4 border-b border-(--border) flex flex-col gap-3 flex-1">
        <h3 className="text-sm text-(--mute)">핵심 내용</h3>
        <p className="font-bold ">{guide.keyword}</p>
      </div>

      {/* step */}
      <div className="hidden md:block py-4">
        {guide.guideSteps.map((step, index) => (
          <button
            type="button"
            className="flex items-center gap-4 group"
            key={step.id}
            onClick={() => handleMoveGuide(step.id)}>
            <span className="text-sm text-(--accent)">0{index + 1}</span>
            <p className="text-sm text-(--mute) py-1 group-hover:text-(--accent)">
              {step.title}
            </p>
          </button>
        ))}
      </div>
    </aside>
  );
}
