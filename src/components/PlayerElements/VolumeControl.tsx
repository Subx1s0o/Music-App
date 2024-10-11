import Image from "next/image";
import { Popover } from "rizzui";
const VolumeControl = ({
  setVolume,
  volume,
}: {
  setVolume: (newVolume: number) => void;
  volume: number;
}) => {
  return (
    <div className="flex items-center gap-4 absolute right-4 bottom-3">
      <Popover showArrow={false}>
        <Popover.Content className="border-none pr-[14px]">
          <div className="h-40 w-10 bg-white border p-2 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(event) => {
                const newVolume = parseFloat(event.target.value);
                setVolume(newVolume);
              }}
              className="w-32 transform -rotate-90"
            />
          </div>
        </Popover.Content>
        <Popover.Trigger>
          <button className="relative p-3 border shadow-lg rounded-full">
            <Image src="/volume.svg" width={25} height={25} alt="volume" />
          </button>
        </Popover.Trigger>
      </Popover>
    </div>
  );
};

export default VolumeControl;
