class Sprites extends Level {

    generateWind(x, y, group) {
        projectiles.wind1 = group.create(x, y, 'wind').setScale(gameState.windSize);
        projectiles.wind1.body.setAllowGravity(false);
        projectiles.wind1.setVelocityY(Math.random() * 600)
        projectiles.wind1.setVelocityX(Math.random() * -600)
        projectiles.wind1.body.bounce.x = 1
        projectiles.wind1.body.bounce.y = 1
        projectiles.wind1.body.collideWorldBounds = true;
        projectiles.wind1.body.setCircle(65, 20, 20)
        projectiles.wind1.anims.play('move', true);
        projectiles.wind1.setImmovable()
    }

    generateBomb(x, y, group) {
        projectiles.bomb1 = group.create(x, y, 'bomb').setScale(0.15);
        projectiles.bomb1.body.setAllowGravity(false);
        projectiles.bomb1.setVelocityY(500)
        projectiles.bomb1.body.bounce.y = 1
        projectiles.bomb1.body.collideWorldBounds = true;
        projectiles.bomb1.body.setCircle(170, 120, 185)
    }

    fireGen(x, y, xVelocity, yVelocity, group) {
        if (currentlyPlaying === true) {
            projectiles.fire = group.create(x, y, 'fire').setScale(.1);
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(xVelocity)
            projectiles.fire.setVelocityY(yVelocity)
            projectiles.fire.body.setCircle(300, 125, 125)
        }
    }

    fireGenTimer(callback) {
        const fireGenLoop = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: callback,
            callbackScope: this,
            loop: true,
        })
    }
}