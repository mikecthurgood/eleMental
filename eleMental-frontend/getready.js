class GetReady extends Phaser.Scene {

  constructor() {
    super({ key: 'getReady' });
  }

  create() {

    gameState.readyTime = 3

    gameState.scoreText = this.add.text(100, 750, `Score: ${gameState.score}`, { fontSize: '40px', fill: '#ffffff' })
    gameState.nextLevel = gameState.level.sample()


    gameState.readyText = this.add.text(80, 200, `GET READY TO \n  SURVIVE`, { fontSize: '150px', fill: '#ffffff' })
    gameState.readyTimeText = this.add.text(550, 500, `${gameState.readyTime}`, { fontSize: '200px', fill: '#ffffff' })

    function decreaseTimer() {

      gameState.readyTime -= 1
      if (gameState.readyTime > 0) gameState.readyTimeText.setText(`${gameState.readyTime}`)
      else gameState.readyTimeText.setText("GO!")

    }

    const timerLoop = this.time.addEvent({
      delay: 1000,
      callback: decreaseTimer,
      callbackScope: this,
      loop: true,
    });

  }

  update(delta) {

    if (gameState.readyTime === -1) {
      this.scene.start(gameState.nextLevel)
    }

  }
}