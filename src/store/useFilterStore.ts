import { create } from "zustand";

interface FilterStore {
  filterState: FilterState;
  handleCheckState: (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: "category" | "brand" | "option",
  ) => void;
  handleRadioState: (
    e: React.ChangeEvent<HTMLInputElement>,
    filterName: "sort" | "price" | "aperture",
  ) => void;
  handleCustomPrice: (price: string) => void;
  resetFilterState: () => void;
}

export const useFilterStore = create<FilterStore>()((set) => ({
  filterState: {
    sort: "recent",
    price: "",
    aperture: "",
    category: {
      굴절망원경: false,
      반사망원경: false,
      돕소니안: false,
    },
    brand: {
      orion: false,
      celestron: false,
      "sky-watcher": false,
      omegon: false,
    },
    option: {
      support: false,
      haveStuck: false,
    },
  },

  handleCheckState: (e, filterName) => {
    set((state) => {
      return {
        filterState: {
          ...state.filterState,

          [filterName]: {
            ...state.filterState[filterName],
            [e.target.name]: e.target.checked,
          },
        },
      };
    });
  },

  handleRadioState: (e, filterName) => {
    set((state) => {
      return {
        filterState: {
          ...state.filterState,
          [filterName]: e.target.value,
        },
      };
    });
  },

  handleCustomPrice: (price) => {
    set((state) => {
      return {
        filterState: {
          ...state.filterState,
          price: price,
        },
      };
    });
  },

  resetFilterState: () =>
    set({
      filterState: {
        sort: "recent",
        price: "",
        aperture: "",
        category: {
          굴절망원경: false,
          반사망원경: false,
          돕소니안: false,
        },
        brand: {
          orion: false,
          celestron: false,
          "sky-watcher": false,
          omegon: false,
        },
        option: {
          support: false,
          haveStuck: false,
        },
      },
    }),
}));
