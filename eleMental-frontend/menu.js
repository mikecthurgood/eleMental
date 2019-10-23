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
        gameState.positionY = 745
        gameState.speed = 225
        gameState.scoreTimer = 1000
        gameState.movementSpeed = 6
        currentlyPlaying = true
        
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
                this.scene.start("newHiscore");
            }
        }, this);

    }

}