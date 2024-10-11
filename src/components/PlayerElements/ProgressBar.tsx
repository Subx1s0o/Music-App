"use client";
import useProgressBar from "@/hooks/useProgressBar";
import React from "react";

interface ProgressBarProps {
  duration: number | null;
  currentTime: number;
  seekTo: (time: number) => void;
  loadedTime: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  duration,
  currentTime,
  seekTo,
  loadedTime,
}) => {
  const { handleSeek } = useProgressBar(duration, seekTo);

  return (
    <div
      className="relative w-full h-2 bg-gray-400 cursor-pointer  rounded-lg"
      onClick={handleSeek}
    >
      <div
        className="absolute h-full bg-gray-300 rounded-lg transition-[width]"
        style={{ width: `${(loadedTime / (duration ?? 1)) * 100}%` }}
      />
      <div
        className="absolute h-full bg-black rounded-lg transition-[width]"
        style={{ width: `${(currentTime / (duration ?? 1)) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
