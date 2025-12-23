import { create } from "zustand";
import { SearchStore } from "@/types/store";

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}));
