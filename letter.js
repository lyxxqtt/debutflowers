// letter.js

document.addEventListener('DOMContentLoaded', function () {
    const letter = document.querySelector('.letter');
    const backgroundMusic = document.getElementById('background-music');
    
    // Function to fade in the letter content
    function fadeInLetter() {
      letter.style.opacity = 0;
      letter.style.transition = "opacity 2s ease-in-out";
      setTimeout(() => {
        letter.style.opacity = 1;
      }, 100);
    }
  
    // Call fadeInLetter function when the page is loaded
    fadeInLetter();
  
    // Play background music on load (if enabled)
    backgroundMusic.play();
  
    // Optionally, stop background music after a certain time (e.g., after 60 seconds)
    setTimeout(() => {
      backgroundMusic.pause();
    }, 60000); // 60 seconds
  });
  
  // Set saved music volume and time when page loads
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
  
  // Music Controls - Volume, Mute, Pause, and Volume Adjustment
  document.addEventListener('DOMContentLoaded', function () {
    const volumeSlider = document.getElementById('volume-slider');
    const volumeDownBtn = document.getElementById('volume-down');
    const volumeUpBtn = document.getElementById('volume-up');
    const muteBtn = document.getElementById('mute-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const backgroundMusic = document.getElementById('background-music');
    
    // Set the initial volume to 40% (default for the slider)
    backgroundMusic.volume = 0.4;
  
    // Update volume when slider changes
    volumeSlider.addEventListener('input', function () {
      backgroundMusic.volume = volumeSlider.value / 100;
    });
  
    // Decrease volume by 10% when volume-down button is clicked
    volumeDownBtn.addEventListener('click', function () {
      let newVolume = backgroundMusic.volume - 0.1;
      if (newVolume < 0) newVolume = 0;
      backgroundMusic.volume = newVolume;
      volumeSlider.value = newVolume * 100;
    });
  
    // Increase volume by 10% when volume-up button is clicked
    volumeUpBtn.addEventListener('click', function () {
      let newVolume = backgroundMusic.volume + 0.1;
      if (newVolume > 1) newVolume = 1;
      backgroundMusic.volume = newVolume;
      volumeSlider.value = newVolume * 100;
    });
  
    // Mute/Unmute when mute button is clicked
    muteBtn.addEventListener('click', function () {
      if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteBtn.innerText = "Mute";
      } else {
        backgroundMusic.muted = true;
        muteBtn.innerText = "Unmute";
      }
    });
  
    // Pause/Play when pause button is clicked
    pauseBtn.addEventListener('click', function () {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        pauseBtn.innerText = "Pause";
      } else {
        backgroundMusic.pause();
        pauseBtn.innerText = "Play";
      }
    });
  });
  