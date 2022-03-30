const video = document.querySelector("#video");
let playing = false;

document.querySelector("#play").addEventListener("click", () => {
  playing ? video.pause() : video.play();
  playing ? (playing = false) : (playing = true);
});
