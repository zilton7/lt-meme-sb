const audioFiles = [
  "ir-tu-duchas",
  "matrica",
  "pabuciuok-in-bybi",
  "paperdziau",
  "rukom-rukom",
  "uzsitusink-iki-galo",
];

let audio = false;

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (audio) {
      // Get currently playing square
      const currentAudioName = audio.src
        .replace(/^.*[\\\/]/, "")
        .replace(".mp3", "");
      const index = audioFiles.indexOf(currentAudioName);
      const currentSquare = squares[index];
      if (currentSquare.classList.contains("playing")) {
        currentSquare.classList.toggle("playing");
      }
      audio.pause();
    }
    audio = new Audio("./assets/audio/" + audioFiles[square.id - 1] + ".mp3");
    audio.play();
    square.classList.toggle("playing");
    audio.addEventListener("ended", () => {
      audio = false;
      if (square.classList.contains("playing")) {
        square.classList.toggle("playing");
      }
    });
  });
});
