const menus: Menu[] = [
  { id: "전체", title: "전체" },
  { id: "주문결제", title: "주문 / 결제" },
  { id: "배송", title: "배송" },
  { id: "제품", title: "제품" },
  { id: "교환환불", title: "교환 / 환불" },
  {id: "as", title: "A/S"}
];

interface Menu {
  id: string;
  title: string;
}

export default function FaqAside({
  filterFaq,
  handleFilterFaq,
}: {
  filterFaq: string;
  handleFilterFaq: (value: string) => void;
}) {
  return (
    <aside className="w-full">
      <ul className="grid grid-cols-3 md:grid-cols-6 gap-y-1">
        {menus.map((menu: Menu) => (
          <li key={menu.id} className="flex-1">
            <button
              type="button"
              className={`flex-1 p-2.5 w-full border-b ${filterFaq === menu.id ? "bg-(--bg-sub) text-(--text) font-bold border-(--accent)" : "bg-(--bg) text-(--mute) font-normal border-(--border)"}`}
              onClick={() => handleFilterFaq(menu.id)}>
              {menu.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
