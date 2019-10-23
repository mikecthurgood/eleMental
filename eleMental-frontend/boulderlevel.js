class BoulderLevel extends Phaser.Scene {

    constructor() {
        super({key:'boulderLevel'});
    }

    preload() {
        // this.textures.remove('background');
        this.load.image('background-green', 'assets/background green.png');
        // this.load.image('face', 'assets/scared-face.png');
        this.load.image('boulder', 'assets/boulder.png');
        this.load.image('explode', 'assets/muzzleflash3.png');
        this.load.image('smoke', 'assets/smoke-puff.png');
        this.load.spritesheet('nerd', 'assets/nerdspritesheet.png', {frameWidth: 67.3, frameHeight: 91.5 })

    }

    create() {

        gameState.time = gameState.timeOrigin

        gameState.nextLevel = gameState.level.sample()

        this.background = this.add.image(600,400,'background-green');

        gameState.scoreText = this.add.text(100, 750, `1Score: ${gameState.score}`, { fontSize: '40px', fill: '#ffffff' })

        
        const boulders = this.physics.add.group()

        function boulderGen () {
          if (currentlyPlaying === true) {
            const xCoord = randomLocation(50, 1150)
            // const velocity = Math.random() * 500
            const bounce = Math.random()
            projectiles.boulder = boulders.create(xCoord, -150,'boulder');
            projectiles.boulder.setScale(.4)
            projectiles.boulder.body.collideWorldBounds = true;
            projectiles.boulder.body.setCircle(100, 10, 10)
            projectiles.boulder.body.bounce.y = bounce;
          }
          }


          function gameOver() {
              global.add.text(400, 600, 'GAME OVER!', { fontSize: '60px', color: '#ff0000' })
          }

          const boulderGenLoop = this.time.addEvent({
            delay: gameState.boulderDelay,
            callback: boulderGen,
            callbackScope: this,
            loop: true,
          });

       


          const scoreLoop = this.time.addEvent({
            delay: 1000,
            callback: increaseScore,
            callbackScope: this,
            loop: true,
          });
          
          

          function increaseScore() {
            if (currentlyPlaying === true) {
            gameState.score += 10;
            gameState.scoreText.setText(`Score: ${gameState.score}`)
            }
          }

          const timerLoop = this.time.addEvent({
            delay: gameState.scoreTimer,
            callback: decreaseTimer,
            callbackScope: this,
            loop: true,
          });
          
          gameState.timerText = this.add.text(500, 200, `${gameState.time}`, { fontSize: '400px', fill: '#ffffff' })

          function decreaseTimer() {
            if (currentlyPlaying === true) {
            gameState.time -= 1
            gameState.timerText.setText(`${gameState.time}`)
            }
          }

        
        gameState.smiley = this.physics.add.sprite(gameState.positionX,gameState.positionY,'nerd').setScale(.8);
        gameState.smiley.body.setAllowGravity(false)
        gameState.smiley.body.setCircle(35, 2, 2)


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

        gameState.rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);

        gameState.blast = this.add.follower(null, -150, -350, 'smoke');
    
        gameState.nuke = this.tweens.add({
            targets: gameState.blast,
            scaleX: 8,
            scaleY: 8,
            alpha: 0,
            duration: 1000,
            ease: "Bounce.easeIn",
            onComplete: function () { gameState.rt.clear(); gameState.blast.alpha = 0 },
            paused: true
        });
    
        gameState.nuke.setCallback('onUpdate', draw, [], this);
    
        this.physics.add.overlap(boulders, gameState.smiley, () => {
          currentlyPlaying = false
          generate(gameState.smiley.x, gameState.smiley.y)
          gameState.smiley.destroy();
          const gameOverTimer = this.time.addEvent({
            delay: 1300,
            callback: gameOver,
            callbackScope: this,
            loop: false,
          });
        })

        function gameOver() {
          this.scene.start('gameOver')
        }

    }

    update(delta) {

    if (currentlyPlaying === true) {
    if(this.cursors.left.isDown) {
        gameState.smiley.anims.play('left', true);
        if (gameState.smiley.x > 90 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x-=gameState.movementSpeed
        else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x-=gameState.movementSpeed
        else null
    } else if(this.cursors.right.isDown) {
      gameState.smiley.anims.play('right', true);
        if (gameState.smiley.x < 1110 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x+=gameState.movementSpeed
        else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x+=gameState.movementSpeed
        else null
    } else if(this.cursors.up.isDown) {
      gameState.smiley.anims.play('up', true);
        if (gameState.smiley.y > 90) gameState.smiley.y-=gameState.movementSpeed
        else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y-=gameState.movementSpeed
        else null
    } else if(this.cursors.down.isDown) {
      gameState.smiley.anims.play('down', true);
        if (gameState.smiley.y < 710) gameState.smiley.y+=gameState.movementSpeed
        else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y+=gameState.movementSpeed 
        else null
    } else {
      gameState.smiley.anims.play('turn');
    }
  }

        if (gameState.time === 0) {
          gameState.positionX = gameState.smiley.x
          gameState.positionY = gameState.smiley.y
          gameState.boulderDelay = gameState.boulderDelay * 0.8
          gameState.timeOrigin += 1
          gameState.scoreTimer = gameState.scoreTimer * 1.1
          gameState.movementSpeed++
          gameState.speed = gameState.speed + 25

          this.scene.start(gameState.nextLevel)
        }

    }
}