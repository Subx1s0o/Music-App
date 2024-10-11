import { Song } from "@/types";
import axios, { AxiosResponse } from "axios";
import { create } from "zustand";

interface SongsStore {
  songs: Song[];
  loading: boolean;
  fetchSongs: () => void;
  addSong: (newSong: Song) => void;
}

export const useSongsStore = create<SongsStore>((set) => ({
  songs: [],
  loading: false,
  fetchSongs: async () => {
    set({ loading: true });
    try {
      const res: AxiosResponse<Song[]> = await axios.get("/api/songs");
      set({ songs: res.data });
    } catch (error) {
      console.error("Error fetching songs:", error);
    } finally {
      set({ loading: false });
    }
  },

  addSong: async (newSong: Song) => {
    try {
      await axios.post("/api/songs", newSong);
      set((state) => ({ songs: [...state.songs, newSong] }));
    } catch (error) {
      console.error("Error adding song:", error);
    }
  },
}));
