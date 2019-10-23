const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 400},
            enableBody: true,
            // debug: true
        }
    },
    scene: [Menu, GetReady, FireLevel, BoulderLevel, MissileLevel, IceLevel, GameOver, LeaderBoard, NewHiscore]
};
const game = new Phaser.Game(config);2
const gameState = {}
const projectiles = {}
gameState.score = 0
gameState.time = 0
gameState.scoreTimer = 1000
gameState.timeOrigin = 7
gameState.fireDelay = 500
gameState.boulderDelay = 700
gameState.positionX = 600
gameState.positionY = 400
let currentlyPlaying = true

if (!gameState.credits) {
    gameState.credits = 0
}


const ROTATION_SPEED = 2 * Math.PI; // 0.5 arc/s, 2 s/arc
const ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
const TOLERANCE = 0.02 * ROTATION_SPEED;

let velocityFromRotation = Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;
const sin = Math.sin;
const cos = Math.cos;
const atan2 = Math.atan2;

function smileyMove (smiley) {  
    let angleToPointer = Phaser.Math.Angle.BetweenPoints(projectiles.missile, smiley);
    let angleDelta = Phaser.Math.Angle.Wrap(angleToPointer - projectiles.missile.rotation);
      
    if (Phaser.Math.Within(angleDelta, 0, TOLERANCE)) {
        projectiles.missile.rotation = angleToPointer;
        projectiles.missile.setAngularVelocity(0);
    } else {
        projectiles.missile.setAngularVelocity(Math.sign(angleDelta) * ROTATION_SPEED_DEGREES);
    }
  }

  Array.prototype.sample = function() {
    return this[~~(Math.random() * this.length)];
  }

gameState.level = ["missileLevel", "fireLevel", "boulderLevel", "iceLevel"]

function generate(x, y) {
    gameState.blast.x = x;
    gameState.blast.y = y;
    gameState.blast.setScale(0.5);
    gameState.blast.alpha = 1;

    gameState.nuke.play();

    const points = [200, 500, 600, 500, 625, 475, 200, 500, 400, 500, 400, 250];

    const curve = new Phaser.Curves.Spline(points);

    gameState.blast.setPath(curve);
    // blast.start(200);
}


    function randomLocation(min, max) {
        return Math.random() * (max - min) + min;
    }

    function draw() {

    gameState.rt.save;

    const crot = Math.cos(gameState.blast.rotation + Math.random() * 2);
    const srot = Math.sin(gameState.blast.rotation + Math.random() * 2);

    const rand = Math.random() * 2;

    const sx = gameState.blast.scaleX + rand;
    const sy = gameState.blast.scaleY + rand;

    if (Math.random() < 0.8) {
        gameState.blast.setTexture('explode');
    } else {
        gameState.blast.setTexture('smoke');
    }

    gameState.rt.currentMatrix = [crot * sx, srot, -srot, crot * sy, gameState.blast.x, gameState.blast.y];
    gameState.rt.setAlpha(gameState.blast.alpha);
    gameState.rt.draw(gameState.blast.texture, gameState.blast.frame, -gameState.blast.width / 2, -gameState.blast.height / 2);
    gameState.rt.restore;

}

let hiscores = [
    {id: 1, name: 'cwk', score: 1340},
    {id: 2, name: 'MIK', score: 640},
    {id: 3, name: 'rod', score: 490}, 
    {id: 4, name: 'agm', score: 420}, 
    {id: 5, name: 'cgk', score: 280}, 
    {id: 6, name: 'jgt', score: 2}, 
    {id: 7, name: '---', score: 0}, 
    {id: 8, name: '---', score: 0}, 
    {id: 9, name: '---', score: 0}, 
    {id: 10, name: '---', score: 0}
]
