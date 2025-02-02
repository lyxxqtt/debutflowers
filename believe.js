


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

  // Move the "No" button to the center of the screen
  noBtn.style.position = "absolute";
  noBtn.style.top = "85";
  noBtn.style.left = "50%";
  noBtn.style.transform = "translate(-50%, -50%)";  // Center the button
});

noBtn.addEventListener("click", () => {
  // Redirect to the specified link when "No" is clicked
  window.location.href = "no.htm"; // Replace with your desired URL
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
