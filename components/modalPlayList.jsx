import { useEffect, useState } from "react";

export default function ModalPlaylist() {
  const [musicPlayList, setMusicPlayList] = useState([]);
  useEffect(() => {
    window.electronAPI.ReciveFromElectron("music-playable", (event, music) => {
      setMusicPlayList([...musicPlayList, music]);
    });
  }, []);
  return (
    <div
      id="modal-play-list"
      className="absolute flex flex-col ring-1 ring-zinc-700 rounded-md right-0 bottom-20 bg-[#212124] w-80 h-auto border-solid mr-2"
    >
      <h1 className="text-center pt-2 text-white">PlayList</h1>
      <div className="m-4 bg-[#171719] ">
        {musicPlayList.length === 0 ? (
          <p className="text-zinc-400 "> Empty</p>
        ) : (
          musicPlayList.map((music, index) => {
            return (
              <p className="text-white" key={index}>
                {music}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
}
