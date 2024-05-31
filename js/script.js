var enterButton = document.getElementById("enterButton");
var mainContent = document.getElementById("mainContent");
var audioPlayer = document.getElementById("audioPlayer");
var musicStatus = document.getElementById("musicStatus");
var progressBar = document.getElementById("progressBar");


var progressBarInterval; 


function updateProgressBar() {
  var currentTime = audioPlayer.currentTime;
  var duration = audioPlayer.duration;
  var progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + "%";
}

audioPlayer.addEventListener("play", function () {
  musicStatus.textContent = "";
  progressBarInterval = setInterval(updateProgressBar, 10); 
});

audioPlayer.addEventListener("pause", function () {
  musicStatus.textContent = "";
  clearInterval(progressBarInterval); 
});

audioPlayer.addEventListener("loadedmetadata", function () {
  progressBar.style.width = "0%";
});

enterButton.addEventListener("click", function () {
  audioPlayer.play();
  mainContent.classList.add("visible");
  enterButton.classList.remove("visible");
});

setTimeout(function () {
  enterButton.classList.add("visible");
  enterButton.style.animation = "fade-in 1.4s ease-in";
}, 100);

document.body.addEventListener("click", function () {
    var video = document.getElementById("video");
    video.style.display = "block";
    video.play();
  });