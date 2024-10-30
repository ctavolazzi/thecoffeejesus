export class CanvasManager {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        // Set up canvas size
        this.setupCanvas();
        
        // Bind resize handler
        window.addEventListener('resize', () => this.setupCanvas());
    }

    setupCanvas() {
        // Set display size (css pixels)
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        
        // Set actual size in memory (scaled for retina)
        const scale = window.devicePixelRatio;
        this.canvas.width = width * scale;
        this.canvas.height = height * scale;
        
        // Normalize coordinate system to use css pixels
        this.ctx.scale(scale, scale);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPlayer(player) {
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(
            player.x, 
            player.y, 
            player.width, 
            player.height
        );
    }

    drawBean(bean) {
        if (bean.collected) return;
        
        this.ctx.fillStyle = '#6F4E37';
        this.ctx.beginPath();
        this.ctx.arc(bean.x, bean.y, 5, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawBeans(beans) {
        this.ctx.fillStyle = '#6F4E37';
        beans.forEach(bean => this.drawBean(bean));
    }

    // Optional: Add visual effects
    drawParticles(particles) {
        particles.forEach(particle => {
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.alpha;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
        this.ctx.globalAlpha = 1;
    }

    // Main draw method
    drawGame(gameState) {
        this.clear();

        // Draw game elements
        this.drawPlayer(gameState.player);
        this.drawBeans(gameState.beans);

        // Optional: Draw any active effects
        if (gameState.particles) {
            this.drawParticles(gameState.particles);
        }
    }

    // Utility methods
    getWidth() {
        return this.canvas.clientWidth;
    }

    getHeight() {
        return this.canvas.clientHeight;
    }

    // Method to convert mouse/touch position to canvas coordinates
    getCanvasPosition(clientX, clientY) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }
}
