export class Controls {
    constructor(gameState, canvas) {
        this.gameState = gameState;
        this.canvas = canvas;
        
        // Touch and drag state
        this.isDragging = false;
        this.dragStartX = 0;
        this.lastDragTime = 0;
        
        // Base movement speed - now gets modified by speed multiplier
        this.baseSpeed = this.gameState.player.speed * 5;
        
        // Bind methods to preserve 'this' context
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.startDrag = this.startDrag.bind(this);
        this.drag = this.drag.bind(this);
        this.stopDrag = this.stopDrag.bind(this);
    }

    initializeControls() {
        // Keyboard controls
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);

        // Touch controls
        this.canvas.addEventListener('touchstart', this.startDrag);
        this.canvas.addEventListener('touchmove', this.drag);
        this.canvas.addEventListener('touchend', this.stopDrag);
        
        // Mouse controls
        this.canvas.addEventListener('mousedown', this.startDrag);
        this.canvas.addEventListener('mousemove', this.drag);
        this.canvas.addEventListener('mouseup', this.stopDrag);
        this.canvas.addEventListener('mouseleave', this.stopDrag);

        // Mobile control buttons
        this.initializeMobileButtons();
    }

    handleKeyDown(e) {
        switch(e.key) {
            case 'ArrowLeft':
            case 'a':
                this.gameState.player.dx = -this.getCurrentSpeed();
                break;
            case 'ArrowRight':
            case 'd':
                this.gameState.player.dx = this.getCurrentSpeed();
                break;
            case '1':
                const button = document.getElementById('catchAllButton');
                if (!button.disabled) {
                    button.click();
                }
                break;
            case '2':
                const speedBoostButton = document.getElementById('speedBoostButton');
                if (speedBoostButton && !speedBoostButton.disabled) {
                    speedBoostButton.click();
                }
                break;
        }
    }

    handleKeyUp(e) {
        switch(e.key) {
            case 'ArrowLeft':
            case 'a':
                if (this.gameState.player.dx < 0) {
                    this.gameState.player.dx = 0;
                }
                break;
            case 'ArrowRight':
            case 'd':
                if (this.gameState.player.dx > 0) {
                    this.gameState.player.dx = 0;
                }
                break;
        }
    }

    startDrag(e) {
        this.isDragging = true;
        this.dragStartX = e.touches ? e.touches[0].clientX : e.clientX;
    }

    drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastDragTime) / 1000;
        
        if (this.lastDragTime === 0) {
            this.lastDragTime = currentTime;
            this.dragStartX = currentX;
            return;
        }

        const rawDeltaX = currentX - this.dragStartX;
        // Use getCurrentSpeed() for power-up modified speed
        const deltaX = Math.sign(rawDeltaX) * Math.min(Math.abs(rawDeltaX), this.getCurrentSpeed() * deltaTime);
        
        this.gameState.player.x += deltaX;
        this.gameState.player.x = Math.max(0, 
            Math.min(this.gameState.player.x, 
                this.canvas.width - this.gameState.player.width)
        );

        this.dragStartX = currentX;
        this.lastDragTime = currentTime;
    }

    stopDrag() {
        this.isDragging = false;
        this.lastDragTime = 0;
    }

    handleMobileControl(direction) {
        this.gameState.player.dx = direction * this.getCurrentSpeed();
    }

    initializeMobileButtons() {
        const moveLeft = document.getElementById('moveLeft');
        const moveRight = document.getElementById('moveRight');

        if (moveLeft && moveRight) {
            // Left button controls
            moveLeft.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.handleMobileControl(-1);
            });

            moveLeft.addEventListener('touchend', (e) => {
                e.preventDefault();
                if (this.gameState.player.dx < 0) {
                    this.gameState.player.dx = 0;
                }
            });

            // Right button controls
            moveRight.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.handleMobileControl(1);
            });

            moveRight.addEventListener('touchend', (e) => {
                e.preventDefault();
                if (this.gameState.player.dx > 0) {
                    this.gameState.player.dx = 0;
                }
            });
        }
    }

    // Get current speed including power-up multipliers
    getCurrentSpeed() {
        return this.baseSpeed * (this.gameState.speedMultiplier || 1);
    }

    // Cleanup method to remove event listeners
    destroy() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
        
        this.canvas.removeEventListener('touchstart', this.startDrag);
        this.canvas.removeEventListener('touchmove', this.drag);
        this.canvas.removeEventListener('touchend', this.stopDrag);
        
        this.canvas.removeEventListener('mousedown', this.startDrag);
        this.canvas.removeEventListener('mousemove', this.drag);
        this.canvas.removeEventListener('mouseup', this.stopDrag);
        this.canvas.removeEventListener('mouseleave', this.stopDrag);
    }
}
