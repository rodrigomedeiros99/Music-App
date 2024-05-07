import { useState } from "react";
import MusicInList from "./MusicInlist";

export default function MusicList() {
  const [musicList, setMusicList] = useState([]);
  return (
    <div className=" w-11/12">
      <h2 className="ml-5 text-neutral-200 text-2xl">Music List</h2>
      {musicList.length === 0 ? (
        <p className="text-zinc-400">Empty</p>
      ) : (
        musicList.map((music, index) => {
          return <MusicInList key={index} music={music} />;
        })
      )}
    </div>
  );
}
