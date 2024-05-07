import AddIcons from "./icons/addIcons";
import DeleteIcon from "./icons/deleteIcons";
import EmptyAlbumIcon from "./icons/emptyAlbumIcons";

export default function MusicInList({ music }) {
  return (
    <div className="m-5 p-2 flex flex-row border border-gray-500 w-full gap-2">
      <EmptyAlbumIcon />
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-white">Nome</h1>
          <h2 className="text-white">{music}</h2>
        </div>
        <div className="flex flex-row justify-center gap-5 h-full">
          <AddIcons />
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}
