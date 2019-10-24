class BoulderLevel extends Sprites {

  constructor() {
    super({ key: 'boulderLevel' });
  }



  create() {

    gameState.time = gameState.timeOrigin

    gameState.nextLevel = gameState.level.sample()

    this.background = this.add.image(600, 400, 'background-green');
    this.levelText()
    this.timers()
    this.playerControls()
    this.loadPlayer()

    const boulders = this.physics.add.group()

    function boulderGen() {
      if (currentlyPlaying === true) {
        const xCoord = randomLocation(50, 1150)
        // const velocity = Math.random() * 500
        const bounce = Math.random()
        projectiles.boulder = boulders.create(xCoord, -150, 'boulder');
        projectiles.boulder.setScale(.4)
        projectiles.boulder.body.collideWorldBounds = true;
        projectiles.boulder.body.setCircle(100, 10, 10)
        projectiles.boulder.body.bounce.y = bounce;
      }
    }


    function gameOver() {
      global.add.text(400, 600, 'GAME OVER!', { fontSize: '60px', color: '#ff0000' })
    }

    const boulderGenLoop = this.time.addEvent({
      delay: gameState.boulderDelay,
      callback: boulderGen,
      callbackScope: this,
      loop: true,
    });


    this.physics.add.overlap(boulders, gameState.smiley, (boulder) => {
      this.die(boulder)
    })

    function gameOver() {
      this.scene.start('gameOver')
    }

  }

  update(delta) {

    this.playerInput()

    if (gameState.time === 0) {
      gameState.positionX = gameState.smiley.x
      gameState.positionY = gameState.smiley.y
      gameState.boulderDelay = gameState.boulderDelay * 0.8
      gameState.timeOrigin += 1
      gameState.scoreTimer = gameState.scoreTimer * 1.1
      gameState.speed = gameState.speed + 25
      gameState.playerSpeed = gameState.playerSpeed + 25


      this.scene.start(gameState.nextLevel)
    }

  }
}