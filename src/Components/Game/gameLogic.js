const gravity = .5
let jumpActive = false

class Player {
    constructor(){
        this.x = 15;
        this.y = 200;
        this.height = 25;
        this.width = 25;
        this.jumpVelocity = 30;
    }

    jump(){
        if(!jumpActive){
            jumpActive = true;
            this.y -= this.jumpVelocity
        }
        jumpActive = false
    }
}

class Obstacle {
    constructor(){
        this.x = 275;
        this.y = 200;
        this.speed = 1;
    }

    move(){
        this.x -= this.speed;
    }
}