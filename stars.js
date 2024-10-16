function createStars() {
    const animatedBg = document.querySelector('.animated-bg');
    const starCount = 100; // Adjust this number for more or fewer stars

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const size = Math.random() * 2 + 1; // Random size between 1px and 3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s
        star.style.animationDelay = `${Math.random() * 5}s`; // Random delay up to 5s
        animatedBg.appendChild(star);
    }
}