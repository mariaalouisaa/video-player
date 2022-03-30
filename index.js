const video = document.querySelector("#video");

document.querySelector("#play").addEventListener("click", () => {
  console.log(video);
  video.play();
});
