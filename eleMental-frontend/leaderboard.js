class LeaderBoard extends Phaser.Scene {

    constructor() {
        super({key:'leaderBoard'});
    }

    preload() {
        

    }

    create() {

        const YBASE = 80
        const XBASE = 80

        gameState.LeaderBoardText = this.add.text(300, 50, `HIGH SCORES`, { fontSize: '100px', fill: '#ffff00' })

        const flashTextLoop = this.time.addEvent({
          delay: 50,
          callback: flashTextColor,
          callbackScope: this,
          loop: true
        });

        function flashTextColor() {
          const colors = ["#FF00FF", "#00FFFF", "#FFFF00"];
          const selection = Math.floor(Math.random() * 3);
          gameState.LeaderBoardText.setColor(colors[selection]);
        }       
        
        this.add.text(XBASE + 280, YBASE + 100, `RANK`, { fontSize: '40px', fill: '#ff0000' })
        this.add.text(XBASE + 480, YBASE + 100, `NAME`, { fontSize: '40px', fill: '#00ff00' })
        this.add.text(XBASE + 680, YBASE + 100, `SCORE`, { fontSize: '40px', fill: '#0000ff' })

        if (hiscores[0]) {
            this.add.text(XBASE + 320, YBASE + 175, `1`, { fontSize: '40px', fill: '#ff00ff' })
            this.add.text(XBASE + 490, YBASE + 175, `${hiscores[0].initials}`, { fontSize: '40px', fill: '#ff00ff' })
            this.add.text(XBASE + 700, YBASE + 175, `${hiscores[0].score}`, { fontSize: '40px', fill: '#ff00ff' })
        }

        if (hiscores[1]) {
            this.add.text(XBASE + 320, YBASE + 225, `2`, { fontSize: '40px', fill: '#ffff00' })
            this.add.text(XBASE + 490, YBASE + 225, `${hiscores[1].initials}`, { fontSize: '40px', fill: '#ffff00' })
            this.add.text(XBASE + 700, YBASE + 225, `${hiscores[1].score}`, { fontSize: '40px', fill: '#ffff00' })
        }

        if (hiscores[2]) {
            this.add.text(XBASE + 320, YBASE + 275, `3`, { fontSize: '40px', fill: '#00ffff' })
            this.add.text(XBASE + 490, YBASE + 275, `${hiscores[2].initials}`, { fontSize: '40px', fill: '#00ffff' })
            this.add.text(XBASE + 700, YBASE + 275, `${hiscores[2].score}`, { fontSize: '40px', fill: '#00ffff' })
        }

        if (hiscores[3]) {
            this.add.text(XBASE + 320, YBASE + 325, `4`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 490, YBASE + 325, `${hiscores[3].initials}`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 700, YBASE + 325, `${hiscores[3].score}`, { fontSize: '40px', fill: '#ffffff' })
        }

        if (hiscores[4]) {
            this.add.text(XBASE + 320, YBASE + 375, `5`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 490, YBASE + 375, `${hiscores[4].initials}`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 700, YBASE + 375, `${hiscores[4].score}`, { fontSize: '40px', fill: '#ffffff' })
        }

        if (hiscores[5]) {
            this.add.text(XBASE + 320, YBASE + 425, `6`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 490, YBASE + 425, `${hiscores[5].initials}`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 700, YBASE + 425, `${hiscores[5].score}`, { fontSize: '40px', fill: '#ffffff' })
        }

        if (hiscores[6]) {
            this.add.text(XBASE + 320, YBASE + 475, `7`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 490, YBASE + 475, `${hiscores[6].initials}`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 700, YBASE + 475, `${hiscores[6].score}`, { fontSize: '40px', fill: '#ffffff' })
        }
        
        if (hiscores[7]) {
            this.add.text(XBASE + 320, YBASE + 525, `8`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 490, YBASE + 525, `${hiscores[7].initials}`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 700, YBASE + 525, `${hiscores[7].score}`, { fontSize: '40px', fill: '#ffffff' })
        }

        if (hiscores[8]) {
            this.add.text(XBASE + 320, YBASE + 575, `9`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 490, YBASE + 575, `${hiscores[8].initials}`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 700, YBASE + 575, `${hiscores[8].score}`, { fontSize: '40px', fill: '#ffffff' })
        }

        if (hiscores[9]) {
            this.add.text(XBASE + 320, YBASE + 625, `10`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 490, YBASE + 625, `${hiscores[9].initials}`, { fontSize: '40px', fill: '#ffffff' })
            this.add.text(XBASE + 700, YBASE + 625, `${hiscores[9].score}`, { fontSize: '40px', fill: '#ffffff' })
        }

       //borders
       this.add.text(XBASE + 250, YBASE + 125, `------------------------`, { fontSize: '40px', fill: '#ffffff' })
       this.add.text(XBASE + 250, YBASE + 70, `------------------------`, { fontSize: '40px', fill: '#ffffff' })
       this.add.text(XBASE + 250, YBASE + 680, `------------------------`, { fontSize: '40px', fill: '#ffffff' })
    
        this.add.text(XBASE + 235, YBASE + 100, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 100, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 100, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 100, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 150, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 150, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 150, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 150, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 200, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 200, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 200, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 200, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 250, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 250, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 250, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 250, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 300, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 300, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 300, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 300, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 350, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 350, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 350, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 350, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 400, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 400, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 400, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 400, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 450, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 450, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 450, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 450, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 500, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 500, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 500, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 500, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 550, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 550, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 550, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 550, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 600, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 600, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 600, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 600, `|`, { fontSize: '40px', fill: '#ffffff' })

        this.add.text(XBASE + 235, YBASE + 650, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 818, YBASE + 650, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 435, YBASE + 650, `|`, { fontSize: '40px', fill: '#ffffff' })
        this.add.text(XBASE + 635, YBASE + 650, `|`, { fontSize: '40px', fill: '#ffffff' })

    


        
        // gameState.scoreText = this.add.text(300, 400, `You scored \n${gameState.score} points`, { fontSize: '100px', fill: '#ffffff' })          
        //   gameState.gameOverText = this.add.text(550, 500, `${gameState.readyTime}`, { fontSize: '200px', fill: '#ffffff' })

        function flashText() {    
            // gameState.gameOverText.visible = !gameState.gameOverText.visible
        }

        // const flashTextLoop = this.time.addEvent({
        //     delay: 100,
        //     callback: flashText,
        //     callbackScope: this,
        //     loop: true,
        //   });

        this.cursors = this.input.keyboard.createCursorKeys()

        console.log(`Score: ${gameState.score}`)

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