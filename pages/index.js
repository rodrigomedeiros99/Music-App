import BottomBar from "@/components/bottomBar";
import MainScreen from "@/components/mainScreen";
import ModalPlaylist from "@/components/modalPlayList";
import Toast from "@/components/toast";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Toast />
      <MainScreen />
      <BottomBar />
      <ModalPlaylist />
    </main>
  );
}
