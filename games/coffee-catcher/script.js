// Game state management
const gameState = {
    status: 'playing',  // playing, paused, levelUp, gameOver
    player: {
        x: 0,
        y: 0,
        width: 50,
        height: 10,
        speed: 8,
        dx: 0
    },
    level: {
        current: 1,
        beansForNext: GAME_CONFIG.levels[1].beansNeeded,
        beanSpeed: GAME_CONFIG.levels[1].beanSpeed
    },
    stats: {
        remainingTime: GAME_CONFIG.initial.timeLimit,
        score: 0,
        misses: 0,
        beansCollected: 0
    },
    beans: [],
    lastTimestamp: 0,
    multiplier: {
        current: 1,
        lastCatchTime: 0,
        resetTimeout: null
    }
};

// Power-up management
const powerUps = {
    catchAll: {
        cooldown: 10000, // 10 seconds
        lastUsed: 0,
        isAvailable: function() {
            return Date.now() - this.lastUsed >= this.cooldown;
        }
    }
};

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Touch and drag controls
let isDragging = false;
let dragStartX = 0;
let touchActive = false;
let touchDirection = 0;

// Initialize game
function initGame() {
    // Initialize status manager
    window.statusManager = new StatusManager();
    
    // Set initial player position
    gameState.player.x = (canvas.width - gameState.player.width) / 2;
    gameState.player.y = canvas.height - gameState.player.height - 10;
    
    // Reset game state
    gameState.stats.remainingTime = GAME_CONFIG.initial.timeLimit;
    gameState.stats.score = 0;
    gameState.stats.misses = 0;
    gameState.stats.beansCollected = 0;
    gameState.beans = [];
    gameState.level.current = 1;
    
    // Start game loop
    requestAnimationFrame(gameLoop);
    
    // Start timer
    startTimer();
}

// Game loop
function gameLoop(timestamp) {
    if (!gameState.lastTimestamp) gameState.lastTimestamp = timestamp;
    const deltaTime = (timestamp - gameState.lastTimestamp) / 1000;
    gameState.lastTimestamp = timestamp;

    updateGame(deltaTime);
    drawGame();
    updatePowerUpStates();

    if (gameState.status === 'playing') {
        requestAnimationFrame(gameLoop);
    }
}

// Update game state
function updateGame(deltaTime) {
    // Update player position
    if (gameState.player.dx !== 0) {
        gameState.player.x += gameState.player.dx * deltaTime;
        gameState.player.x = Math.max(0, Math.min(gameState.player.x, canvas.width - gameState.player.width));
    }

    // Update beans
    updateBeans(deltaTime);

    // Check for level completion
    if (gameState.stats.beansCollected >= gameState.level.beansForNext) {
        levelUp();
    }
}

// Update beans positions and collisions
function updateBeans(deltaTime) {
    // Spawn new beans
    if (Math.random() < 0.02) {
        spawnBean();
    }

    // Update existing beans
    gameState.beans = gameState.beans.filter(bean => {
        if (bean.collected) return false;

        bean.y += gameState.level.beanSpeed * deltaTime * 60;

        // Check for collection
        if (!bean.collected && 
            bean.y + 10 >= gameState.player.y &&
            bean.x >= gameState.player.x &&
            bean.x <= gameState.player.x + gameState.player.width) {
            collectBean(bean);
            return false;
        }

        // Check for miss
        if (bean.y > canvas.height) {
            gameState.stats.misses++;
            updateStats();
            return false;
        }

        return true;
    });
}

