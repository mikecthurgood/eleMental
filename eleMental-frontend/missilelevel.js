class MissileLevel extends Sprites {

  constructor() {
    super({ key: 'missileLevel' });
  }

  create() {

    gameState.nextLevel = gameState.level.sample()
    gameState.time = gameState.timeOrigin

    this.background = this.add.image(600, 400, 'background-red');
    this.levelText()
    this.timers()
    this.playerControls()
    this.loadPlayer()

    const blocks = this.physics.add.staticGroup()
    const missiles = this.physics.add.group()

    this.anims.create({
      key: 'flash',
      frames: this.anims.generateFrameNumbers('barrier', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1
    });

    barriers.block1 = blocks.create(600, 180, 'barrier').setScale(0.6).refreshBody()
    barriers.block1.anims.play('flash', true); 4

    barriers.block2 = blocks.create(600, 600, 'barrier').setScale(0.6).refreshBody()
    barriers.block2.anims.play('flash', true);

    barriers.block3 = blocks.create(100, 400, 'barrier').setScale(0.6).refreshBody()
    barriers.block3.anims.play('flash', true);

    barriers.block4 = blocks.create(1100, 400, 'barrier').setScale(0.6).refreshBody()
    barriers.block4.anims.play('flash', true);

    if (gameState.positionX > 599) projectiles.missile = missiles.create(100, 100, 'missile')
    else projectiles.missile = missiles.create(1000, 100, 'missile')
      .setVelocity(gameState.speed, 0);
    projectiles.missile.setScale(.6)
    projectiles.missile.body.setAllowGravity(false)

    this.physics.add.collider(blocks, gameState.smiley, () => {
    })

    this.physics.add.overlap(gameState.smiley, missiles, () => {
      this.die(projectiles.missile)
    })
  }

  update(delta) {

    this.playerInput()

    if (currentlyPlaying === true) {

      smileyMove(gameState.smiley);
      velocityFromRotation(projectiles.missile.rotation, gameState.speed, projectiles.missile.body.velocity);
      projectiles.missile.body.debugBodyColor = (projectiles.missile.body.angularVelocity === 0) ? 0xff0000 : 0xffff00;
    }

    if (gameState.time === 0) {
      gameState.positionX = gameState.smiley.x
      gameState.positionY = gameState.smiley.y
      gameState.speed = gameState.speed + 25
      gameState.playerSpeed = gameState.playerSpeed + 25
      gameState.timeOrigin += 1
      gameState.scoreTimer = gameState.scoreTimer * 1.1

      this.scene.start(gameState.nextLevel)
    }
  }
}