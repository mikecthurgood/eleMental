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
        gameState.fireDelay = 500
        gameState.boulderDelay = 700
        
        this.image = this.add.image(600,400,'eleMental');

        this.input.keyboard.on('keyup', function (e) {
            if(e.key === "2") {
                this.scene.start("fireLevel");
            }

            if(e.key === "3") {
                this.scene.start("boulderLevel");
            }
        }, this);

    }

}