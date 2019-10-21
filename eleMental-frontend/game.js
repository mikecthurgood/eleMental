const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y : 400},
            enableBody: true,
            // debug: true
        }
    },
    scene: [Menu, FireLevel, BoulderLevel, MissileLevel]
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
let currentlyPlaying = true
gameState.speed = 250;
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