objects = []
status = "";
Song = "AAA.mp4";

function setup(){
canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model loaded!")
    status = true;
    
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}


function draw()
{
    image(video, 0, 0, 380, 380);

    if(status != undefined){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        image(img, 0, 0, 640, 420);
for(var i = 0; i < objects.length; i++) {

document.getElementById("number_of_objects").innerHTML = "BABY IS DETECT";
    
fill(r,g,b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
noFill();
stroke(r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

}    
}else{
Song.play()
}
}
