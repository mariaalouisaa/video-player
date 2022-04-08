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
  showVideoCurrentTime();
});

//----------------- TIME DISPLAY ---------------/

// Display total video length
const showDuration = () => {
  length = video.duration;
  //turn seconds into mins
  let mins = Math.floor(length / 60);
  let secs = Math.round(length - mins * 60);
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;
  document.querySelector(".duration").innerHTML = `${mins}:${secs}`;
};

// Display current time of video play
const showVideoCurrentTime = () => {
  const display = document.querySelector("#start");
  setInterval(() => {
    let time = Math.floor(video.currentTime);
    let mins = Math.floor(time / 60);
    let secs = Math.round(time - mins * 60);
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    display.innerHTML = `${mins}:${secs}`;
  }, 1000);
  // the interval still runs on pause (see console) would be good to clearInterval
};

//--------------- PROGRESS BAR -----------------//

document.querySelector("#progress").oninput = function () {
  console.log(this.value); // num 1 - 100
  // will need to make this change current video time
};

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
  const volumeIcon = document.querySelector(".sound");
  if (muted) {
    muted = false;
    volumeIcon.src = "images/volume.png";
  } else {
    muted = true;
    volumeIcon.src = "images/mute.png";
  }
  muted ? (video.muted = true) : (video.muted = false);
};

//--------------- VOLUME -----------------//

document.querySelector("#volume-progress").oninput = function () {
  console.log(this.value); // num 1 - 100
  // will need to make this change current video time
  // use a sum to divide the total length by 100 * value
};

//--------------- EVENTLISTENERS ------------//

document.querySelector("#fullscreen").addEventListener("click", openFullscreen);

document.querySelector("#sound").addEventListener("click", muteToggle);

// ------- Still to do... ----------
// adjust sound with sound progress bar
// adjust video play time with main progress bar
