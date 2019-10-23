class Menu extends Phaser.Scene {

    constructor() {
        super({key:'menu'});
    }
    preload() {
        this.load.image('eleMental', 'assets/elemental.jpg');
    }

    create() {

        gameState.score = 0
        gameState.time = 0
        gameState.scoreTimer = 1000
        gameState.timeOrigin = 7
        gameState.fireDelay = 700
        gameState.boulderDelay = 400
        gameState.positionX = 600
        gameState.positionY = 400
        gameState.speed = 225
        gameState.scoreTimer = 1000
        gameState.movementSpeed = 6
        currentlyPlaying = true
        
        fetch("http://localhost:3000/hiscores")
          .then(res => res.json())
          .then(json => hiscores = json)

        let creditText = this.add.text(50, 45, `Credits: ${gameState.credits}`, { fontSize: '20px', fill: '#00ffff' })
        this.add.text(50, 75, `1 game = 1 credit`, { fontSize: '15px', fill: '#ffffff' })
        this.add.text(50, 100, `Press C to enter a credit`, { fontSize: '15px', fill: '#ffffff' })

        
        let startText = this.add.text(350, 700, `Press Space Bar to Start Game`, { fontSize: '30px', fill: '#ffffff' })
        if (gameState.credits === 0) {
            startText.visible = false
        }

        function flashCredits() {
            if (gameState.credits === 0) {  
            creditText.visible = !creditText.visible
            } else {
                creditText.visible = true
            }
        }

        function flashStart() {
            if (gameState.credits > 0) {  
                startText.visible = !startText.visible
                } 
        }

        const flashTextLoop = this.time.addEvent({
            delay: 500,
            callback: flashCredits,
            callbackScope: this,
            loop: true,
          });

          const flashStartLoop = this.time.addEvent({
            delay: 250,
            callback: flashStart,
            callbackScope: this,
            loop: true,
          });
        
        this.image = this.add.image(600,400,'eleMental');

        this.input.keyboard.on('keyup', function (e) {
            if(e.key === "1") {
                this.scene.start("getReady");
            }
            if(e.key === "2") {
                this.scene.start("fireLevel");
            }

            if(e.key === "3") {
                this.scene.start("boulderLevel");
            }

            if(e.key === "4") {
                this.scene.start("missileLevel");
            }

            if(e.key === "5") {
                this.scene.start("iceLevel");
            }

            if(e.key === "8") {
                this.scene.start("newHiscore");
            }

            if(e.key === "9") {
                this.scene.start("leaderBoard");
            }

            if(e.key === "c") {
                gameState.credits += 1
                creditText.setText(`Credits ${gameState.credits}`)
                console.log(gameState.credits)
            }
        }, this);

        this.cursors = this.input.keyboard.createCursorKeys()

        


    }
    update(delta) {
        if (this.cursors.space.isDown) {
            if (gameState.credits > 0) {
                gameState.credits -= 1
            this.scene.start("getReady");
            }
        }



        
    }

}