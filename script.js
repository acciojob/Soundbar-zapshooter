//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('.btn');
let currentAudio = null;

// Play sound
buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		const soundName = btn.textContent.trim();
		if (soundName === 'stop') {
			if (currentAudio) {
				currentAudio.pause();
				currentAudio.currentTime = 0;
			}
			return;
		}
		if (currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
		currentAudio = new Audio(`./sounds/${soundName}.mp3`);
		currentAudio.play();
	});
});
