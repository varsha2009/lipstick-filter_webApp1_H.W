function preload(){
}
function setup(){
    canvas = createCanvas(400,350);
    canvas.position(485,200);
    video = createCapture(VIDEO);
    video.size(400,350);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',getPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(results){
    image(video,0,0,400,350);
}
function take_snapshot(){
    save("my_inage.png");
}
var noseX;
var noseY;
function getPoses(results){
    console.log(results);
    noseX = results[0].pose.nose.x-25;
    noseY = results[0].pose.nose.y+20;
    console.log("nose x :"+noseX);
    console.log("nose y :"+noseY);
}