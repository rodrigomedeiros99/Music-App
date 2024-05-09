import { useEffect, useState } from "react";
import MusicInList from "./MusicInlist";

export default function MusicList() {
  const [musicList, setMusicList] = useState([]);
  const fetchMusicList = async () => {
    try {
      await window.electronAPI.SendToElectron("music-get");
      await window.electronAPI.ReciveFromElectron(
        "music:list",
        (event, arg) => {
          setMusicList(arg);
        }
      );
    } catch (error) {
      console.error("Erro ao obter a lista de músicas:", error);
    }
  };

  useEffect(() => {
    fetchMusicList();
  }, []);
  return (
    <div className=" w-11/12">
      <h2 className="ml-5 text-gray-50 animate-pulse text-2xl">Music List</h2>
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
