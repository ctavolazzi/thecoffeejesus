class StatusManager {
    constructor() {
        this.statusArea = document.getElementById('statusEffects');
        this.quoteInterval = null;
        this.initialize();
    }

    initialize() {
        this.statusArea.innerHTML = '';
        this.showEffect('welcome', 3000);
        
        setTimeout(() => {
            this.startQuoteRotation();
        }, 3000);
    }

    showEffect(type, duration, message = '') {
        // Remove old effects of the same type
        const existingEffects = this.statusArea.querySelectorAll(`.status-effect[data-type="${type}"]`);
        existingEffects.forEach(effect => effect.remove());

        const effect = document.createElement('div');
        effect.className = 'status-effect';
        effect.dataset.type = type;
        
        switch(type) {
            case 'welcome':
                effect.textContent = 'Good luck!';
                break;
            case 'levelUp':
                effect.textContent = `Level ${gameState.level.current}!`;
                break;
            case 'timeBonus':
                effect.textContent = '+10 seconds!';
                break;
            case 'quote':
                effect.textContent = message;
                break;
            default:
                effect.textContent = message;
        }
        
        this.statusArea.appendChild(effect);
        effect.offsetHeight; // Force reflow
        effect.classList.add('active');
        
        if (type !== 'quote') {
            setTimeout(() => {
                effect.classList.remove('active');
                setTimeout(() => effect.remove(), 300);
            }, duration);
        }
    }

    startQuoteRotation() {
        this.updateQuote();
        this.quoteInterval = setInterval(() => this.updateQuote(), 5000); // Changed to 5 seconds
    }

    updateQuote() {
        const randomQuote = COFFEE_QUOTES[Math.floor(Math.random() * COFFEE_QUOTES.length)];
        this.showEffect('quote', 4700, randomQuote); // Slightly shorter than the interval
    }

    reset() {
        this.statusArea.innerHTML = '';
        clearInterval(this.quoteInterval);
        this.startQuoteRotation();
    }

    levelUp() {
        this.showEffect('levelUp', 2000);
        setTimeout(() => {
            this.showEffect('timeBonus', 2000);
        }, 1000);
    }
}
