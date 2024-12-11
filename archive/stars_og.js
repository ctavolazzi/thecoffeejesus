function createStars() {
    const container = document.querySelector('.stars-container');
    if (!container) {
        console.error('Stars container not found');
        return;
    }
    const containerRect = container.getBoundingClientRect();

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Set size
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Set position
        const x = Math.random() * (containerRect.width - size);
        const y = Math.random() * (containerRect.height - size);
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        
        // Set animation
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        container.appendChild(star);
    }
}

// Ensure the DOM is loaded before running createStars
document.addEventListener('DOMContentLoaded', createStars);
