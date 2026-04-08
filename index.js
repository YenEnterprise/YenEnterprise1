    // --- 1. AUDIO CONTROLS ---
const audio = document.getElementById('birthday-song');
const playPauseBtn = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');
let isPlaying = false;

if (audio && volumeControl) {
    audio.volume = volumeControl.value;
}

// Play/Pause Logic
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="play-icon">▶️</i>';
        } else {
            audio.play();
            playPauseBtn.innerHTML = '<i class="play-icon">⏸️</i>';
        }
        isPlaying = !isPlaying;
    });
}

if (volumeControl) {
    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });
}

// --- 2. IMAGE CLEANUP (The Fix for your 16 vs 8 problem) ---
function fixImageCount() {
    const container = document.querySelector('.image-container') || document.querySelector('.memory-grid');
    if (!container) return;

    // Grab whatever is currently there
    const images = Array.from(container.querySelectorAll('img'));
    
    // Wipe the container completely to stop "ghost" duplicates
    container.innerHTML = '';

    // Only put back the first 8 unique images
    images.slice(0, 8).forEach(img => {
        container.appendChild(img);
    });
}

// --- 3. FLOATING ELEMENTS (Confetti/Hearts) ---
function createFloatingElements() {
    const colors = ['#FF1493', '#8A2BE2', '#FFD700', '#FF4500', '#00BFFF', '#32CD32'];
    const elements = ['confetti', 'balloon', 'heart', 'star'];
    const shapes = ['▲', '■', '●', '★', '♥️', '♦️', '✦', '✧'];
    
    // Reduced to 50 items to prevent lag and browser "ghosting"
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            const type = elements[Math.floor(Math.random() * elements.length)];
            element.className = type;
            
            element.style.left = Math.random() * 100 + 'vw';
            element.style.top = '-30px';
            
            if (type === 'confetti') {
                element.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
                element.style.color = colors[Math.floor(Math.random() * colors.length)];
            } else if (type === 'balloon') {
                element.innerHTML = '🎈';
            } else if (type === 'heart') {
                element.innerHTML = '❤️';
            } else {
                element.innerHTML = '✨';
            }
            
            document.body.appendChild(element);
            
            gsap.to(element, {
                y: window.innerHeight + 100,
                x: '+=' + (Math.random() * 200 - 100),
                rotation: Math.random() * 360,
                duration: Math.random() * 10 + 5,
                onComplete: () => element.remove()
            });
        }, i * 200);
    }
}

// --- 4. NAVIGATION & INITIALIZATION ---
function goToNextPage() {
    gsap.to('.next-button', {
        scale: 1.2,
        yoyo: true,
        repeat: 1,
        duration: 0.3,
        onComplete: () => { window.location.href = "memorylane.html"; }
    });
}

// RUN EVERYTHING ON LOAD
window.addEventListener('load', () => {
    fixImageCount();
    createFloatingElements();
    
    // Autoplay audio attempt
    setTimeout(() => {
        if(audio) {
            audio.play().then(() => {
                isPlaying = true;
                if(playPauseBtn) playPauseBtn.innerHTML = '<i class="play-icon">⏸️</i>';
            }).catch(e => console.log("Autoplay blocked. User must click play."));
        }
    }, 1000);
});

// Sparkle effect for Heading
if (document.querySelector('h1')) {
    gsap.to('h1', {
        textShadow: "0 0 10px rgba(255, 20, 147, 0.8)",
        repeat: -1,
        yoyo: true,
        duration: 2
    });
}