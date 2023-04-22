import { create } from "zustand";
import { IBeer } from "../interfaces";
import { IGetBeersProps, getBeers } from "../api";

type State = {
  beers: IBeer[];
  loading: boolean;
  getBeers: (props: IGetBeersProps) => Promise<void>;
  error: string | null;
  page: number;
};

export const useStore = create<State>((set) => ({
  loading: false,
  error: null,
  beers: [],
  page: 0,
  getBeers: async (props) => {
    set({ loading: true });
    try {
      const response = await getBeers(props);
      set({ beers: response.data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
