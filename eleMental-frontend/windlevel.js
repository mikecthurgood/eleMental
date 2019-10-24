class WindLevel extends Phaser.Scene {

    constructor() {
        super({key:'windLevel'});
    }

    preload() {

        // this.load.crossOrigin = 'anonymous';
        this.load.image('background-yellow', 'assets/background yellow.png');
        // this.load.image('face', 'assets/scared-face.png');

        this.load.image('explode', 'assets/muzzleflash3.png');
        this.load.image('smoke', 'assets/smoke-puff.png');
        this.load.spritesheet('nerd', 'assets/nerdspritesheet.png', {frameWidth: 67.3, frameHeight: 91.5 })
        this.load.spritesheet('wind', 'assets/whirlwindspritesheet.png', {frameWidth: 176, frameHeight: 179 })
        this.load.image('bomb', 'assets/bomb.png');



    }

    create() {

        gameState.time = gameState.timeOrigin

        this.background = this.add.image(600,400,'background-yellow');

        gameState.scoreText = this.add.text(100, 750, `Score: ${gameState.score}`, { fontSize: '40px', fill: '#ffffff' })

        gameState.nextLevel = gameState.level.sample()

        
        const whirlWinds = this.physics.add.group()
        const bombs = this.physics.add.group()

        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('wind', { start: 0, end: 1 }),
            frameRate: 15,
            repeat: -1
          });

                
                projectiles.bomb1 = bombs.create(100,100,'bomb').setScale(0.15);
                projectiles.bomb1.body.setAllowGravity(false);
                projectiles.bomb1.setVelocityY(400)
                projectiles.bomb1.body.bounce.y = 1
                projectiles.bomb1.body.collideWorldBounds = true;
                projectiles.bomb1.body.setCircle(170, 120, 185)

                projectiles.bomb2 = bombs.create(400,800,'bomb').setScale(0.15);
                projectiles.bomb2.body.setAllowGravity(false);
                projectiles.bomb2.setVelocityY(400)
                projectiles.bomb2.body.bounce.y = 1
                projectiles.bomb2.body.collideWorldBounds = true;
                projectiles.bomb2.body.setCircle(170, 120, 185)

                projectiles.bomb3 = bombs.create(700,100,'bomb').setScale(0.15);
                projectiles.bomb3.body.setAllowGravity(false);
                projectiles.bomb3.setVelocityY(400)
                projectiles.bomb3.body.bounce.y = 1
                projectiles.bomb3.body.collideWorldBounds = true;
                projectiles.bomb3.body.setCircle(170, 120, 185)

                projectiles.bomb4 = bombs.create(1100,700,'bomb').setScale(0.15);
                projectiles.bomb4.body.setAllowGravity(false);
                projectiles.bomb4.setVelocityY(400)
                projectiles.bomb4.body.bounce.y = 1
                projectiles.bomb4.body.collideWorldBounds = true;
                projectiles.bomb4.body.setCircle(170, 120, 185)


                const velocity1 = Math.random() * 500
                const delay1 = randomLocation(800, 3000)
                projectiles.wind1 = whirlWinds.create(1100, 100,'wind').setScale(gameState.windSize);
                projectiles.wind1.body.setAllowGravity(false);
                projectiles.wind1.setVelocityY(velocity1)
                projectiles.wind1.setVelocityX(velocity1/2)
                projectiles.wind1.body.bounce.x = 1
                projectiles.wind1.body.bounce.y = 1
                projectiles.wind1.body.collideWorldBounds = true;
                projectiles.wind1.body.setCircle(65, 20, 20)
                projectiles.wind1.anims.play('move', true);

                const velocity2 = Math.random() * 500
                const delay2 = randomLocation(800, 3000)
                projectiles.wind2 = whirlWinds.create(100, 800,'wind').setScale(gameState.windSize);
                projectiles.wind2.body.setAllowGravity(false);
                projectiles.wind2.setVelocityY(velocity2)
                projectiles.wind2.setVelocityX(velocity2/2)
                projectiles.wind2.body.bounce.x = 1
                projectiles.wind2.body.bounce.y = 1
                projectiles.wind2.body.collideWorldBounds = true;
                projectiles.wind2.body.setCircle(65, 20, 20)
                projectiles.wind2.anims.play('move', true);

                const velocity3 = Math.random() * 500
                const delay3 = randomLocation(800, 3000)
                projectiles.wind3 = whirlWinds.create(100, 100,'wind').setScale(gameState.windSize);
                projectiles.wind3.body.setAllowGravity(false);
                projectiles.wind3.setVelocityY(velocity2)
                projectiles.wind3.setVelocityX(velocity2/2)
                projectiles.wind3.body.bounce.x = 1
                projectiles.wind3.body.bounce.y = 1
                projectiles.wind3.body.collideWorldBounds = true;
                projectiles.wind3.body.setCircle(65, 20, 20)
                projectiles.wind3.anims.play('move', true);

                function wind1Direction() {
                    if (currentlyPlaying === true) {
                    const velocity = Math.random() * 500
                    if (projectiles.wind1.x > 700) {
                    projectiles.wind1.setVelocityY(- velocity)
                    projectiles.wind1.setVelocityX(- velocity)
                    }
                    else if (projectiles.wind1.x < 200) {
                    projectiles.wind1.setVelocityY(velocity)
                    projectiles.wind1.setVelocityX(velocity)
                    } else {
                        projectiles.wind1.setVelocityY(velocity)
                        projectiles.wind1.setVelocityX(velocity)
                    }
                }
                }

                function wind2Direction() {
                    if (currentlyPlaying === true) {
                    const velocity = Math.random() * 500
                    if (projectiles.wind2.x > 700) {
                    projectiles.wind2.setVelocityY(- velocity)
                    projectiles.wind2.setVelocityX(- velocity)
                    }
                    else if (projectiles.wind2.x < 200) {
                    projectiles.wind2.setVelocityY(velocity)
                    projectiles.wind2.setVelocityX(velocity)
                    } else {
                        projectiles.wind2.setVelocityY(velocity)
                        projectiles.wind2.setVelocityX(velocity)
                    }
                }
                }

                function wind3Direction() {
                    const velocity = Math.random() * 500
                    if (currentlyPlaying === true) {
                    if (projectiles.wind3.x > 700) {
                        projectiles.wind3.setVelocityY(- velocity)
                        projectiles.wind3.setVelocityX(- velocity)
                    }
                    else if (projectiles.wind3.x < 200) {
                        projectiles.wind3.setVelocityY(velocity)
                        projectiles.wind3.setVelocityX(velocity)
                    } else {
                        projectiles.wind3.setVelocityY(velocity)
                        projectiles.wind3.setVelocityX(velocity)
                    }
                }
                }

                function wind3Direction() {
                    if (currentlyPlaying === true) {
                    const velocity = Math.random() * 500
                    if (projectiles.wind3.x > 700) {
                        projectiles.wind3.setVelocityY(- velocity)
                        projectiles.wind3.setVelocityX(- velocity)
                    }
                    else if (projectiles.wind3.x < 200) {
                        projectiles.wind3.setVelocityY(velocity)
                        projectiles.wind3.setVelocityX(velocity)
                    } else {
                        projectiles.wind3.setVelocityY(velocity)
                        projectiles.wind3.setVelocityX(velocity)
                    }
                }
                }

                const wind1Loop = this.time.addEvent({
                    delay: delay1,
                    callback: wind1Direction,
                    callbackScope: this,
                    loop: true,
                });

                const wind2Loop = this.time.addEvent({
                    delay: delay2,
                    callback: wind2Direction,
                    callbackScope: this,
                    loop: true,
                });

                const wind3Loop = this.time.addEvent({
                    delay: delay3,
                    callback: wind3Direction,
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
        gameState.smiley.body.bounce.x = 30
        gameState.smiley.body.bounce.y = 30
        gameState.smiley.body.collideWorldBounds = true;


        function killBounce() {
            if (currentlyPlaying === true) {
            gameState.smiley.setVelocityX(0)
            gameState.smiley.setVelocityY(0)
            }
        }

        const bounceLoop = this.time.addEvent({
            delay: 100,
            callback: killBounce,
            callbackScope: this,
            loop: true,
          });

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
    
        this.physics.add.collider(whirlWinds, gameState.smiley, () => {
        })

        this.physics.add.collider(whirlWinds, whirlWinds, () => {
        })

        this.physics.add.overlap(gameState.smiley, projectiles.bomb1, (bomb) => {
            currentlyPlaying = false
            generate(projectiles.bomb1.x, projectiles.bomb1.y)
            gameState.smiley.destroy();
            projectiles.bomb1.destroy();
            const gameOverTimer = this.time.addEvent({
              delay: 1300,
              callback: gameOver,
              callbackScope: this,
              loop: false,
            });
          })

          this.physics.add.overlap(gameState.smiley, projectiles.bomb2, (bomb) => {
            currentlyPlaying = false
            generate(projectiles.bomb2.x, projectiles.bomb2.y)
            gameState.smiley.destroy();
            projectiles.bomb2.destroy();
            const gameOverTimer = this.time.addEvent({
              delay: 1300,
              callback: gameOver,
              callbackScope: this,
              loop: false,
            });
          })

          this.physics.add.overlap(gameState.smiley, projectiles.bomb3, (bomb) => {
            currentlyPlaying = false
            generate(projectiles.bomb3.x, projectiles.bomb3.y)
            gameState.smiley.destroy();
            projectiles.bomb3.destroy();
            const gameOverTimer = this.time.addEvent({
              delay: 1300,
              callback: gameOver,
              callbackScope: this,
              loop: false,
            });
          })

          this.physics.add.overlap(gameState.smiley, projectiles.bomb4, (bomb) => {
            currentlyPlaying = false
            generate(projectiles.bomb4.x, projectiles.bomb4.y)
            gameState.smiley.destroy();
            projectiles.bomb4.destroy();
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
          gameState.windDelay = gameState.windDelay * 0.8
          gameState.speed = gameState.speed + 25
          gameState.timeOrigin += 1
          gameState.scoreTimer = gameState.scoreTimer * 1.1
          gameState.movementSpeed++
          gameState.speed = gameState.speed + 25
          gameState.windSize += 0.1


          this.scene.start(gameState.nextLevel)
        }

    }
}