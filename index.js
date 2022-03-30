const video = document.querySelector("#video1");
let playing = false;
let length;

// Play & Pause functionality
document.querySelector("#play").addEventListener("click", () => {
  playing ? video.pause() : video.play();
  //change playing varible for ability to toggle
  playing ? (playing = false) : (playing = true);
  if (!length) showDuration();
});

const showDuration = () => {
  length = video.duration;
  //turn seconds into mins
  let mins = Math.floor(length / 60);
  let secs = Math.round(length - mins * 60);
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) mins = "0" + secs;
  document.querySelector(".duration").innerHTML = `${mins}:${secs}`;
};
