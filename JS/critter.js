var barkSound;

function Critter(scene){
    tempCritter = new Sprite(scene, "./Images/dog.png", 30, 30);
    tempCritter.setPosition(50,50);
    tempCritter.speed = 0;
    barkSound = new Sound("./Sounds/dogBark.mp3");
    tempCritter.checkKeys = function(){
        if(keysDown[K_LEFT]){
            tempCritter.speed--;
        }
        if(keysDown[K_RIGHT]){
            tempCritter.speed++;
        }
        if(keysDown[K_DOWN]){
            tempCritter.changeYby(5);
        }
        if(keysDown[K_UP]){
            tempCritter.changeYby(-5);
        }
        if(keysDown[K_SPACE]){
            barkSound.play();
        }
        tempCritter.setSpeed(this.speed);
    }
    return tempCritter;
}