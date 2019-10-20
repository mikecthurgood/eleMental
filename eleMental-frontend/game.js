const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 400},
            enableBody: true
        }
    },
    scene: [Menu, FireLevel, BoulderLevel]
};

const game = new Phaser.Game(config);
const gameState = {}
const projectiles = {}

gameState.score = 0
// let fireGroup