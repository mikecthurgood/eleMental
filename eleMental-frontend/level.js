class Level extends Phaser.Scene {

    preload() {
        //backgrounds
        this.load.image('background-red', 'assets/background red.png');
        this.load.image('background-yellow', 'assets/background yellow.png');
        this.load.image('background-snow', 'assets/background snow.png');
        this.load.image('background-green', 'assets/background green.png');
        this.load.image('background-yellow', 'assets/background yellow.png');

        //character
        this.load.spritesheet('nerd', 'assets/nerdspritesheet.png', { frameWidth: 67.3, frameHeight: 91.5 })

        //obstacles and porojectiles
        this.load.image('missile', 'assets/missile.png');
        this.load.spritesheet('barrier', 'assets/barrier.png', { frameWidth: 220, frameHeight: 187 });
        this.load.spritesheet('wind', 'assets/whirlwindspritesheet.png', { frameWidth: 176, frameHeight: 179 })
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('boulder', 'assets/boulder.png');
        this.load.image('fire', 'assets/fireball.png')
        this.load.image('snowball-left', 'assets/snowball left.png')
        this.load.image('snowball-right', 'assets/snowball right.png')
        this.load.image('spike-left', 'assets/ice spikes left wall.png')
        this.load.image('spike-right', 'assets/ice spikes right wall.png')
        this.load.image('spike-bottom', 'assets/spike wall up.png')
        this.load.image('spike-top', 'assets/spike wall.png')

        //effects
        this.load.image('explosion', 'assets/muzzleflash3.png');
        this.load.image('smoke', 'assets/smoke-puff.png');
    }

    levelText() {
        gameState.timerText = this.add.text(500, 200, `${gameState.time}`, { fontSize: '400px', fill: '#ffffff' })
        gameState.scoreText = this.add.text(100, 750, 'Score: 0', { fontSize: '40px', fill: '#ffffff' })
    }

    die(deathSprite) {
        currentlyPlaying = false
        new Explosion(gameState.smiley.x, gameState.smiley.y, this)
        gameState.smiley.destroy();
        deathSprite.destroy();
        const gameOverTimer = this.time.addEvent({
            delay: 1300,
            callback: this.gameOver,
            callbackScope: this,
            loop: false,
        });
    }

    loadPlayer() {
        gameState.smiley = this.physics.add.sprite(gameState.positionX, gameState.positionY, 'nerd').setScale(.8);
        gameState.smiley.body.setAllowGravity(false);
        gameState.smiley.body.setSize(30, 40)
    }

    playerControls() {
        this.cursors = this.input.keyboard.createCursorKeys()

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('nerd', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('nerd', { start: 3, end: 5 }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('nerd', { start: 6, end: 8 }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('nerd', { start: 9, end: 11 }),
            frameRate: 15,
            repeat: -1
        });

    }
    playerInput() {
        if (currentlyPlaying === true) {
            gameState.smiley.setVelocity(0)

            if (this.cursors.left.isDown) {
                gameState.smiley.anims.play('left', true);
                if (gameState.smiley.x > 90) gameState.smiley.setVelocityX(-gameState.playerSpeed)

            } else if (this.cursors.right.isDown) {
                gameState.smiley.anims.play('right', true);
                if (gameState.smiley.x < 1110) gameState.smiley.setVelocityX(gameState.playerSpeed)

            } else if (this.cursors.up.isDown) {
                gameState.smiley.anims.play('up', true);
                if (gameState.smiley.y > 90) gameState.smiley.setVelocityY(-gameState.playerSpeed)

            } else if (this.cursors.down.isDown) {
                gameState.smiley.anims.play('down', true);
                if (gameState.smiley.y < 710) gameState.smiley.setVelocityY(gameState.playerSpeed)

            } else {
                gameState.smiley.anims.stop();
            }
        }
    }

    timers() {
        const scoreLoop = this.time.addEvent({
            delay: 1000,
            callback: this.increaseScore,
            callbackScope: this,
            loop: true,
        });

        const timerLoop = this.time.addEvent({
            delay: gameState.scoreTimer,
            callback: this.decreaseTimer,
            callbackScope: this,
            loop: true,
        });
    }

    increaseScore(amount = 10) {
        if (currentlyPlaying === true) {
            gameState.score += amount;
            gameState.scoreText.setText(`Score: ${gameState.score}`)
        }
    }

    decreaseTimer() {
        if (currentlyPlaying === true) {
            gameState.time -= 1
            gameState.timerText.setText(`${gameState.time}`)
        }
    }

    gameOver() {
        this.scene.start('gameOver')
    }
}