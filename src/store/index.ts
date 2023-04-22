import { create } from "zustand";
import { IBeer } from "../interfaces";
import { getBeers } from "../api";

type State = {
  beers: IBeer[];
  loading: boolean;
  getBeers: () => Promise<void>;
  error: string | null;
};

export const useStore = create<State>((set) => ({
  loading: false,
  error: null,
  beers: [],
  getBeers: async () => {
    set({ loading: true });
    try {
      const response = await getBeers();
      set({ beers: response.data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
