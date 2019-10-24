class Explosion extends Phaser.GameObjects.Sprite {
    constructor(x, y, scene) {
        super(scene, x, y, 'explosion')
        this.smoke(x, y, scene)
        scene.add.existing(this)
        scene.tweens.add({
            targets: this,
            scaleX: 8,
            scaleY: 8,
            alpha: 0,
            duration: 1000,
            ease: "Bounce.easeIn",
            onComplete: function () { console.log('completed') }
        });
    }

    smoke(x, y, scene) {
        const particleManager = scene.add.particles('smoke')
        const emitter = particleManager.createEmitter();
        emitter.setPosition(x, y);
        emitter.setSpeed(200);
        emitter.explode(20);
    }
}