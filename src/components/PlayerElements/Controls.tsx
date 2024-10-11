import Image from "next/image";
import { memo } from "react";

interface ControlsProps {
  playing: boolean;
  togglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Controls = memo<ControlsProps>(
  ({ playing, togglePlay, onNext, onPrevious }) => (
    <div className="flex gap-4">
      <button
        className="p-6 border shadow-lg rounded-full relative"
        onClick={onPrevious}
      >
        <Image
          src="/rewind.svg"
          className="absolute inset-0 -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2"
          width={25}
          height={25}
          alt=""
        />
      </button>
      <button
        className="p-6 border shadow-lg rounded-full relative"
        onClick={togglePlay}
      >
        <Image
          src={playing ? "/pause.svg" : "/play.svg"}
          className="absolute inset-0 -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2"
          width={25}
          height={25}
          alt=""
        />
      </button>
      <button
        className="p-6 border shadow-lg rounded-full relative"
        onClick={onNext}
      >
        <Image
          src="/rewind.svg"
          className="rotate-180 absolute inset-0 -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2"
          width={25}
          height={25}
          alt=""
        />
      </button>
    </div>
  )
);

Controls.displayName = "Controls";

export default Controls;
