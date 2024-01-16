let videoElem = document.getElementById("video"),
playButton = document.getElementById("playbutton"),
caja = document.querySelector(".txt-cont");

playButton.addEventListener("click", handlePlayButton, false);
videoElem.addEventListener("pause", ()=>caja.classList.remove("ocultar"));

async function playVideo() {
  try {
    await videoElem.play();
    playButton.className = "playing";
    caja.classList.add("ocultar");

  } catch (err) {
    playButton.className = "";

  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.className = "";
    caja.classList.add("ocultar");
  }
}