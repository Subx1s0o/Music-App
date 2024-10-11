"use client";
import { Song } from "@/types/";
import { memo } from "react";
import SongListItem from "./SongListItem";

interface Props {
  songs: Song[];
}

const SongList = memo(function SongList({ songs }: Props) {
  return (
    <div className="">
      <ul className="flex flex-col gap-3 px-4 max-h-[calc(100vh-275px)] overflow-y-auto pt-5 mb-5">
        {songs.map((song, index) => (
          <SongListItem key={index} song={song} index={index} />
        ))}
      </ul>
    </div>
  );
});

export default SongList;
