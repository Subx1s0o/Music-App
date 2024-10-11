import { useAudioPlayerStore } from "./useAudioPlayerStore";

export default function useSelectSong() {
  const { setCurrentIndex, currentIndex, setCurrentTime, play, togglePlay } =
    useAudioPlayerStore();

  const selectSong = (index: number) => {
    if (currentIndex !== index) {
      setCurrentIndex(index);
      setCurrentTime(0);
      requestAnimationFrame(() => {
        play();
      });
    } else {
      togglePlay();
    }
  };

  return {
    selectSong,
  };
}
