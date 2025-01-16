function showMessage() {
  setTimeout(function() {
    let message = document.getElementById('initial-message');
    message.style.opacity = '1'; // Make it fully visible
    message.style.transform = 'translateX(-50%) translateY(0)'; // Move the message to its final position
    message.style.display = 'block'; // Ensure the message is displayed
  }, 5000); // 5000ms = 5 seconds
}

// Function to handle redirect after clicking the message
function redirectToWebsite() {
  // Get the current playback time of the audio
  let audio = document.getElementById('background-music');
  let currentTime = audio.currentTime; // Store the current time of the audio

  // Save audio playing state and time to localStorage
  localStorage.setItem('audioPlaying', 'true');
  localStorage.setItem('audioCurrentTime', currentTime); // Save the time
  
  // Redirect to letter.htm
  window.location.href = 'letter.htm';
}

// Call showMessage when the page loads
window.onload = function() {
  showMessage();  // Display message after 5 seconds
  document.body.classList.remove("container");  // Remove "container" class from the body
};