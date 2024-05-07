import ControlMusic from "./controlMusic";
import PlayListIcon from "./icons/playListIcons";

export default function BottomBar() {
  function handleModalPlayList() {
    document.getElementById("modal-play-list").classList.toggle("hidden");
  }
  return (
    <>
      <nav className="fixed bottom-0 pt-4 w-full h-20 bg-zinc-900 flex justify-center">
        <ControlMusic />
      </nav>
      <div className="absolute flex justify-end items-center bottom-0 right-0 p-7">
        <PlayListIcon onClick={handleModalPlayList} />
      </div>
    </>
  );
}
