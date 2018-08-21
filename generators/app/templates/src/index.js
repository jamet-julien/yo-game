import Timer from "./lib/timer.js";
import { factoryLevel } from "./lib/factoryLevel.js";

const board = document.getElementById("game"),
  context = board.getContext("2d");

context.imageSmoothingEnabled = false;

let level,
  timer,
  end,
  totalTime,
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
  let createLevel = factoryLevel({
    width: window.innerWidth,
    height: window.innerHeight
  });
  totalTime = 0;
  level = await createLevel("setting");
  timer = new Timer(1 / 60);
  end = false;

  timer.draw = cumulateTime => {
    /** draw level here **/
    level.render.draw(context, cumulateTime);
  };

  timer.update = freq => {
    totalTime += freq;
    /** update level here **/
    level.update(freq);
  };

  callBack({
    on: level.event.on,
    play
  });

  playing = false;
  level.event.emit("ready");
}

/*
// décommenter avant le "build" 
window.Game = init;
*/

init(o => {
  // penser à intégrer Event dans l'instance
  o.on("ready", () => {
    o.play();
  });
});
