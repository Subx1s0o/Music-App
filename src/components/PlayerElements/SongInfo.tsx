import Image from "next/image";
import { memo } from "react";

interface Song {
  title: string;
  author: string;
}

interface SongInfoProps {
  song: Song;
}

const SongInfo = memo<SongInfoProps>(({ song }) => (
  <div className="mb-5 flex gap-2 justify-between w-full items-center">
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Sounds_of_Earth_-_GPN-2000-001976.jpg/390px-The_Sounds_of_Earth_-_GPN-2000-001976.jpg"
      alt=""
      className="rounded-lg"
      width={50}
      height={50}
    />
    <div className="flex flex-col text-end gap-1">
      <h3 className="text-sm">{song.title}</h3>
      <p className="text-xs font-bold">{song.author}</p>
    </div>
  </div>
));

SongInfo.displayName = "SongInfo";

export default SongInfo;
