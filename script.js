var playlistId = "PLtXBcDuMV6J_Y28Kje7WxvfYdvjfCOWrd";

function changePlaylist(id) {
  playlistId = id;
  playRandomVideo();
  toggleInfoPlaylist();
}

function playRandomVideo() {
  var player = document.getElementById("video-player");
  player.src = "https://www.youtube.com/embed?list=" + playlistId + "&autoplay=1&index=" + getRandomInt(1, 50);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleInfoPlaylist() {
  var el = document.getElementById("info-playlist-container");
  el.style.display = (el.style.display === "none") ? "block" : "none";
}

// autoplay inicial
changePlaylist(playlistId);

// resize fix
window.addEventListener("resize", function() {
  var player = document.getElementById("video-player");
  player.style.width = window.innerWidth + "px";
  player.style.height = window.innerHeight + "px";
});
