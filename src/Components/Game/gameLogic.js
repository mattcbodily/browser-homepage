const player = {
    x: 15,
    y: 200,
    height: 25,
    width: 25
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