
const sounds = {
  Kick: new Audio("sounds/kick.mp3"),
  Snare: new Audio("sounds/snare.mp3"),
  "Hi-Hat": new Audio("sounds/hihat.mp3"),
  Tom: new Audio("sounds/tom.mp3"),
  Crash: new Audio("sounds/crash.mp3"),
  Ride: new Audio("sounds/ride.mp3"),
};

document.querySelectorAll(".drum-pad").forEach(button => {
  button.addEventListener("click", () => {
    const drumName = button.innerText;
    const sound = sounds[drumName];
    if (sound) {
      sound.currentTime = 0; 
      sound.play();
    }
  });
});
