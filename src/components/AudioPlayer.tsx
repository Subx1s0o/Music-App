"use client";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { useAudioPlayerStore } from "@/hooks/useAudioPlayerStore";
import { useMedia } from "@/hooks/useMedia";
import { useSongsStore } from "@/hooks/useSongsStore";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useMemo } from "react";
import ReactPlayer from "react-player";
import Controls from "./PlayerElements/Controls";
import ProgressBar from "./PlayerElements/ProgressBar";
import SongInfo from "./PlayerElements/SongInfo";
import VolumeControl from "./PlayerElements/VolumeControl";

export default function AudioPlayer() {
  const {
    currentIndex,
    playing,
    currentTime,
    duration,
    loadedTime,
    togglePlay,
    volume,
    setVolume,
  } = useAudioPlayerStore();
  const { songs } = useSongsStore();
  const {
    playerRef,
    handleProgress,
    handleDuration,
    handleNextSong,
    handlePreviousSong,
    seekTo,
  } = useAudioPlayer({ songs, currentIndex, playing });

  const isDesktop = useMedia("(min-width: 991px)");

  const currentSong = useMemo(
    () => (currentIndex !== null ? songs[currentIndex] : null),
    [songs, currentIndex]
  );

  if (!currentSong)
    return <p className="text-center">Please select a song to play.</p>;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "30px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      exit={{ opacity: 0, translateY: "30px" }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center border-t-2 shadow-2xl rounded-t-3xl px-4 py-3 fixed left-0 bottom-0 w-full bg-white"
    >
      <SongInfo song={currentSong} />
      <ReactPlayer
        ref={playerRef}
        url={currentSong.url}
        playing={playing}
        onDuration={handleDuration}
        onProgress={handleProgress}
        onEnded={handleNextSong}
        width="0"
        height="0"
        volume={volume}
        config={{
          youtube: {
            playerVars: {
              playsinline: 1,
            },
          },
        }}
      />
      <ProgressBar
        duration={duration}
        currentTime={currentTime}
        seekTo={seekTo}
        loadedTime={loadedTime}
      />
      <div className="flex justify-between w-full mt-1">
        <span>{format(new Date(currentTime * 1000), "mm:ss")}</span>
        <span>
          {duration ? format(new Date(duration * 1000), "mm:ss") : "0:00"}
        </span>
      </div>
      <Controls
        playing={playing}
        togglePlay={togglePlay}
        onNext={handleNextSong}
        onPrevious={handlePreviousSong}
      />
      {isDesktop && <VolumeControl setVolume={setVolume} volume={volume} />}
    </motion.div>
  );
}
