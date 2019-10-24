class NewHiscore extends Phaser.Scene {

  constructor() {
    super({ key: "newHiscore" });
    this.name = "";
  }

  create() {
    const subheadingStyle = { fontSize: "50px", fill: "#FFFFFF" };
    const rowStyle = { fontSize: "40px", fill: "#FFFFFF" };

    const title = this.add.text(config.width * 0.5, config.height * 0.25, "NEW HISCORE", { fontSize: "80px", fill: "#FFFFFF" });
    title.setOrigin(0.5);

    const instructions = this.add.text(config.width * 0.5, config.height * 0.4, "Enter your name and press ENTER for glory!", { fontSize: "40px", fill: "#FFFFFF" });
    instructions.setOrigin(0.5);

    const rankHeading = this.add.text(config.width * 0.25, config.height * 0.55, "RANK", subheadingStyle);
    rankHeading.setOrigin(0.5);

    const scoreHeading = this.add.text(config.width * 0.5, config.height * 0.55, "SCORE", subheadingStyle);
    scoreHeading.setOrigin(0.5);

    const initialsHeading = this.add.text(config.width * 0.75, config.height * 0.55, "NAME", subheadingStyle);
    initialsHeading.setOrigin(0.5);

    const rank = this.add.text(config.width * 0.25, config.height * 0.65, "???", rowStyle);
    rank.setOrigin(0.5);

    const score = this.add.text(config.width * 0.5, config.height * 0.65, gameState.score, rowStyle);
    score.setOrigin(0.5);

    const name = this.add.text(config.width * 0.75, config.height * 0.65, this.name, rowStyle);
    name.setOrigin(0.5);

    this.letterKeys = this.input.keyboard.addKeys("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")
    this.input.keyboard.on("keyup", addInitial, this);

    function addInitial(e) {
      for (let key in this.letterKeys) {
        if (key === e.key && this.name.length < 3) {
          this.name = this.name.concat(e.key);
          name.setText(`${this.name}`);
        }
      }
    }

    this.input.keyboard.on("keyup_BACKSPACE", removeInitial, this);

    function removeInitial(e) {
      if (this.name.length > 0) {
        this.name = this.name.slice(0, -1);
        name.setText(`${this.name}`);
      }
    }
  
    this.input.keyboard.on("keyup_ENTER", submitHiscore, this)

    function submitHiscore(e) {
      const game = this;
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initials: this.name, score: gameState.score })
      }
      return fetch("http://localhost:3000/hiscores", config)
        .then(res => res.json())
        .then(scoresFromDB => {
          hiscores = scoresFromDB;
          game.scene.start('leaderBoard')
        })
        .catch(console.error);
    }

    const cursor = this.add.text(config.width * 0.75, config.height * 0.65, "___", rowStyle);
    cursor.setOrigin(0.5);

    function flashCursor() {
      cursor.visible = (this.name.length === 3) ? true : !cursor.visible;
    }

    const flashCursorLoop = this.time.addEvent({
      delay: 200,
      callback: flashCursor,
      callbackScope: this,
      loop: true
    });

  }


  update() {

  }
}