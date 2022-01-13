class Game{

    constructor(){


    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
    
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
         
        //se crean naves
        alien1= createSprite(100,200);
        alien1.addImage("alien1","BLUE MONSTER.png");
    
        alien2 = createSprite(300,200);
        alien2.addImage("alien2","PINK MONSTER.png");
    
        aliens = [alien1, alien2];
    }

    play(){
        form.hide();
    
        Player.getPlayerInfo();
    
        //player.getCarsAtEnd;
        
         // asignar posicion inicial
        if(allPlayers !== undefined){
          //var display_position = 100;
          
          background("#c68767");
          image(laberinto,0,-displayHeight*4,displayWidth,displayHeight*5);
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 175;
          var y = 400;
            
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            //use data form the database to display the cars in y direction
            y = 400;
            cars[index-1].x = x;
            cars[index-1].y = y;
    
            
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
    
        if(keyDown(UP_ARROW) && player.index !== null && index===1){
          //aliens.y -=10
          player.update(0,-10);
        }
        else if(keyDown(DOWN_ARROW)){
            player.update(0,+10);
        }
        else if(keyDown(LEFT_ARROW)){
            player.update(-10,0);
          }
          else if(keyDown(RIGHT_ARROW)){
            player.update(+10,0);
          }
        
          
    
       /* if (player.distance > 3860){
          gameState=2;
          player.rank+=1;
          Player.updateCarsAtEnd(player.rank);
        }*/
    
        drawSprites();
      }
    
   
}