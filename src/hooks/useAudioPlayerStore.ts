import { AudioPlayerStore } from "@/types";
import { create } from "zustand";

export const useAudioPlayerStore = create<AudioPlayerStore>((set) => ({
  playing: false,
  play: () => set(() => ({ playing: true })),
  pause: () => set(() => ({ playing: false })),
  togglePlay: () => set((state) => ({ playing: !state.playing })),
  currentTime: 0,
  setCurrentTime: (time) => set(() => ({ currentTime: time })),
  loadedTime: 0,
  setLoadedTime: (time) => set(() => ({ loadedTime: time })),
  duration: 0,
  setDuration: (duration) => set(() => ({ duration })),
  currentIndex: null,
  setCurrentIndex: (index) => set(() => ({ currentIndex: index })),
  volume: 1,
  setVolume: (volume) => set(() => ({ volume })),
}));
