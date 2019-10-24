class WindLevel extends Sprites {

  constructor() {
    super({ key: 'windLevel' });
  }

  create() {
    const whirlWinds = this.physics.add.group()
    const bombs = this.physics.add.group()
    gameState.time = gameState.timeOrigin
    gameState.nextLevel = gameState.level.sample()

    this.background = this.add.image(600, 400, 'background-yellow');
    this.levelText()
    this.timers()
    this.playerControls()
    this.loadPlayer()

    this.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNumbers('wind', { start: 0, end: 1 }),
      frameRate: 15,
      repeat: -1
    });

    this.generateBomb(100, 100, bombs)
    this.generateBomb(400, 700, bombs)
    this.generateBomb(700, 100, bombs)
    this.generateBomb(1100, 700, bombs)

    this.generateWind(1100, 100, whirlWinds)
    this.generateWind(100, 800, whirlWinds)
    this.generateWind(100, 100, whirlWinds)
    this.generateWind(1100, 800, whirlWinds)

    this.physics.add.collider(gameState.smiley, whirlWinds, () => {
      gameState.smiley.x += 130
      gameState.smiley.y += -35
    })

    this.physics.add.collider(whirlWinds, whirlWinds, () => {
    })

    this.physics.add.overlap(gameState.smiley, bombs, (bomb) => {
      this.die(bomb)
    })
  }

  update(delta) {

    this.playerInput()

    if (gameState.time === 0) {
      gameState.positionX = gameState.smiley.x
      gameState.positionY = gameState.smiley.y
      gameState.speed = gameState.speed + 25
      gameState.timeOrigin += 1
      gameState.scoreTimer = gameState.scoreTimer * 1.1
      gameState.playerSpeed = gameState.playerSpeed + 25
      gameState.windSize += 0.2


      this.scene.start(gameState.nextLevel)
    }

  }
}