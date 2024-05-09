export default function formatTime(seconds) {
  const minutos = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formatMinutes = String(minutos).padStart(2, "0");
  const formatSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formatMinutes}:${formatSeconds}`;
}
