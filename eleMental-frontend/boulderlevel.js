class BoulderLevel extends Phaser.Scene {

    constructor() {
        super({key:'boulderLevel'});
    }

    preload() {
        this.load.image('background', 'assets/background green.png');
        this.load.image('face', 'assets/scared-face.png');
        this.load.image('boulder', 'assets/boulder.png')

    }

    create() {


        this.background = this.add.image(600,400,'background');

        gameState.scoreText = this.add.text(100, 750, 'Score: 0', { fontSize: '40px', fill: '#ffffff' })

        
        const boulders = this.physics.add.group()

        function randomLocation(min, max) {
            return Math.random() * (max - min) + min;
        }

        function boulderGen () {
            const xCoord = randomLocation(100, 1100)
            const velocity = Math.random() * 500
            const bounce = Math.random()
            projectiles.boulder = boulders.create(xCoord, 0,'boulder');
            projectiles.boulder.setScale(.4)
            projectiles.boulder.body.collideWorldBounds = true;
            projectiles.boulder.body.setCircle(100, 10, 10)
            projectiles.boulder.body.bounce.y = bounce;
          }

        //   function boulderGen2 () {
        //     const yCoord = randomLocation(250, 1000)
        //     const velocity = Math.random() * 500
        //     projectiles.boulder = boulders.create(-50, yCoord,'boulder');
        //     projectiles.boulder.setScale(.4)
        //     projectiles.boulder.setVelocityX(velocity)
        //     projectiles.boulder.setVelocityY(-velocity/2)
        //   }

        //   function boulderGen3 () {
        //     const yCoord = randomLocation(250, 1000)
        //     const velocity = Math.random() * 500
        //     projectiles.boulder = boulders.create(1250, yCoord,'boulder');
        //     projectiles.boulder.setScale(.4)
        //     projectiles.boulder.setVelocityX(-velocity)
        //     projectiles.boulder.setVelocityY(-velocity/2)
        //   }

          function boulderGen4 () {
            const xCoord = randomLocation(100, 1100)
            const velocity = Math.random() * 500
            const bounce = Math.random()
            projectiles.boulder = boulders.create(xCoord, 0,'boulder');
            projectiles.boulder.setScale(.4)
            projectiles.boulder.body.collideWorldBounds = true;
            projectiles.boulder.body.bounce.y = bounce;
            projectiles.boulder.body.setCircle(100, 10, 10)

            // projectiles.boulder.setVelocityX(-velocity)
          }

          function gameOver() {
              global.add.text(400, 600, 'GAME OVER!', { fontSize: '60px', color: '#ff0000' })
          }

          const boulderGenLoop = this.time.addEvent({
            delay: 500,
            callback: boulderGen,
            callbackScope: this,
            loop: true,
          });

        //   const boulderGenLoop2 = this.time.addEvent({
        //     delay: 300,
        //     callback: boulderGen2,
        //     callbackScope: this,
        //     loop: true,
        //   });

        //   const boulderGenLoop3 = this.time.addEvent({
        //     delay: 300,
        //     callback: boulderGen3,
        //     callbackScope: this,
        //     loop: true,
        //   });

          const boulderGenLoop4 = this.time.addEvent({
            delay: 500,
            callback: boulderGen4,
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

        
        gameState.smiley = this.physics.add.sprite(600,745,'face').setScale(.8);
        gameState.smiley.body.setAllowGravity(false)
        gameState.smiley.body.setCircle(35, 2, 2)


        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(gameState.smiley, boulders, (rock) => {
          this.add.text(400, 400, `Game Over`, { fontSize: '80px', fill: '#ff0000' });
          this.add.text(380, 500, `You scored ${gameState.score} points`, { fontSize: '40px', fill: '#ff0000' });
          rock.destroy();
          this.physics.pause();
          currentlyPlaying = false
      })
    }

    update(delta) {

        if(this.cursors.left.isDown) {
            if (gameState.smiley.x > 90 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x-=5
            else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x-=5
            else null
        }
        if(this.cursors.right.isDown) {
            if (gameState.smiley.x < 1110 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x+=5
            else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x+=5 
            else null
        }

        if(this.cursors.up.isDown) {
            if (gameState.smiley.y > 90) gameState.smiley.y-=5
            else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y-=5 
            else null
        }

        if(this.cursors.down.isDown) {
            if (gameState.smiley.y < 710) gameState.smiley.y+=5
            else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y+=5 
            else null
        }

    }
}