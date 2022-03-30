const video = document.querySelector("#video1");
const screen = document.querySelector(".container");
let playing = false;
let length;

// Play & Pause functionality
document.querySelector("#play").addEventListener("click", () => {
  playing ? video.pause() : video.play();
  //change playing varible for ability to toggle
  playing ? (playing = false) : (playing = true);
  if (!length) showDuration();
});

// Display video total length
const showDuration = () => {
  length = video.duration;
  //turn seconds into mins
  let mins = Math.floor(length / 60);
  let secs = Math.round(length - mins * 60);
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) mins = "0" + secs;
  document.querySelector(".duration").innerHTML = `${mins}:${secs}`;
};

// Open fullscreen
const openFullscreen = () => {
  console.log("clicked");
  if (!document.fullscreenElement) {
    if (screen.requestFullscreen) {
      screen.requestFullscreen();
    } else if (screen.webkitRequestFullscreen) {
      /* Safari */
      screen.webkitRequestFullscreen();
    } else if (screen.msRequestFullscreen) {
      /* IE11 */
      screen.msRequestFullscreen();
    }
  } else {
    closeFullscreen();
  }
};

// Close fullscreen
const closeFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
};

document.querySelector("#fullscreen").addEventListener("click", openFullscreen);
