Make it possible to pause (suspend) and unpause the game by pressing the Esc key.

This can be done by changing the runLevel function to use another keyboard event handler and interrupting or resuming the animation whenever the Esc key is hit.

The runAnimation interface may not look like it is suitable for this, at first glance, but it is, if you rearrange the way runLevel calls it.

When you have that working, there is something else you could try. The way we have been registering keyboard event handlers is somewhat problematic. The arrows object is currently a global variable, and its event handlers are kept around even when no game is running. You could say they leak out of our system. Extend trackKeys to provide a way to unregister its handlers and then change runLevel to register its handlers when it starts and unregister them again when it is finished.

<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runLevel function. Modify this...
  function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    runAnimation(function(step) {
      level.animate(step, arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        if (andThen)
          andThen(level.status);
        return false;
      }
    });
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>