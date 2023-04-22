import { create } from "zustand";
import { IBeer } from "../interfaces";
import { getBeers } from "../api";
import { QUEUE_SIZE } from "../constants";

type State = {
  beers: IBeer[];
  getBeers: () => Promise<void>;
  error: string | null;
  page: number;
  allElementsReceived: boolean;
  queueLength: number;
  getBeersIfNeeded: () => Promise<void>;
};

export const useStore = create<State>((set, get) => ({
  error: null,
  beers: [],
  page: 1,
  allElementsReceived: false,
  queueLength: 0,
  getBeers: async () => {
    const currentPage = get().page;
    set({
      queueLength: get().queueLength + 1,
      page: get().page + 1,
    });
    try {
      const response = await getBeers({ page: currentPage, pageSize: 3 });
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
}));
