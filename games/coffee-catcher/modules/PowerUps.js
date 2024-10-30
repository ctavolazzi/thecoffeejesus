export class PowerUps {
    constructor() {
        this.catchAll = {
            cooldown: 10000,
            lastUsed: 0,
            isAvailable: function() {
                return Date.now() - this.lastUsed >= this.cooldown;
            }
        };

        this.speedBoost = {
            cooldown: 15000,
            duration: 5000,
            multiplier: 2,
            lastUsed: 0,
            isAvailable: function() {
                return Date.now() - this.lastUsed >= this.cooldown;
            }
        };
    }

    activateCatchAll(gameState, uiManager) {
        if (!this.catchAll.isAvailable()) return;
        
        const button = document.getElementById('catchAllButton');
        button.disabled = true;
        button.classList.add('cooldown');
        
        // Collect all beans
        gameState.beans.forEach(bean => {
            if (!bean.collected) {
                uiManager.showFloatingText(
                    `+${100 * gameState.multiplier.current}`, 
                    bean.x, 
                    bean.y
                );
                gameState.collectBean(bean);
            }
        });
        
        gameState.beans = [];
        this.catchAll.lastUsed = Date.now();
        
        // Reset button after cooldown
        setTimeout(() => {
            button.disabled = false;
            button.classList.remove('cooldown');
        }, this.catchAll.cooldown);
    }

    updatePowerUpStates() {
        const catchAllButton = document.getElementById('catchAllButton');
        if (this.catchAll.isAvailable() && catchAllButton.disabled) {
            catchAllButton.disabled = false;
            catchAllButton.classList.remove('cooldown');
        }
    }

    // Method to check if a specific power-up is available
    isPowerUpAvailable(powerUpName) {
        if (this[powerUpName]) {
            return this[powerUpName].isAvailable();
        }
        return false;
    }

    // Method to get cooldown percentage for UI
    getCooldownPercentage(powerUpName) {
        if (!this[powerUpName]) return 0;
        
        const powerUp = this[powerUpName];
        const elapsed = Date.now() - powerUp.lastUsed;
        const percentage = (elapsed / powerUp.cooldown) * 100;
        return Math.min(percentage, 100);
    }

    activateSpeedBoost(gameState, uiManager) {
        if (!this.speedBoost.isAvailable()) return;

        const button = document.getElementById('speedBoostButton');
        if (button) {
            button.disabled = true;
            button.classList.add('cooldown');
        }

        // Apply speed boost
        gameState.applySpeedBoost(
            this.speedBoost.multiplier, 
            this.speedBoost.duration
        );

        // Show visual feedback
        uiManager.showPowerUpActivation('Speed Boost!');

        this.speedBoost.lastUsed = Date.now();

        // Reset button after cooldown
        setTimeout(() => {
            if (button) {
                button.disabled = false;
                button.classList.remove('cooldown');
            }
        }, this.speedBoost.cooldown);
    }
}
