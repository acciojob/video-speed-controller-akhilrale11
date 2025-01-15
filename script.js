const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const volumeSlider = player.querySelector('.volume');
const speedSlider = player.querySelector('.playbackSpeed');
const skipButtons = player.querySelectorAll('.skip');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

// Toggle play and pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Handle volume change
function handleVolume() {
  video.volume = this.value;
}

// Handle playback speed change
function handleSpeed() {
  video.playbackRate = this.value;
}

// Skip video by a specific time
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub through video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
vid
