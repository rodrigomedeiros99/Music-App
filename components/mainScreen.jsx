import ImportFiles from "./importFiles";
import MusicList from "./musicList";

export default function MainScreen() {
  return (
    <section className="grow bg-gradient-to-t from-zinc-700 flex flex-row">
      <div className="w-1/6  bg-zinc-900 p-10">
        <ImportFiles />
      </div>
      <main
        className="flex mt-10 w-full flex-row justify-center h-auto"
        style={{ overflowY: "auto", height: "calc(100vh - 10rem)" }}
      >
        <MusicList />
      </main>
    </section>
  );
}
