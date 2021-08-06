const audioFiles = [
  "ir-tu-duchas",
  "matrica",
  "pabuciuok-in-bybi",
  "paperdziau",
  "rukom-rukom",
  "uzsitusink-iki-galo",
];

let audio = false;

document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("click", () => {
    if (audio) {
      audio.pause();
    }
    const selectedSound =
      "./assets/audio/" + audioFiles[square.id - 1] + ".mp3";
    audio = new Audio(selectedSound);
    audio.play();
    audio.addEventListener("ended", () => {
      audio = false;
    });
  });
});
