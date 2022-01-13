
var gameState =0;
var form;
var canvas;
var background;
var game;
var laberinto;
var alien1, alien2, aliens;
var player;
var database;
var allPlayers;
var playerCount;


function preload(){
  back_img = loadImage("LABERINTO.png");

  laberinto= loadImage("LABERINTO.png");


  
}
function setup() {

  canvas= createCanvas(1000, 600);
 // createCanvas(1000, 600);//actua
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  //background(back_img);
 
  if (gameState === 0) {

    game.start();
   
  }
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}
   /*
   if (gameState === 2) {
    
     game.end();
   */  
//}