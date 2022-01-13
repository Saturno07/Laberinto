class Form{
    constructor(){
       this.input = createInput("NAME");
       this.playButton = createButton('PLAY');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.titleImg = createImg("abajo 2.png");
       this.title2Img = createImg("Titulo.png");
       //this.reset = createButton('RESET');
    }
    hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }
    setElementsPosition(){

        this.input.position(width/2-250,height/2-60);
        this.playButton.position(width/2-90,height/2-20);
        this.greeting.position(width/2-300,height/2-100);
        this.titleImg.position(120,400);
        this.title2Img.position(120,1);
        

    }
    setElementsStyle(){

        this.input.class("gameTitle");
        this.playButtom.class("customButton");
        this.greeting.class("greeating");
        this.titleImg.class("customInput");
        this.title2Img.class("customInput");

    }

    display() {

        this.setElementsPosition();
        this.setElementsStyle();
        


    }
    hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      }

      handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hola ${this.input.value()}
          </br>espera a que otro jugador se una...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          
        });
      }
}