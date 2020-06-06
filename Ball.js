class Ball {
  constructor(x,y,radius) {
    var options ={
      frictionAir: 0,
      friction: 1,
      restitution: 1
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }

  // reattach(){
  //   this.body.position.x = mouseX;
  //   this.body.position.y = mouseY;
  //   // this.body.position.x = pos.x;
  //   //  this.body.position.y = pos.y;
  //   //  pos.x = this.body.position.x;
  //   //  pos.y = this.body.position.y;

  //   }
    
  move(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
  }

  display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
       ellipseMode(RADIUS);
       ellipse(0, 0, this.radius);
       pop();
    }
  }