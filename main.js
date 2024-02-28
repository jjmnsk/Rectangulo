noseX=0;
noseY=0;
difference=0;
rigthWristX=0;
leftWristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size=(550, 550);
    canvas=createCanvas(550, 550);
    canvas.position(660, 100);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() 
{
    console.log("El modelo esta inicializado")
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rigthWristX=results[0].pose.rigthWrist.y;
        difference=floor(leftWristX-rigthWristX);
        console.log("NarizX="+noseX+"\nNarizY"+noseY);
        console.log("Tamaño"+difference);
    }
}
function draw()
{
    background("black");
    document.getElementById("square_side").innerHTML="El ancho y alto del cuadrado sera = "+difference+"px";
    fill("#000000");
    stroke("#FFFFFF");
    square(noseX, noseY, difference);
}