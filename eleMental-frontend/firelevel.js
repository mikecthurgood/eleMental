class FireLevel extends Phaser.Scene {

    constructor() {
        super({key:'fireLevel'});
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('face', 'assets/scared-face.png');
        this.load.image('fire', 'assets/firebolt.png')
    }

    create() {
        
        this.background = this.add.image(600,400,'background');
        projectiles.fire1 = this.physics.add.sprite(100, 650,'fire');
        projectiles.fire2 = this.physics.add.sprite(400, 550,'fire');
        projectiles.fire3 = this.physics.add.sprite(100, 450,'fire');
        projectiles.fire4 = this.physics.add.sprite(400, 350,'fire');
        projectiles.fire5 = this.physics.add.sprite(100, 250,'fire');
        projectiles.fire6 = this.physics.add.sprite(400, 150,'fire');
        projectiles.fire8 = this.physics.add.sprite(-300, 550,'fire');
        projectiles.fire9 = this.physics.add.sprite(-300, 350,'fire');
        projectiles.fire10 = this.physics.add.sprite(-300, 150,'fire');
        
        gameState.smiley = this.physics.add.sprite(600,745,'face');

        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(gameState.smiley, projectiles)
    }

    update(delta) {

        // this.game.physics.arcade.collide(gameState.smiley, projectiles.fire1);

        if(this.cursors.left.isDown) {
            if (gameState.smiley.x > 90 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x-=2
            else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x-=2 
            else null
        }
        if(this.cursors.right.isDown) {
            if (gameState.smiley.x < 1110 && (gameState.smiley.y < 715 && gameState.smiley.y > 85)) gameState.smiley.x+=2
            else if (gameState.smiley.y > 390 && gameState.smiley.y < 410) gameState.smiley.x+=2 
            else null
        }

        if(this.cursors.up.isDown) {
            if (gameState.smiley.y > 90) gameState.smiley.y-=2
            else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y-=2 
            else null
        }

        if(this.cursors.down.isDown) {
            if (gameState.smiley.y < 710) gameState.smiley.y+=2
            else if (gameState.smiley.x > 590 && gameState.smiley.x < 610) gameState.smiley.y+=2 
            else null
        }

        // const startPoint = -50
        
        if (projectiles.fire1.x > 1250) {
            projectiles.fire1.x = -50
        } else {
            projectiles.fire1.x += 7;
        }

        if (projectiles.fire2.x > 1250) {
            projectiles.fire2.x = -50
        } else {
            projectiles.fire2.x += 3;
        }

        if (projectiles.fire3.x > 1250) {
            projectiles.fire3.x = -50
        } else {
            projectiles.fire3.x += 7;
        }

        if (projectiles.fire4.x > 1250) {
            projectiles.fire4.x = -50
        } else {
            projectiles.fire4.x += 3;
        }

        if (projectiles.fire5.x > 1250) {
            projectiles.fire5.x = -50
        } else {
            projectiles.fire5.x += 7;
        }

        if (projectiles.fire6.x > 1250) {
            projectiles.fire6.x = -50
        } else {
            projectiles.fire6.x += 3;
        }

        if (projectiles.fire8.x > 1250) {
            projectiles.fire8.x = -50
        } else {
            projectiles.fire8.x += 3;
        }

        if (projectiles.fire9.x > 1250) {
            projectiles.fire9.x = -50
        } else {
            projectiles.fire9.x += 3;
        }

        if (projectiles.fire10.x > 1250) {
            projectiles.fire10.x = -50
        } else {
            projectiles.fire10.x += 3;
        }



    }
}