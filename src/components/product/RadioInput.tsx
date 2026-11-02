import { useFilterStore } from "../../store/useFilterStore";

export default function RadioInput({
  item,
  filterName,
}: {
  item: FilterItemProps;
  filterName: "sort" | "price" | "aperture";
}) {
  const filterState = useFilterStore((state) => state.filterState);
  const handleRadioState = useFilterStore((state) => state.handleRadioState);
  return (
    <div className="relative group p-px cursor-pointer hover:bg-(--bg-sub) flex flex-row-reverse items-center justify-end gap-2 has-checked:text-(--accent)">
      <label
        htmlFor={item.id}
        className="w-full group-hover:text-(--accent) cursor-pointer text-sm">
        {item.title}
      </label>
      <input
        type="checkbox"
        value={item.id}
        id={item.id}
        name={filterName}
        className="a11y-hidden"
        checked={filterState[filterName] === item.id}
        onChange={(e) => handleRadioState(e, filterName)}
      />
    </div>
  );
}
