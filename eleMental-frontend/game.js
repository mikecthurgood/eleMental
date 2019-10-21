const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 400},
            enableBody: true,
            debug: true
        }
    },
    scene: [Menu, FireLevel, BoulderLevel]
};

const game = new Phaser.Game(config);2
const gameState = {}
const projectiles = {}

gameState.score = 0
let currentlyPlaying = true
// let fireGroup