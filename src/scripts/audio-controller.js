export default function setupAudioToggle() {
    const audio = document.getElementById("myAudio");
    const playPauseBtn = document.getElementById("playPauseBtn");
  
    playPauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "🔊";
      } else {
        audio.pause();
        playPauseBtn.textContent = "🔇";
      }
    });
  }