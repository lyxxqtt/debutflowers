const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  // Change the question and gif when "Yes" is clicked
  question.innerHTML = "Awh, dapat 'no' grr ulit!!!";
  gif.src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjhqOHA3eG5nMGNmbW15eDVmazg3NWQwMmViaTB6anlrdjgzN3ZwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o9bJX4O9ShW1L32eY/giphy.gif";

  // Hide the "Yes" button after it is clicked
  yesBtn.style.display = "none";

  // Adjust "No" button to center it properly on all screen sizes
  noBtn.style.position = "absolute";
  noBtn.style.top = "85%";  // Keep it near the bottom of the screen
  noBtn.style.left = "50%";
  noBtn.style.transform = "translate(-50%, -50%)";  // Center the button
});

noBtn.addEventListener("click", () => {
  // Redirect to the specified link when "No" is clicked
  window.location.href = "no.htm"; // Replace with your desired URL
});

window.onload = function () {
  if (localStorage.getItem('audioPlaying') === 'true') {
    let savedTime = localStorage.getItem('audioCurrentTime');
    var audio = document.getElementById('background-music');
    audio.volume = 0.4;

    if (savedTime && !isNaN(savedTime)) {
      audio.currentTime = parseFloat(savedTime);
    }

    audio.play();
    localStorage.removeItem('audioPlaying');
    localStorage.removeItem('audioCurrentTime');
  }
};
