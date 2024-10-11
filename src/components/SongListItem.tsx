import { useAudioPlayerStore } from "@/hooks/useAudioPlayerStore";
import useSelectSong from "@/hooks/useSelectSong";
import { Song } from "@/types/";
import Image from "next/image";
import MusicBars from "./ui/MusicBars";

interface Props {
  song: Song;
  index: number;
}

const SongListItem = ({ song, index }: Props) => {
  const { selectSong } = useSelectSong();

  const { currentIndex, playing } = useAudioPlayerStore();
  const isPlaying = index === currentIndex && playing;

  return (
    <li
      onClick={() => selectSong(index)}
      className="cursor-pointer border rounded-xl px-4 py-2 flex justify-between items-center sm:hover:text-white sm:hover:bg-black transition-colors relative"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-sm">{song.title}</h2>
        <h3 className="text-xs font-bold">{song.author}</h3>
      </div>
      <div className="relative">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Sounds_of_Earth_-_GPN-2000-001976.jpg/390px-The_Sounds_of_Earth_-_GPN-2000-001976.jpg"
          alt="music image"
          width={50}
          height={50}
          className={`rounded-lg transition-all  ${isPlaying ? "blur-sm" : ""}`}
        />
        {isPlaying && <MusicBars />}
      </div>
    </li>
  );
};

export default SongListItem;
