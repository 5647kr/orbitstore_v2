import { useFilterStore } from "../../store/useFilterStore";

export default function CheckBoxInput({
  item,
  filterName,
}: {
  item: FilterItemProps;
  filterName: "category" | "brand" | "option";
}) {
  const filterState = useFilterStore((state) => state.filterState);
  const handleCheckState = useFilterStore((state) => state.handleCheckState);
  return (
    <div
      className="relative group p-px cursor-pointer hover:bg-(--bg-sub) flex flex-row-reverse items-center justify-end gap-2 has-checked:text-(--accent) before:absolute before:left-0 before:top-1/2 before:w-5 before:h-5 before:-translate-y-1/2 
      before:border 
      before:border-(--border) 
      before:bg-(--bg) 
      before:transition-colors 
      
      has-checked:before:border-(--accent) has-checked:after:absolute has-checked:after:left-1.75 has-checked:after:top-1.25
      has-checked:after:w-1.5 
      has-checked:after:h-2.75 has-checked:after:border-r-2 has-checked:after:border-b-2 has-checked:after:border-(--accent) has-checked:after:rotate-45 has-checked:after:content-['']">
      <label
        htmlFor={item.id}
        className="w-full pl-6 group-hover:text-(--accent) cursor-pointer text-sm">
        {item.title}
      </label>
      <input
        type="checkbox"
        id={item.id}
        name={item.id}
        className="a11y-hidden"
        checked={
          filterState[filterName][
            item.id as keyof (typeof filterState)[typeof filterName]
          ]
        }
        onChange={(e) => handleCheckState(e, filterName)}
      />
    </div>
  );
}
