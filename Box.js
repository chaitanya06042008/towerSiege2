class BoxClass{
constructor (x, y, width, height){
    var options = {
        'restitution':0.8,
        'friction':1.0,
       
    }
    this.visibility=260

this.body=Bodies.rectangle(x, y, width, height);
this.width=width;

this.height=height;
World.add(world, this.body);

}
display(){
    var pos = this.body.position
    var angle = this.body.angle;
    if(this.body.speed<4){
        push();
fill("green")
translate(this.body.position.x, this.body.position.y);
rotate(angle);

rectMode(CENTER)

rect(0, 0, this.height, this.width)
pop();

}
       
        
        else{
            /*push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            rect(pos.x, pos.y, this.height, this.width)
  
            World.remove(world,this.body);
            pop();*/
            World.remove(world, this.body)
            push();
            this.visibility = this.visibility-5
            tint(255,this.visibility);
            
            pop();
         
        }


}
}