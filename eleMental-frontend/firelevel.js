class FireLevel extends Phaser.Scene {

    constructor() {
        super({key:'fireLevel'});
    }

    preload() {

        // this.load.crossOrigin = 'anonymous';
        this.load.image('background', 'assets/background.png');
        // this.load.image('face', 'assets/scared-face.png');

        this.load.image('fire', 'assets/fireball.png')
        this.load.image('explode', 'assets/muzzleflash3.png');
        this.load.image('smoke', 'assets/smoke-puff.png');
        this.load.spritesheet('nerd', 'assets/nerdspritesheet.png', {frameWidth: 67.3, frameHeight: 91.5 })

    }

    create() {
        projectiles.fireBalls = []

        gameState.time = gameState.timeOrigin

        this.background = this.add.image(600,400,'background');

        gameState.scoreText = this.add.text(100, 750, `Score: ${gameState.score}`, { fontSize: '40px', fill: '#ffffff' })

        gameState.nextLevel = gameState.level.sample()

      
        const fireBolts = this.physics.add.group()


        function fireGen () {
          if (currentlyPlaying === true) {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(-50, yCoord,'fire').setScale(.1);
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(velocity)
            projectiles.fire.setVelocityY(velocity/2)
            projectiles.fire.body.setCircle(300, 125, 125)
            projectiles.fireBalls.push(projectiles.fire)
      }
          }

          function fireGen2 () {
            if (currentlyPlaying === true) {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(-50, yCoord,'fire').setScale(.1);
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(velocity)
            projectiles.fire.setVelocityY(-velocity/2)
            projectiles.fire.body.setCircle(300, 125, 125)
            projectiles.fireBalls.push(projectiles.fire)

      }
          }

          function fireGen3 () {
            if (currentlyPlaying === true) {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(1250, yCoord,'fire').setScale(.1);
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(-velocity)
            projectiles.fire.setVelocityY(-velocity/2)
            projectiles.fire.body.setCircle(300, 125, 125)
            projectiles.fireBalls.push(projectiles.fire)

            }
          }

          function fireGen4 () {
            if (currentlyPlaying === true) {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(1250, yCoord,'fire').setScale(.1);
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(-velocity)
            projectiles.fire.setVelocityY(velocity/2)
            projectiles.fire.body.setCircle(300, 125, 125)
            projectiles.fireBalls.push(projectiles.fire)

            }
          }

          function gameOver() {
              global.add.text(400, 600, 'GAME OVER!', { fontSize: '60px', color: '#ff0000' })
          }

          const fireGenLoop = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: fireGen,
            callbackScope: this,
            loop: true,
          });

          const fireGenLoop2 = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: fireGen2,
            callbackScope: this,
            loop: true,
          });

          const fireGenLoop3 = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: fireGen3,
            callbackScope: this,
            loop: true,
          });

          const fireGenLoop4 = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: fireGen4,
            callbackScope: this,
            loop: true,
          });


          const scoreLoop = this.time.addEvent({
            delay: gameState.scoreTimer,
            callback: increaseScore,
            callbackScope: this,
            loop: true,
          });

          const timerLoop = this.time.addEvent({
            delay: 1000,
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
          function increaseScore() {
            if (currentlyPlaying === true) {
            gameState.score += 10;
            gameState.scoreText.setText(`Score: ${gameState.score}`)
            }
          }
 
        gameState.smiley = this.physics.add.sprite(gameState.positionX,gameState.positionY,'nerd').setScale(.8);
        gameState.smiley.body.setAllowGravity(false);
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
    
        this.physics.add.overlap(fireBolts, gameState.smiley, () => {
          currentlyPlaying = false
          generate(gameState.smiley.x, gameState.smiley.y)
          gameState.smiley.destroy();
          // projectiles.fireBalls.forEach(fireBall => {
          //   generate(fireBall.x, fireBall.y)
          // })
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
          gameState.fireDelay = gameState.fireDelay * 0.8
          gameState.timeOrigin += 1
          gameState.scoreTimer = gameState.scoreTimer * 1.1
          gameState.movementSpeed++
          gameState.speed = gameState.speed + 25


          this.scene.start(gameState.nextLevel)
        }

    }
}