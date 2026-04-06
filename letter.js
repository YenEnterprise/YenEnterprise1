document.addEventListener('DOMContentLoaded', function() {
            // Fade in animation
            setTimeout(() => {
                document.querySelector('.container').style.opacity = 1;
            }, 500);

            // Typewriter effect for letter
            const letterContent = "My dearest friend,  As I sit here thinking about all our memories together, I can't help but smile. From our late-night talks to our spontaneous adventures, you've filled my life with so much joy and laughter. You've been my shoulder to cry on, my partner in crime, and my biggest supporter.\n\nOn your special day, I want you to know how grateful I am to have you in my life. You make every day brighter just by being you - kind, funny, and incredibly thoughtful.\n\nHappy Birthday to my favorite person in the world! Here's to many more years of friendship, laughter, and creating memories together.\n\nWith all my love,\n[Your Name]";
            
            new Typed('#typed-text', {
                strings: [letterContent],
                typeSpeed: 30,
                showCursor: true,
                cursorChar: '|',
                onComplete: function() {
                    setTimeout(() => {
                        document.querySelector('.surprise-button').classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
                    }, 1000);
                }
            });

            // Create floating elements
            const floatingElements = [
                { type: 'heart', color: '#ff6b8a', size: '20px' },
                { type: 'heart', color: '#f48fb1', size: '30px' },
                { type: 'star', color: '#ffd54f', size: '25px' },
                { type: 'star', color: '#ffecb3', size: '15px' },
                { type: 'teddy', emoji: '🧸', size: '30px' },
                { type: 'sparkle', emoji: '✨', size: '25px' },
                { type: 'sparkle', emoji: '✨', size: '20px' },
                { type: 'heart', color: '#ff6b8a', size: '25px' },
                { type: 'star', color: '#ffd54f', size: '20px' },
                { type: 'teddy', emoji: '🧸', size: '25px' }
            ];

            floatingElements.forEach((element, index) => {
                createFloatingElement(element, index);
            });

            // Cursor effect
            document.addEventListener('mousemove', createCursorEffect);

            // Surprise button functionality
            const surpriseButton = document.getElementById('surprise-button');
            const modalOverlay = document.getElementById('modal-overlay');
            const modalClose = document.getElementById('modal-close');
            const clickSound = document.getElementById('click-sound');

            surpriseButton.addEventListener('click', function() {
                clickSound.play();
                modalOverlay.classList.add('active');
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            });

            modalClose.addEventListener('click', function() {
                modalOverlay.classList.remove('active');
            });

            // Music controls
            const musicToggle = document.getElementById('music-toggle');
            const musicIcon = document.getElementById('music-icon');
            const backgroundMusic = document.getElementById('background-music');
            const memory = document.getElementById('memory');
            const memory1 = document.getElementById('memory1');
            const memory2 = document.getElementById('memory2');
            const memory3 = document.getElementById('memory3');
            const memory4 = document.getElementById('memory4');
            const icon = document.getElementById('icon');
            const icon1 = document.getElementById('icon1');
            const icon2 = document.getElementById('icon2');
            const icon3 = document.getElementById('icon3');
            const icon4 = document.getElementById('icon4');
            const music = document.getElementById('music');
            const music2 = document.getElementById('music2');
            const music3 = document.getElementById('music3');
            const music4 = document.getElementById('music4');
            const music5 = document.getElementById('music5');
            let isMusicPlaying = false;
            memory.addEventListener('click', function() {
                if (isMusicPlaying) {
                    music.pause();
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                } else {
                    music.play().catch(e => console.log('Audio play error:', e));
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                }
                isMusicPlaying = !isMusicPlaying;
            });
            memory1.addEventListener('click', function() {
                if (isMusicPlaying) {
                    music2.pause();
                    icon1.classList.remove('fa-pause');
                    icon1.classList.add('fa-play');
                } else {
                    music2.play().catch(e => console.log('Audio play error:', e));
                    icon1.classList.remove('fa-play');
                    icon1.classList.add('fa-pause');
                }
                isMusicPlaying = !isMusicPlaying;
            });
            memory2.addEventListener('click', function() {
                if (isMusicPlaying) {
                    music3.pause();
                    icon2.classList.remove('fa-pause');
                    icon2.classList.add('fa-play');
                } else {
                    music3.play().catch(e => console.log('Audio play error:', e));
                    icon2.classList.remove('fa-play');
                    icon2.classList.add('fa-pause');
                }
                isMusicPlaying = !isMusicPlaying;
            });
            memory3.addEventListener('click', function() {
                if (isMusicPlaying) {
                    music4.pause();
                    icon3.classList.remove('fa-pause');
                    icon3.classList.add('fa-play');
                } else {
                    music4.play().catch(e => console.log('Audio play error:', e));
                    icon3.classList.remove('fa-play');
                    icon3.classList.add('fa-pause');
                }
                isMusicPlaying = !isMusicPlaying;
            });
            memory4.addEventListener('click', function() {
                if (isMusicPlaying) {
                    music5.pause();
                    icon4.classList.remove('fa-pause');
                    icon4.classList.add('fa-play');
                } else {
                    music5.play().catch(e => console.log('Audio play error:', e));
                    icon4.classList.remove('fa-play');
                    icon4.classList.add('fa-pause');
                }
                isMusicPlaying = !isMusicPlaying;
            });
            musicToggle.addEventListener('click', function() {
                if (isMusicPlaying) {
                    backgroundMusic.pause();
                    musicIcon.classList.remove('fa-volume-up');
                    musicIcon.classList.add('fa-volume-mute');
                } else {
                    backgroundMusic.play().catch(e => console.log('Audio play error:', e));
                    musicIcon.classList.remove('fa-volume-mute');
                    musicIcon.classList.add('fa-volume-up');
                }
                isMusicPlaying = !isMusicPlaying;
            });

            // Helper Functions
            function createFloatingElement(element, index) {
                const floatingElement = document.createElement('div');
                floatingElement.classList.add('floating-element');
                
                if (element.emoji) {
                    floatingElement.textContent = element.emoji;
                    floatingElement.style.fontSize = element.size;
                } else if (element.type === 'heart') {
                    floatingElement.innerHTML = '<i class="fas fa-heart"></i>';
                    floatingElement.style.color = element.color;
                    floatingElement.style.fontSize = element.size;
                } else if (element.type === 'star') {
                    floatingElement.innerHTML = '<i class="fas fa-star"></i>';
                    floatingElement.style.color = element.color;
                    floatingElement.style.fontSize = element.size;
                }
                
                // Random positioning
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                floatingElement.style.left = `${randomX}px`;
                floatingElement.style.top = `${randomY}px`;
                
                // Animation duration and delay
                const duration = 5 + Math.random() * 10;
                const delay = Math.random() * 5;
                floatingElement.style.animationDuration = `${duration}s`;
                floatingElement.style.animationDelay = `${delay}s`;
                
                document.body.appendChild(floatingElement);
            }

            function createCursorEffect(e) {
                const cursorEffect = document.createElement('div');
                cursorEffect.classList.add('cursor-effect');
                cursorEffect.style.left = `${e.pageX}px`;
                cursorEffect.style.top = `${e.pageY}px`;
                document.body.appendChild(cursorEffect);
                
                setTimeout(() => {
                    cursorEffect.style.opacity = 1;
                    cursorEffect.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
                    
                    setTimeout(() => {
                        cursorEffect.style.opacity = 0;
                        setTimeout(() => {
                            cursorEffect.remove();
                        }, 500);
                    }, 300);
                }, 10);
            }
});
