(function() {
  Game(function(instance) {
    console.log(instance);

    instance.on("ready", function() {
      console.log("ready");
      instance.play();
    });

    instance.on("timeout", function() {
      console.log("timeout");
    });

    instance.on("clicked", function(score) {
      console.log(score);
    });
  });
})();
