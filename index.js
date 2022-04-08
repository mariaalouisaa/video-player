const video = document.querySelector("#video1");
const screen = document.querySelector(".container");
let playing = false;
let length;
let muted = false;

//----------------- PLAY & PAUSE ---------------/

document.querySelector("#play").addEventListener("click", () => {
  const play = document.querySelector(".play");
  playing ? video.pause() : video.play();
  //change playing varible for ability to toggle playmode and icon
  if (playing) {
    playing = false;
    play.src = "images/play.png";
  } else {
    playing = true;
    play.src = "images/pause.png";
  }

  if (!length) showDuration();
  // showVideoCurrentTime();
});

//----------------- TIME DISPLAY ---------------/

// Display total video length
const showDuration = () => {
  length = video.duration;
  //turn seconds into mins
  let mins = Math.floor(length / 60);
  let secs = Math.round(length - mins * 60);
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) mins = "0" + secs;
  document.querySelector(".duration").innerHTML = `${mins}:${secs}`;
};

// Display current time of video play
// const showVideoCurrentTime = () => {
//   setInterval(() => {
//     let currentTime = Math.floor(video.currentTime);
//     console.log(currentTime);
//   }, 1000);
// };

//--------------- FULLSCREEN -----------------//

// Open fullscreen
const openFullscreen = () => {
  //change icon
  document.querySelector(".fullscreen").src = "images/exit-full.png";
  // cover full screen for different browsers
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
  //change icon
  document.querySelector(".fullscreen").src = "images/fullscreen.png";
  // cover full screen for different browsers
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

//--------------- MUTE -----------------//

const muteToggle = () => {
  muted ? (muted = false) : (muted = true);
  muted ? (video.muted = true) : (video.muted = false);
};

document.querySelector("#fullscreen").addEventListener("click", openFullscreen);

document.querySelector("#sound").addEventListener("click", muteToggle);

// ------- Still to do... ----------
// Show time elapsed on left of progress bar
// click on sound button mutes/unmutes
// adjust sound with sound progress bar
// addust video play time with main progress bar
// Control bar hidden on default and shown when curser is on hover of video container
// Add favicon
