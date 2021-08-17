function preload(){

}

function setup(){
canvas = createCanvas(600,400);
canvas.position(document.getElementById("canvas_div"));
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,400);
}