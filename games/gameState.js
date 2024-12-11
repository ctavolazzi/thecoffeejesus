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
        remainingTime: GAME_CONFIG.initial.time,
        beanCount: GAME_CONFIG.initial.beanCount,
        score: 0,
        beansCollected: 0
    },
    beans: [],
    lastTimestamp: 0,
    combo: {
        lastCatchTime: 0,
        multiplier: 1
    }
};

