const button = document.querySelector(".hover-button");
const sound = document.getElementById("sound");

button.addEventListener("mouseover", function () {
  sound.play();
});
