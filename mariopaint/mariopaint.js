function setup(){
createCanvas(250,250);
background(200);
}
function mouseDragged(){
    fill(random(200), random(200), random(200))
    quad(38, 31, 86, 20, 69, 63, 30, 76);
    ellipse(mouseX,mouseY,random(20), random(30));
    
}