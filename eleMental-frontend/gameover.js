class GameOver extends Phaser.Scene {

    constructor() {
        super({key:'gameOver'});
    }

    preload() {
        

    }

    create() {
        
        gameState.gameOverText = this.add.text(240, 150, `DEAD`, { fontSize: '300px', fill: '#ff0000' })
        
        gameState.scoreText = this.add.text(300, 400, `You scored \n${gameState.score} points`, { fontSize: '100px', fill: '#ffffff' })          

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
            delay: 2000,
            callback: enterHiscore,
            callbackScope: this,
            loop: false,
          });

          
    }

}