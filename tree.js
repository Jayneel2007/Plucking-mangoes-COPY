class Tree{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            restitution:0,
            friction:0,
            density:0

    
        
}
this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Sprites/tree.png");
        World.add(world, this.body);

}
display(){



}
}