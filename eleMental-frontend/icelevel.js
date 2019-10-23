class IceLevel extends Phaser.Scene {

    constructor() {
        super({key:'iceLevel'});
    }

    preload() {

        // this.load.crossOrigin = 'anonymous';
        this.load.image('background-snow', 'assets/background snow.png');
        // this.load.image('face', 'assets/scared-face.png');
        this.load.image('spike-left', 'assets/ice spikes left wall.png')
        this.load.image('spike-right', 'assets/ice spikes right wall.png')
        this.load.image('spike-bottom', 'assets/spike wall up.png')
        this.load.image('spike-top', 'assets/spike wall.png')

        this.load.image('snowball-left', 'assets/snowball left.png')
        this.load.image('snowball-right', 'assets/snowball right.png')
        this.load.image('explode', 'assets/muzzleflash3.png');
        this.load.image('smoke', 'assets/smoke-puff.png');
        this.load.spritesheet('nerd', 'assets/nerdspritesheet.png', {frameWidth: 67.3, frameHeight: 91.5 })

    }

    create() {

        const snowBalls = this.physics.add.group()
        const iceSpikes = this.physics.add.group()

        gameState.time = gameState.timeOrigin

        this.background = this.add.image(600,400,'background-snow');
        gameState.iceWallBottom = iceSpikes.create(600, 850, 'spike-bottom').body.setAllowGravity(false)
        gameState.iceWallLeft = iceSpikes.create(-50, 400, 'spike-left').body.setAllowGravity(false)
        gameState.iceWallRight = iceSpikes.create(1250, 400, 'spike-right').body.setAllowGravity(false)
        gameState.iceWallTop = iceSpikes.create(600, -50, 'spike-top').body.setAllowGravity(false)

        
        // gameState.iceSpikes.body.setAllowGravity5(false)
       
        gameState.scoreText = this.add.text(100, 750, `Score: ${gameState.score}`, { fontSize: '40px', fill: '#ffffff' })

        gameState.nextLevel = gameState.level.sample()

        // gameState.smiley = this.physics.add.sprite(gameState.positionX,gameState.positionY,'nerd').setScale(.8);
        // gameState.smiley.body.setAllowGravity(false);
        // gameState.smiley.body.setCircle(35, 2, 2)

      


        function snowBallsGen () {
          if (currentlyPlaying === true) {
           const yCoord = randomLocation(100, 1100)
            const velocity = Math.random() * 500
            projectiles.snowBalls = snowBalls.create(-50, yCoord,'snowball-right').setScale(.4);
            projectiles.snowBalls.body.setAllowGravity(false);
            projectiles.snowBalls.setVelocityX(velocity)
            projectiles.snowBalls.body.setSize(250, 30)
            projectiles.snowBalls.body.setOffset(75, 50)
      }
          }

          function snowBallsGen2 () {
            if (currentlyPlaying === true) {
            const yCoord = randomLocation(100, 1100)
            const velocity = Math.random() * 500
            projectiles.snowBalls = snowBalls.create(-50, yCoord,'snowball-right').setScale(.4);
            projectiles.snowBalls.body.setAllowGravity(false);
            projectiles.snowBalls.setVelocityX(velocity)
            projectiles.snowBalls.body.setSize(250, 30)
            projectiles.snowBalls.body.setOffset(10, 40)
      }
          }

          function snowBallsGen3 () {
            if (currentlyPlaying === true) {
           const yCoord = randomLocation(100, 1100)
            const velocity = Math.random() * 500
            projectiles.snowBalls = snowBalls.create(1250, yCoord,'snowball-left').setScale(.4);
            projectiles.snowBalls.body.setAllowGravity(false);
            projectiles.snowBalls.setVelocityX(-velocity)
            projectiles.snowBalls.body.setSize(250, 30)
            projectiles.snowBalls.body.setOffset(10, 40)
            

            }
          }

          function snowBallsGen4 () {
            if (currentlyPlaying === true) {
           const yCoord = randomLocation(100, 1100)
            const velocity = Math.random() * 500
            projectiles.snowBalls = snowBalls.create(1250, yCoord,'snowball-left').setScale(.4);
            projectiles.snowBalls.body.setAllowGravity(false);
            projectiles.snowBalls.setVelocityX(-velocity)
            projectiles.snowBalls.body.setSize(250, 30)
            projectiles.snowBalls.body.setOffset(10, 40)

            }
          }

          function gameOver() {
              global.add.text(400, 600, 'GAME OVER!', { fontSize: '60px', color: '#ff0000' })
          }

          const snowBallsLoop = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: snowBallsGen,
            callbackScope: this,
            loop: true,
          });

          const snowBallsLoop2 = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: snowBallsGen2,
            callbackScope: this,
            loop: true,
          });

          const snowBallsLoop3 = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: snowBallsGen3,
            callbackScope: this,
            loop: true,
          });

          const snowBallsLoop4 = this.time.addEvent({
            delay: gameState.fireDelay,
            callback: snowBallsGen4,
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
        gameState.smiley.body.setSize(30, 40)

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
    
        this.physics.add.overlap(snowBalls, gameState.smiley, () => {
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

        this.physics.add.overlap(iceSpikes, gameState.smiley, () => {
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
            if (gameState.smiley.x > 90) gameState.smiley.x-=gameState.movementSpeed
     
        } else if(this.cursors.right.isDown) {
          gameState.smiley.anims.play('right', true);
            if (gameState.smiley.x < 1110) gameState.smiley.x+=gameState.movementSpeed
      
        } else if(this.cursors.up.isDown) {
          gameState.smiley.anims.play('up', true);
            if (gameState.smiley.y > 90) gameState.smiley.y-=gameState.movementSpeed
      
        } else if(this.cursors.down.isDown) {
          gameState.smiley.anims.play('down', true);
            if (gameState.smiley.y < 710) gameState.smiley.y+=gameState.movementSpeed
    
        } else {
          gameState.smiley.anims.play('turn');
        }
      }
        if (gameState.time === 0) {
          gameState.positionX = gameState.smiley.x
          gameState.positionY = gameState.smiley.y
          gameState.fireDelay = gameState.fireDelay * 0.8
          gameState.speed = gameState.speed + 25
          gameState.timeOrigin += 1
          gameState.scoreTimer = gameState.scoreTimer * 1.1
          gameState.movementSpeed++
          gameState.speed = gameState.speed + 25


          this.scene.start(gameState.nextLevel)
        }

        function moveWalls() {
          if (currentlyPlaying === true) {
            if (gameState.iceWallBottom.y > 675) { 
            gameState.iceWallBottom.y -= 1
            }
            if (gameState.iceWallTop.y < -25) { 
              gameState.iceWallTop.y += 1
            }
            if (gameState.iceWallLeft.x < -25) { 
              gameState.iceWallLeft.x += 1
              }5
            if (gameState.iceWallRight.x > 1075) { 
              gameState.iceWallRight.x -= 1
              }
          }
        }

        const wallMover = this.time.addEvent({
          delay: 1,
          callback: moveWalls(),
          callbackScope: this,
          loop: true,
        });


    }
}