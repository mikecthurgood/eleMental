class GameOver extends Phaser.Scene {

    constructor() {
        super({key:'gameOver'});
    }

    preload() {
        

    }

    create() {

        // gameState.readyTime = 3
        // gameState.positionX = 600
        // gameState.positionY = 745
        
        gameState.gameOverText = this.add.text(240, 150, `DEAD`, { fontSize: '300px', fill: '#ff0000' })
        
        gameState.scoreText = this.add.text(300, 400, `You scored \n${gameState.score} points`, { fontSize: '100px', fill: '#ffffff' })          
        //   gameState.gameOverText = this.add.text(550, 500, `${gameState.readyTime}`, { fontSize: '200px', fill: '#ffffff' })

        function flashText() {    
            gameState.gameOverText.visible = !gameState.gameOverText.visible
        }

        const flashTextLoop = this.time.addEvent({
            delay: 100,
            callback: flashText,
            callbackScope: this,
            loop: true,
          });

        this.cursors = this.input.keyboard.createCursorKeys()

        console.log(`Score: ${gameState.score}`)

        function enterHiscore() {
            this.scene.start('newHiscore')
        }

        const leaderBoardTimer = this.time.addEvent({
            delay: 3000,
            callback: enterHiscore,
            callbackScope: this,
            loop: false,
          });
    }

    update(delta) {

        if(this.cursors.space.isDown) {
            this.scene.start('menu')  
        }
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

        // if (gameState.readyTime === -1) {
        //   this.scene.start(gameState.nextLevel)
        // }

    }
}