class ScoreManager {
    constructor() {
        this.scores = this.loadScores();
    }

    loadScores() {
        const saved = localStorage.getItem('coffeeScores');
        return saved ? JSON.parse(saved) : {
            highScore: 0,
            topScores: [],
            stats: {
                maxLevel: 0,
                totalBeansCollected: 0,
                gamesPlayed: 0
            }
        };
    }

    saveScore(score, level, beansCollected) {
        const scores = this.loadScores();
        
        // Update high score if necessary
        if (score > scores.highScore) {
            scores.highScore = score;
        }

        // Update stats
        scores.stats.maxLevel = Math.max(scores.stats.maxLevel, level);
        scores.stats.totalBeansCollected += beansCollected;
        scores.stats.gamesPlayed++;

        // Add to top scores (keep top 5)
        scores.topScores.push({
            score,
            level,
            beans: beansCollected,
            date: new Date().toISOString()
        });
        scores.topScores.sort((a, b) => b.score - a.score);
        scores.topScores = scores.topScores.slice(0, 5);

        localStorage.setItem('coffeeScores', JSON.stringify(scores));
        return scores;
    }
}
