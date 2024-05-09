import AddIcons from "./icons/addIcons";
import DeleteIcon from "./icons/deleteIcons";
import EmptyAlbumIcon from "./icons/emptyAlbumIcons";

export default function MusicInList({ music }) {
  function handleExcluirMusica(music) {
    window.electronAPI.SendToElectron("music-delete", music);
  }
  function handleAdicionarMusica(music) {
    window.electronAPI.SendToElectron("music-to-play", music);
  }
  return (
    <div className="m-5 p-2 flex flex-row rounded-xl border shadow-sm shadow-indigo-500 hover:shadow-gray-500 border-purple-500 hover:border-sky-400 hover:animate-pulse transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-100 duration-50 w-full gap-2">
      <EmptyAlbumIcon />
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-white">Name</h1>
          <h2 className="text-white">{music}</h2>
        </div>
        <div className="flex flex-row justify-center gap-5 h-full">
          <AddIcons onClick={() => handleAdicionarMusica(music)} />
          <DeleteIcon onClick={() => handleExcluirMusica(music)} />
        </div>
      </div>
    </div>
  );
}
