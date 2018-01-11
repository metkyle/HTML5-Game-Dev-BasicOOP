var game;
var critter;
var barkSound;
var box;
var output;
var timer;
var currentTime;
var timeDisplay;
var lastTime; curTime;

function init(){
    game = new Scene();
    critter = new Critter(game);
    box = new Sprite(game, "./Images/box.gif", 50, 50);
    barkSound = new Sound("./Sounds/dogBark.mp3");
    timer = new Timer();
    timer.reset();
    box.setSpeed(0);
    output = document.getElementById("output");
    timeDisplay = document.getElementById("time");
    lastTime = 0;
    curTime = Date.now();
    currentTime = 0;
    game.start();
}

function update(){
    game.clear();
    lastTime = curTime;
    currentTime += (Date.now() - lastTime) / 1000;
    curTime = Date.now();
    
    timeDisplay.innerHTML = currentTime;
    critter.checkKeys();
    checkCollisions();
    box.update();
    critter.update();
    
}

function checkCollisions(){
    
    if(box.collidesWith(critter)){
        output.innerHTML = "Collision";
        console.log(output.innerHTML);
        barkSound.play();
    }
    else{
        
        output.innerHTML = "No Collision";
    }
}