export default function ProductDetailIndex() {
  const menus = [
    { id: "info", title: "상품 정보" },
    { id: "fit", title: "관측 적합도" },
    { id: "guide", title: "용어 가이드" },
    { id: "spec", title: "상세 스펙" },
    { id: "review", title: "상품 리뷰" },
    { id: "inquiry", title: "상품 문의" },
    { id: "notice", title: "안내" },
  ];

  const handleMoveEvent = (id: string) => {
    document.getElementById(`${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="sticky left-0 top-0 w-full bg-(--bg)">
      {/* step */}
      <div className="flex items-center overflow-x-auto">
        {menus.map((menu) => (
          <button
            type="button"
            className="w-full min-w py-5 p-4 whitespace-nowrap border-b border-(--border)"
            key={menu.id}
            onClick={() => handleMoveEvent(menu.id)}>
            {menu.title}
          </button>
        ))}
      </div>
    </aside>
  );
}
