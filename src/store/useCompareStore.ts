import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseCompareStore {
  compareIds: string[];
  addCompareId: (id: string) => void;
  removeCompareId: (id: string) => void;
  clearCompare: () => void;
}

const useCompareStore = create<UseCompareStore>()(
  persist(
    (set, get) => ({
      compareIds: [],

      addCompareId: (id) => {
        const { compareIds, removeCompareId } = get();

        // 이미 데이터가 있을 경우 데이터 제거
        if (compareIds.includes(id)) {
          removeCompareId(id);
          return;
        }

        // 데이터 길이는 총 4개
        if (compareIds.length >= 4) {
          toast.warning("비교함에는 최대 4개의 제품만 담을 수 있습니다.");
          return;
        }

        // 배열에 데이터도 없고 길이가 4개 이하일때
        set((state) => ({
          compareIds: [...state.compareIds, id],
        }));
      },

      // 특정 아이템 제거
      removeCompareId: (id) =>
        set((state) => ({
          compareIds: state.compareIds.filter((productId) => productId !== id),
        })),

      // 초기화
      clearCompare: () => set({ compareIds: [] }),
    }),
    {
      name: "orbitstore_compareIds",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCompareStore;
