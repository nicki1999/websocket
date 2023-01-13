var socket;

function setup(){
    createCanvas(600,400);
    background(51);
     
    //connecting the client to the socket
    socket = io.connect('http://localhost:3000'); 
    socket.on('mouse',newDrawing);
    
}
function newDrawing(data){
    noStroke();
    fill(255,0,100);
    ellipse(data.x,data.y,36,36);
}
//function from the p5 library
function mouseDragged(){
    console.log(mouseX,',', mouseY);

    var data = {
        x: mouseX,
        y:mouseY
    }
    socket.emit('mouse',data);

    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,36,36);
}