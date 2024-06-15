window.onload = function () {
  var video = document.getElementById("video1");
  var button = document.getElementById("playPauseButton");
  var isPlaying = false;

  button.addEventListener("click", function () {
    if (isPlaying) {
      video.pause();
      isPlaying = false;
      button.innerHTML =
        '  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z"/></svg> <p>Play Prototype</p>';
    } else {
      video.play();
      isPlaying = true;
      button.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 6h4v12H6zm8 0h4v12h-4z"/></svg> <p>Pause Prototype</p>';
    }
  });

  var video2 = document.getElementById("video2");
  var button2 = document.getElementById("playPauseButton2");

  button2.addEventListener("click", function () {
    if (video2.paused) {
      video2.play();
      button2.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 6h4v12H6zm8 0h4v12h-4z"/></svg> <p>Pause Prototype</p>';
    } else {
      video2.pause();
      button2.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 5v14l11-7z"/></svg> <p>Play Prototype</p>';
    }
  });
};
