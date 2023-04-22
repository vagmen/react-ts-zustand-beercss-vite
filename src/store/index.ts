import { create } from "zustand";
import { IBeer } from "../interfaces";
import { getBeers } from "../api";
import { QUEUE_SIZE } from "../constants";

type State = {
  beers: IBeer[];
  page: number;
  beerName: string;
  allElementsReceived: boolean;
  queueLength: number;
  error: string | null;
  getBeers: () => Promise<void>;
  getBeersIfNeeded: () => Promise<void>;
  reset: () => void;
  setName: (beerName: string) => void;
};

export const useStore = create<State>((set, get) => ({
  beers: [],
  page: 1,
  allElementsReceived: false,
  queueLength: 0,
  beerName: "",
  error: null,
  getBeers: async () => {
    const currentPage = get().page;
    set({
      queueLength: get().queueLength + 1,
      page: get().page + 1,
    });
    try {
      const response = await getBeers({
        page: currentPage,
        beerName: get().beerName,
      });
      set({
        beers: [...get().beers, ...response.data],
        allElementsReceived: response.data.length === 0,
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({
        queueLength: get().queueLength - 1,
      });
    }
  },
  getBeersIfNeeded: async () => {
    const queueOverflowed = get().queueLength >= QUEUE_SIZE;
    !get().allElementsReceived && !queueOverflowed && get().getBeers();
  },
  reset: () => {
    set({ page: 1, beers: [], allElementsReceived: false });
    get().getBeersIfNeeded();
  },
  setName: (name: string) => {
    set({ beerName: name });
  },
}));
