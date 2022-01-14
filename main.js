nose_X=0
nose_Y=0

function preload(){
clown_nose=loadImage('https://i.postimg.cc/FHW9zwLz/Untitled-drawing-3.png');
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

posenet= ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}



function modelLoaded(){
console.log('PoseNet is Initialised');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nose_X=results[0].pose.nose.x-175;
nose_Y=results[0].pose.nose.y-180;
console.log("Nose X=" + nose_X);
console.log("Nose Y=" + nose_Y);
}
}

function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, nose_X, nose_Y , 350, 350);
}
function take_Snapshot(){
save("MYfilter.png");
}





