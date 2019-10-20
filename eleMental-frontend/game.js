const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 0},
            collide: true
        }
    },
    scene: [Menu, FireLevel]
};

const game = new Phaser.Game(config);
const gameState = {}
const projectiles = {}