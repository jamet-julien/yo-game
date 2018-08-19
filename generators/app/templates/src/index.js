import Timer from "./lib/timer.js";

const board = document.getElementById("game"),
  context = board.getContext("2d");

let timer,
  playing = true;

function play() {
  if (!playing) {
    timer.start();
    playing = true;
    end = false;
    totalTime = 0;
  }
}

async function init(callBack) {
  timer.draw = cumulateTime => {
    /** draw level here **/
  };

  timer.update = freq => {
    /** update level here **/
  };

  callBack({
    on: level.event.on,
    play
  });

  playing = false;
}

/*
// décommenter avant le "build" 
window.Game = init;
*/

init(o => {
  // penser a intégrer Event dans l'instance
  o.on("ready", () => {
    o.play();
  });
});
