import { Song } from "@/types/";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useAudioPlayerStore } from "./useAudioPlayerStore";

interface Props {
  songs: Song[];
  currentIndex: number | null;
  playing: boolean;
}

const useAudioPlayer = ({ songs, currentIndex, playing }: Props) => {
  const {
    setCurrentTime,
    setLoadedTime,
    setDuration,
    currentTime,
    setCurrentIndex,
    play,
  } = useAudioPlayerStore();

  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (currentIndex !== null) {
      setCurrentTime(0);
    }
  }, [currentIndex, setCurrentTime]);

  const handleProgress = (progress: {
    playedSeconds: number;
    loadedSeconds: number;
  }) => {
    if (playing) {
      const roundedPlayedSeconds = Math.round(progress.playedSeconds);
      if (Math.abs(roundedPlayedSeconds - (currentTime || 0)) > 0.5) {
        setCurrentTime(roundedPlayedSeconds);
      }
      setLoadedTime(progress.loadedSeconds);
    }
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleNextSong = () => {
    const newIndex =
      currentIndex !== null ? (currentIndex + 1) % songs.length : 0;
    setCurrentIndex(newIndex);
    setCurrentTime(0);
    play();
  };

  const handlePreviousSong = () => {
    const newIndex =
      currentIndex !== null
        ? currentIndex === 0
          ? songs.length - 1
          : currentIndex - 1
        : 0;
    setCurrentIndex(newIndex);
    setCurrentTime(0);
    play();
  };

  const seekTo = (time: number) => {
    setCurrentTime(time);
    if (playerRef.current) {
      playerRef.current.seekTo(time);
    }
  };

  return {
    playerRef,
    handleProgress,
    handleDuration,
    handleNextSong,
    handlePreviousSong,
    seekTo,
  };
};

export default useAudioPlayer;
