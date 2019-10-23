class GetReady extends Phaser.Scene {

    constructor() {
        super({key:'getReady'});
    }

    preload() {
        

    }

    create() {

        gameState.readyTime = 3
        gameState.positionX = 600
        gameState.positionY = 400
        
        gameState.scoreText = this.add.text(100, 750, `Score: ${gameState.score}`, { fontSize: '40px', fill: '#ffffff' })
        gameState.nextLevel = gameState.level.sample()

        // level = ["hello", "friendly", "world"].sample();
          
          
          gameState.readyText = this.add.text(80, 200, `GET READY TO \n  SURVIVE`, { fontSize: '150px', fill: '#ffffff' })
          gameState.readyTimeText = this.add.text(550, 500, `${gameState.readyTime}`, { fontSize: '200px', fill: '#ffffff' })

          function decreaseTimer() {
            
            gameState.readyTime -= 1
            if (gameState.readyTime > 0) gameState.readyTimeText.setText(`${gameState.readyTime}`)
            else gameState.readyTimeText.setText("GO!")
          
          }

          const timerLoop = this.time.addEvent({
            delay: 1000,
            callback: decreaseTimer,
            callbackScope: this,
            loop: true,
          });

        
        // gameState.smiley = this.physics.add.sprite(600,745,'face').setScale(.8);
        // gameState.smiley.body.setAllowGravity(false)
        // gameState.smiley.body.setCircle(35, 2, 2)


    //     this.cursors = this.input.keyboard.createCursorKeys()

    //     this.physics.add.collider(gameState.smiley, boulders, (rock) => {
    //       this.add.text(400, 400, `Game Over`, { fontSize: '80px', fill: '#ff0000' });
    //       this.add.text(380, 500, `You scored ${gameState.score} points`, { fontSize: '40px', fill: '#ff0000' });
    //       rock.destroy();
    //       this.physics.pause();
    //       currentlyPlaying = false
    //   })
    
    }

    update(delta) {

        // if(this.cursors.left.isDown) {
        //     if (gameState.smiley.x > 90 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x-=5
        //     else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x-=5
        //     else null
        // }
        // if(this.cursors.right.isDown) {
        //     if (gameState.smiley.x < 1110 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x+=5
        //     else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x+=5 
        //     else null
        // }

        // if(this.cursors.up.isDown) {
        //     if (gameState.smiley.y > 90) gameState.smiley.y-=5
        //     else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y-=5 
        //     else null
        // }

        // if(this.cursors.down.isDown) {
        //     if (gameState.smiley.y < 710) gameState.smiley.y+=5
        //     else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y+=5 
        //     else null
        // }

        if (gameState.readyTime === -1) {
          this.scene.start(gameState.nextLevel)
        }

    }
}