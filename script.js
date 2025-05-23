let volume = 0;
const audio = document.getElementById('background-audio');
const gifWrapper = document.getElementById('gif-wrapper');
let hoveringGif = false;

window.addEventListener('load', () => {
  audio.volume = 0;
  audio.play().catch(() => {
    console.log('Autoplay blocked. Click to start audio.');
  });
});

document.body.addEventListener('click', () => {
  audio.play();
});

function updateVolume() {
  volume = Math.max(0, Math.min(100, volume));
  document.getElementById('volume-bar').style.width = volume + '%';
  document.getElementById('volume-text').innerText = 'Volume: ' + Math.floor(volume) + '%';

  const maxAudioVolume = 0.1;
  audio.volume = (volume / 100) * maxAudioVolume;

  const bars = document.getElementById('disco-bars');
  if (volume > 0) {
    bars.classList.add('active');
  } else {
    bars.classList.remove('active');
  }
}


setInterval(() => {
  volume += hoveringGif ? 1 : -1;
  updateVolume();
}, 50);

gifWrapper.addEventListener('mouseenter', () => {
  hoveringGif = true;
});

gifWrapper.addEventListener('mouseleave', () => {
  hoveringGif = false;
});