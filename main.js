function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
peterpan="";
harrypotter="";
function preload(){
    peterpan=loadSound("music.mp3");
    harrypotter=loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,600,500)
}