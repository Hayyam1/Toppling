class ground{

constructor(x,y,width,height){
var ground2 = {
    isStatic: true
}
this.width = width;
this.height = height;
this.body = Bodies.rectangle(x,y,width,height,ground2);
World.add(world,this.body);
}
display(){

var pos = this.body.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
}
}