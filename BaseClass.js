class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        var pos = this.body.position;
        rotate(angle);
        translate(pos.x,pos.y);
        //imageMode(CENTER);
        fill("red")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}