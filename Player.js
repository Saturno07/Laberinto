class Player {
    constructor(){
      //identifica jugadores y da un orden
      this.index = null;
     //crear x i y para los jugadores 
      this.name = null;
      //this.rank = null;

      this.x = 0;
      this.y = 0;
  
    }
    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      if (this.index === 1) {
        this.x = width / 2 - 100;
      } else {
        this.x = width / 2 + 100;
      }
  
      database.ref(playerIndex).set({
        name: this.name,
        x: this.x,
        y: this.y,
        
      });
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
    }

    updateCount(count) {
      database.ref("/").update({
        playerCount: count
      });
    }

    update(x,y){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          x:this.x+x,
          y:this.y+y
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
    }

   /* getCarsAtEnd (){

        database.ref("carsAtEnd").on("value",(data)=>{
          this.rank=data.val();
         });
    }

    static updateCarsAtEnd(rank){

        database.ref('/').update({
    
          carsAtEnd:rank
    
        })
    
      }*/




}