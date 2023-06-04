leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550,550);
    canvas.position(560, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized.');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
      }
}
function draw(){
    background("rgb(185, 16, 242)");
    textSize(difference);
    fill("#FFE787");
    text("Aarna", 50, 400);
}