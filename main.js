song1="";
song2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreLeftWrist = 0;
is_song_playing="";

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);

    is_song_playing.isPlaying();

    fill("#FF0000");
	stroke("#FF0000");

    if(scoreLeftWrist>0.2){
fill("#FF0000");
circle(leftwristX, leftwristY);
song1.stop();
    }

    if(statusbar=false){
song2.play();
document.getElementById("song_name").innerHTML="Song 2 is playing";
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(){
    if(results.length > 0){
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftwrist.y;

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;

        results[0].pose.keypoints[0].score;
    }
}