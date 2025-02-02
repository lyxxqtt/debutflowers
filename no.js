document.getElementById("showVideoBtn").addEventListener("click", function() {
    const textElement = document.getElementById("text");
    const showVideoBtn = document.getElementById("showVideoBtn");
    const videoContainer = document.getElementById("videoContainer");

    // Hide the text and button smoothly
    textElement.style.opacity = "0";
    showVideoBtn.style.opacity = "0";

    setTimeout(function() {
        textElement.style.display = "none";
        showVideoBtn.style.display = "none";
        videoContainer.style.display = "block";
        videoContainer.style.opacity = "1";
        const videoElement = document.getElementById("video");
        videoElement.play();

        // Dynamically add "I love u" text
        const loveText = document.createElement("p");
        loveText.id = "loveText";
        loveText.textContent = "I love u, hope u like it";
        loveText.style.position = "absolute";
        loveText.style.top = "-20%";
        loveText.style.left = "50%";
        loveText.style.transform = "translateX(-50%)";
        loveText.style.fontSize = "24px";
        loveText.style.fontWeight = "bold";
        loveText.style.color = "#d32f2f"; // Red color for the text
        loveText.style.opacity = "0"; // Initially hidden for smooth fade-in
        loveText.style.transition = "opacity 0.5s ease"; // Smooth fade-in transition

        // Append loveText to videoContainer and fade it in
        videoContainer.appendChild(loveText);

        // Fade in the text after a short delay
        setTimeout(function() {
            loveText.style.opacity = "1";
        }, 100);

    }, 300);
});

// Video end logic to show download button
const videoElement = document.getElementById('video');
videoElement.addEventListener('ended', function() {
    const downloadContainer = document.getElementById("downloadContainer");
    downloadContainer.style.display = "block";
    setTimeout(function() {
        downloadContainer.style.opacity = "1";
    }, 100);
});

// Fullscreen logic
document.getElementById("video").addEventListener("fullscreenchange", function() {
    const exitFullscreenBtn = document.getElementById("exitFullscreenBtn");
    if (document.fullscreenElement) {
        // Show the exit fullscreen button
        exitFullscreenBtn.style.display = "block";
    } else {
        // Hide the exit fullscreen button
        exitFullscreenBtn.style.display = "none";
    }
});

// Function to exit fullscreen
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullscreen) { // Firefox
        document.mozCancelFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}
