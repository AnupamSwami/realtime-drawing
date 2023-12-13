function setup() {
    video = createCapture(VIDEO) ;
    video.size(550 , 500) ;

    canvas = createCanvas(500 , 470) ;
    canvas.position(800 , 90) ;

    poseNet = ml5.poseNet(video , modelLoaded) ;
    poseNet.on('pose' , gotPoses) ;
} 

function modelLoaded() {
    console.log('PoseNet nis Initialised.') ;
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
    }
}