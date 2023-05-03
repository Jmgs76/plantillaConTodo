function setup()
 {
  createCanvas(1200, 800);
}
function draw()
 {
  background(map(mouseX,0,width,0,255),map(mouseY,0,height,0,255),0);
    for(var x=40; x<width; x+=80)
    {
      for (var y=40; y<height; y+=80)
        {
          let radius=map(mouseY,0,height,0,80);
          if (radius>80)
            {
              radius=80;
            }
        ellipse(x,y,radius,radius);
        }
    }
}
