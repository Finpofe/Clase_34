class Ball{
    constructor(x,y, radio){
        var options ={
            'density': 0.04,
            'frictionAir': 0.005
        }
        this.body = Bodies.circle(x,y,radio,options);
        this.radio = radio;
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);    
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0, 0, this.radio, this.radio);
        pop();
    }
}