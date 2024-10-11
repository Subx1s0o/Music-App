import { useCallback } from "react";

const useProgressBar = (
  duration: number | null,
  setCurrentTime: (time: number) => void
) => {
  const handleSeek = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const percent = clickX / rect.width;
      const newTime = Math.max(0, Math.round((duration ?? 0) * percent));

      setCurrentTime(newTime);
    },
    [duration, setCurrentTime]
  );

  return { handleSeek };
};

export default useProgressBar;
