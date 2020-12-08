class mango{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.radius=radius
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
        translate(mangoPos.x, mangoPos.y);
        imageMode(CENTER);
		ellipseMode(CENTER);
		rotate(this.body.angle)
		image(this.image, 0,0,this.radius*1.5, this.radius*1.5)
		pop()
 }
}
