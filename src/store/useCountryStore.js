import { create } from "zustand";
import { api } from "../api/api";

export const useCountryStore = create((set) => ({
  countries: [],
  filtered: [],
  loading: false,
  error: false,
  search: "",

  fetchCountries: async () => {
    set({ loading: true, error: false });

    try {
      const res = await api.get(
        "/all?fields=name,flags,population,region,cca3"
      );

      set({
        countries: res.data || [],
        filtered: res.data || [],
        loading: false,
      });

    } catch (err) {
      set({
        error: true,
        loading: false,
        countries: [],
        filtered: [],
      });
    }
  },

  setSearch: (value) =>
    set((state) => {
      const result = (state.countries || []).filter((c) =>
        c.name?.common?.toLowerCase().includes(value.toLowerCase())
      );

      return {
        search: value,
        filtered: result,
      };
    }),
}));