import { Minus, Plus } from "lucide-react";
import { memo } from "react";

const FaqItem = memo(function FaqItem({ item }: { item: Faq }) {
  const formatCategory = (category: string) => {
    switch (category) {
      case "주문결제":
        return "주문 / 결제";
      case "교환환불":
        return "교환 / 환불";
      case "제품":
        return "제품";
      case "배송":
        return "배송";
      case "as":
        return "A/S"
    }
  };
  return (
    <details className="group border border-(--border) open:border-(--accent) rounded-md px-5 cursor-pointer">
      <summary className="flex items-center gap-5 py-5">
        <span className="border border-(--accent) bg-(--bg-sub) text-sm p-2 flex justify-center items-center rounded-md">
          {formatCategory(item.category)}
        </span>
        <h3 className="flex-1 font-semibold">{item.title}</h3>
        <Plus className="group-open:hidden" />
        <Minus className="hidden group-open:block" />
      </summary>
      <div>
        <p className="py-2.5 text-(--mute) break-keep">{item.desc}</p>
      </div>
    </details>
  );
});

const FaqSkeleton = function FaqSkeleton() {
  return (
    <div className="h-19.5 border border-(--border) p-5 cursor-pointer flex items-center gap-5 mb-2.5 rounded-md">
      {/* 카테고리 */}
      <div className="w-19 h-9.5 bg-(--border) rounded-md  animate-pulse" />
      {/* 질문 */}
      <div className="flex-1 h-6 bg-(--border) animate-pulse" />
      <Plus />
    </div>
  );
};

export { FaqItem, FaqSkeleton };
