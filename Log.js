class Log extends BaseClass {
  constructor(x, y, height, angle) {
    super(x, y, height, angle);
    this.image = loadImage("sprites/wood2");
    //Matter.Body.setAngle(this.body, angle);
  }
  display(){
    super.display();
  }
};