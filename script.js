const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let currentAudio = null;

document.querySelectorAll('.btn').forEach(btn => {
	btn.addEventListener('click', function() {
		const name = btn.dataset.sound;
		if (btn.classList.contains('stop')) {
			if (currentAudio) {
				currentAudio.pause();
				currentAudio.currentTime = 0;
				currentAudio = null;
			}
			return;
		}
		if (currentAudio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
		currentAudio = document.getElementById(name);
		currentAudio.currentTime = 0;
		currentAudio.play();
	});
});
