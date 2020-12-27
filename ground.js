class Ground{
    constructor (x,y,width){
     this.body=Bodies.rectangle(x,y,width,20,{isStatic:true});
     this.width=width;
     this.height=20;
     World.add(world,this.body);
    }
display(){
    rectMode(CENTER);
    fill("brown");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}