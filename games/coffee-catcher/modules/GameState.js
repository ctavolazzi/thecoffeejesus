export class GameState {
    constructor(config) {
        this.status = 'playing';  // playing, paused, levelUp, gameOver
        this.player = {
            x: 0,
            y: 0,
            width: 50,
            height: 10,
            speed: 8,
            dx: 0
        };
        this.level = {
            current: 1,
            beansForNext: config.levels[1].beansNeeded,
            beanSpeed: config.levels[1].beanSpeed
        };
        this.stats = {
            remainingTime: config.initial.timeLimit,
            score: 0,
            misses: 0,
            beansCollected: 0
        };
        this.beans = [];
        this.lastTimestamp = 0;
        this.multiplier = {
            current: 1,
            lastCatchTime: 0,
            resetTimeout: null
        };
        this.config = config;
        
        this.speedMultiplier = 1;
        this.activeEffects = {
            speed: null,  // Will store timeout ID
            // Add other effects here
        };
    }

    init(canvas) {
        // Set initial player position
        this.player.x = (canvas.width - this.player.width) / 2;
        this.player.y = canvas.height - this.player.height - 10;
        
        // Reset game state
        this.stats.remainingTime = this.config.initial.timeLimit;
        this.stats.score = 0;
        this.stats.misses = 0;
        this.stats.beansCollected = 0;
        this.beans = [];
        this.level.current = 1;
        this.level.beansForNext = this.config.levels[1].beansNeeded;
        this.level.beanSpeed = this.config.levels[1].beanSpeed;
        this.status = 'playing';
    }

    spawnBean(canvasWidth) {
        this.beans.push({
            x: Math.random() * (canvasWidth - 10) + 5,
            y: -10,
            collected: false
        });
    }

    collectBean(bean) {
        bean.collected = true;
        this.stats.beansCollected++;
        this.stats.score += 100 * this.multiplier.current;
        return 100 * this.multiplier.current; // Return points for UI feedback
    }

    levelUp() {
        this.level.current++;
        const nextLevel = this.config.levels[this.level.current];
        
        this.level.beansForNext = nextLevel?.beansNeeded || Infinity;
        this.level.beanSpeed = nextLevel?.beanSpeed || this.level.beanSpeed;
        this.stats.remainingTime += 10; // Bonus time
        
        return true;
    }

    updateBeans(deltaTime, canvasHeight, uiManager) {
        // Spawn new beans
        if (Math.random() < 0.02) {
            this.spawnBean(canvasHeight);
        }

        // Update existing beans
        this.beans = this.beans.filter(bean => {
            if (bean.collected) return false;

            bean.y += this.level.beanSpeed * deltaTime * 60;

            // Check for collection
            if (!bean.collected && 
                bean.y + 10 >= this.player.y &&
                bean.x >= this.player.x &&
                bean.x <= this.player.x + this.player.width) {
                const points = this.collectBean(bean);
                uiManager.showFloatingText(`+${points}`, bean.x, bean.y);
                return false;
            }

            // Check for miss
            if (bean.y > canvasHeight) {
                this.stats.misses++;
                return false;
            }

            return true;
        });
    }

    updatePlayerPosition(deltaTime, canvasWidth) {
        if (this.player.dx !== 0) {
            // Apply movement based on deltaTime for consistent speed
            const movement = this.player.dx * deltaTime;
            this.player.x += movement;
            this.player.x = Math.max(0, Math.min(this.player.x, canvasWidth - this.player.width));
        }
    }

    decrementTime() {
        this.stats.remainingTime--;
        return this.stats.remainingTime <= 0;
    }

    gameOver() {
        this.status = 'gameOver';
        return true;
    }

    applySpeedBoost(multiplier, duration) {
        // Clear any existing speed boost
        if (this.activeEffects.speed) {
            clearTimeout(this.activeEffects.speed);
        }

        // Apply new speed boost
        this.speedMultiplier = multiplier;

        // Set timeout to reset speed
        this.activeEffects.speed = setTimeout(() => {
            this.speedMultiplier = 1;
            this.activeEffects.speed = null;
        }, duration);
    }
}