// Draw game state
function drawGame() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(gameState.player.x, gameState.player.y, gameState.player.width, gameState.player.height);

    // Draw beans
    ctx.fillStyle = '#6F4E37';
    gameState.beans.forEach(bean => {
        if (!bean.collected) {
            ctx.beginPath();
            ctx.arc(bean.x, bean.y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

// Spawn new bean
function spawnBean() {
    gameState.beans.push({
        x: Math.random() * (canvas.width - 10) + 5,
        y: -10,
        collected: false
    });
}

// Collect bean
function collectBean(bean) {
    bean.collected = true;
    gameState.stats.beansCollected++;
    gameState.stats.score += 100 * gameState.multiplier.current;
    updateStats();
    
    // Show floating score text
    showFloatingText(`+${100 * gameState.multiplier.current}`, bean.x, bean.y);
}

// Level up
function levelUp() {
    gameState.level.current++;
    gameState.level.beansForNext = GAME_CONFIG.levels[gameState.level.current]?.beansNeeded || Infinity;
    gameState.level.beanSpeed = GAME_CONFIG.levels[gameState.level.current]?.beanSpeed || gameState.level.beanSpeed;
    gameState.stats.remainingTime += 10; // Bonus time
    updateStats();
}

// Timer management
function startTimer() {
    const timerInterval = setInterval(() => {
        if (gameState.status === 'playing') {
            gameState.stats.remainingTime--;
            updateStats();

            if (gameState.stats.remainingTime <= 0) {
                clearInterval(timerInterval);
                gameOver();
            }
        }
    }, 1000);
}

// Game over
function gameOver() {
    gameState.status = 'gameOver';
    if (window.statusManager) {
        clearInterval(window.statusManager.quoteInterval);
    }
    // Handle game over logic...
}

// Update UI stats
function updateStats() {
    document.getElementById('level').textContent = gameState.level.current;
    document.getElementById('time').textContent = gameState.stats.remainingTime;
    document.getElementById('misses').textContent = gameState.stats.misses;
    document.getElementById('beans').textContent = `${gameState.stats.beansCollected}/${gameState.level.beansForNext}`;
    document.getElementById('score').textContent = gameState.stats.score;
}

// Power-up activation
function activateCatchAllPowerUp() {
    if (!powerUps.catchAll.isAvailable()) return;
    
    const button = document.getElementById('catchAllButton');
    button.disabled = true;
    button.classList.add('cooldown');
    
    // Collect all beans
    gameState.beans.forEach(bean => {
        if (!bean.collected) {
            showFloatingText(`+${100 * gameState.multiplier.current}`, bean.x, bean.y);
            collectBean(bean);
        }
    });
    
    gameState.beans = [];
    powerUps.catchAll.lastUsed = Date.now();
    
    // Reset button after cooldown
    setTimeout(() => {
        button.disabled = false;
        button.classList.remove('cooldown');
    }, powerUps.catchAll.cooldown);
}

// Update power-up states
function updatePowerUpStates() {
    const catchAllButton = document.getElementById('catchAllButton');
    if (powerUps.catchAll.isAvailable() && catchAllButton.disabled) {
        catchAllButton.disabled = false;
        catchAllButton.classList.remove('cooldown');
    }
}

// Show floating score text
function showFloatingText(text, x, y) {
    const floatingText = document.createElement('div');
    floatingText.className = 'floating-text';
    floatingText.textContent = text;
    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;
    floatingText.style.color = '#FFD700'; // Add this line to force the color
    canvas.parentElement.appendChild(floatingText);
    
    setTimeout(() => floatingText.remove(), 1000);
}

// Touch and drag controls
function handleMobileControl(direction) {
    gameState.player.dx = direction * gameState.player.speed;
}

function startDrag(e) {
    isDragging = true;
    dragStartX = e.touches ? e.touches[0].clientX : e.clientX;
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = currentX - dragStartX;
    dragStartX = currentX;

    gameState.player.x += deltaX;
    gameState.player.x = Math.max(0, Math.min(gameState.player.x, canvas.width - gameState.player.width));
}

function stopDrag() {
    isDragging = false;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a') gameState.player.dx = -gameState.player.speed;
        if (e.key === 'ArrowRight' || e.key === 'd') gameState.player.dx = gameState.player.speed;
        
        // Number key support for power-ups
        if (e.key === '1') {
            const button = document.getElementById('catchAllButton');
            if (!button.disabled) {
                activateCatchAllPowerUp();
            }
        }
    });

    document.addEventListener('keyup', (e) => {
        if ((e.key === 'ArrowLeft' || e.key === 'a') && gameState.player.dx < 0) gameState.player.dx = 0;
        if ((e.key === 'ArrowRight' || e.key === 'd') && gameState.player.dx > 0) gameState.player.dx = 0;
    });

    // Touch controls
    canvas.addEventListener('touchstart', startDrag);
    canvas.addEventListener('touchmove', drag);
    canvas.addEventListener('touchend', stopDrag);
    
    // Mouse controls
    canvas.addEventListener('mousedown', startDrag);
    canvas.addEventListener('mousemove', drag);
    canvas.addEventListener('mouseup', stopDrag);
    canvas.addEventListener('mouseleave', stopDrag);

    // Mobile control buttons
    document.getElementById('moveLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleMobileControl(-1);
    });

    document.getElementById('moveRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleMobileControl(1);
    });

    document.getElementById('moveLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        if (gameState.player.dx < 0) gameState.player.dx = 0;
    });

    document.getElementById('moveRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        if (gameState.player.dx > 0) gameState.player.dx = 0;
    });

    // Power-up button
    document.getElementById('catchAllButton').addEventListener('click', activateCatchAllPowerUp);
    
    // Initialize game
    initGame();
});
