class FireLevel extends Phaser.Scene {

    constructor() {
        super({key:'fireLevel'});
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('face', 'assets/scared-face.png');
        this.load.image('fire', 'assets/firebolt.png')
        this.load.image('fire2', 'assets/firebolt2.png')
        
    }

    create() {

        let shapes = this.cache.json.get('shapes');

        this.background = this.add.image(600,400,'background');

        gameState.scoreText = this.add.text(100, 750, 'Score: 0', { fontSize: '40px', fill: '#ffffff' })

        
        const fireBolts = this.physics.add.group()

        function randomLocation(min, max) {
            return Math.random() * (max - min) + min;
        }

        function fireGen () {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(-50, yCoord,'fire');
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(velocity)
            projectiles.fire.setVelocityY(velocity/2)
            projectiles.fire.body.setSize(70, 2, true)
          }

          function fireGen2 () {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(-50, yCoord,'fire');
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(velocity)
            projectiles.fire.setVelocityY(-velocity/2)
            projectiles.fire.body.setSize(70, 2, true)
          }

          function fireGen3 () {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(1250, yCoord,'fire2');
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(-velocity)
            projectiles.fire.setVelocityY(-velocity/2)
            projectiles.fire.body.setSize(70, 2, true).setOffset(0, 8)
          }

          function fireGen4 () {
            const yCoord = randomLocation(250, 1000)
            const velocity = Math.random() * 500
            projectiles.fire = fireBolts.create(1250, yCoord,'fire2');
            projectiles.fire.body.setAllowGravity(false);
            projectiles.fire.setVelocityX(-velocity)
            projectiles.fire.setVelocityY(velocity/2)
            projectiles.fire.body.setSize(70, 2, true).setOffset(0, 8)
          }

          function gameOver() {
              global.add.text(400, 600, 'GAME OVER!', { fontSize: '60px', color: '#ff0000' })
          }

          const fireGenLoop = this.time.addEvent({
            delay: 300,
            callback: fireGen,
            callbackScope: this,
            loop: true,
          });

          const fireGenLoop2 = this.time.addEvent({
            delay: 300,
            callback: fireGen2,
            callbackScope: this,
            loop: true,
          });

          const fireGenLoop3 = this.time.addEvent({
            delay: 300,
            callback: fireGen3,
            callbackScope: this,
            loop: true,
          });

          const fireGenLoop4 = this.time.addEvent({
            delay: 300,
            callback: fireGen4,
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
        gameState.smiley.body.setAllowGravity(false);
        gameState.smiley.body.setCircle(35, 2, 2)

        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(gameState.smiley, fireBolts, (bolt) => {
            this.add.text(400, 400, `Game Over`, { fontSize: '80px', fill: '#ff0000' });
            this.add.text(380, 500, `You scored ${gameState.score} points`, { fontSize: '40px', fill: '#ff0000' });
            bolt.destroy();
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

        if (gameState.score > 50) {
          this.scene.start("boulderLevel")
        }

    }
}