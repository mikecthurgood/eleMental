class FireLevel extends Sprites {

  constructor() {
    super({ key: 'fireLevel' });
  }



  create() {

    gameState.time = gameState.timeOrigin

    this.background = this.add.image(600, 400, 'background-yellow');
    this.levelText()
    this.timers()
    this.playerControls()
    this.loadPlayer()

    gameState.nextLevel = gameState.level.sample()

    const fireBolts = this.physics.add.group()

    function fireGen1() {
      this.fireGen(-50, randomLocation(250, 1000), (Math.random() * 600), (Math.random() * 150), fireBolts)
    }
    function fireGen2() {
      this.fireGen(-50, randomLocation(250, 1000), (Math.random() * 600), (Math.random() * -150), fireBolts)
    }
    function fireGen3() {
      this.fireGen(1250, randomLocation(250, 1000), (Math.random() * -600), (Math.random() * -150), fireBolts)
    }
    function fireGen4() {
      this.fireGen(-50, randomLocation(250, 1000), (Math.random() * -600), (Math.random() * 150), fireBolts)
    }

    function gameOver() {
      global.add.text(400, 600, 'GAME OVER!', { fontSize: '60px', color: '#ff0000' })
    }

    const fireGenLoop = this.time.addEvent({
      delay: gameState.fireDelay,
      callback: fireGen1,
      callbackScope: this,
      loop: true,
    });

    const fireGenLoop2 = this.time.addEvent({
      delay: gameState.fireDelay,
      callback: fireGen2,
      callbackScope: this,
      loop: true,
    });

    const fireGenLoop3 = this.time.addEvent({
      delay: gameState.fireDelay,
      callback: fireGen3,
      callbackScope: this,
      loop: true,
    });

    const fireGenLoop4 = this.time.addEvent({
      delay: gameState.fireDelay,
      callback: fireGen4,
      callbackScope: this,
      loop: true,
    });

    this.physics.add.overlap(fireBolts, gameState.smiley, (firebolt) => {
      this.die(firebolt)
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
      gameState.fireDelay = gameState.fireDelay * 0.8
      gameState.speed = gameState.speed + 25
      gameState.timeOrigin += 1
      gameState.scoreTimer = gameState.scoreTimer * 1.1
      gameState.playerSpeed = gameState.playerSpeed + 25

      this.scene.start(gameState.nextLevel)
    }

  }
}