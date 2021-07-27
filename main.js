function preload() {
    
}
function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(420,420);
    canvas.position(700,150);
    posenet=ml5.poseNet(video,model);
    posenet.on('pose',gotresult);
}
function moduel(){
console.log("modelloaded");
}
function gotresult(result) {
   if (result.length>0) {
       console.log(result);
   } 
}
function draw() {
    background('#d5f5ee');
}