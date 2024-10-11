"use client";
import { useSongsStore } from "@/hooks/useSongsStore";
import { useEffect } from "react";
import { Loader } from "rizzui";
import AudioPlayer from "./AudioPlayer";
import SongList from "./SongList";
import AddButton from "./ui/AddButton";

export default function MusicPage() {
  const { songs, fetchSongs, loading } = useSongsStore();

  useEffect(() => {
    fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen font-mont pt-5">
      <div className="px-3">
        <h2 className="sm:text-center mb-5 font-bold text-lg">
          Available Songs
        </h2>
      </div>

      {loading ? <Loader variant="spinner" /> : <SongList songs={songs} />}

      <AddButton />

      {!loading && songs && <AudioPlayer />}
    </div>
  );
}
