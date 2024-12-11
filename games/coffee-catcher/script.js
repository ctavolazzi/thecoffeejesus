// Import modules (add at top)
import { GameState } from './modules/GameState.js';
import { PowerUps } from './modules/PowerUps.js';
import { CanvasManager } from './modules/CanvasManager.js';
import { Controls } from './modules/Controls.js';
import { UIManager } from './modules/UIManager.js';
import { GameLoop } from './modules/GameLoop.js';

// Initialize core game components
const gameState = new GameState(GAME_CONFIG);
const powerUps = new PowerUps();
const canvasManager = new CanvasManager('gameCanvas');
const controls = new Controls(gameState, canvasManager.canvas);
const uiManager = new UIManager();
const gameLoop = new GameLoop(gameState, canvasManager, powerUps, uiManager);

// Initialize game
function initGame() {
    window.statusManager = new StatusManager();
    gameState.init(canvasManager.canvas);
    gameLoop.start();
    uiManager.startTimer(gameState);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    controls.initializeControls();
    uiManager.initializePowerUpButtons(powerUps);
    initGame();
});
