var obj=['video (6).mp4','video (3).mp4','video (4).mp4'];
var numVideo=0;
var a='./Assests/'
function playVideo(){
    if(numVideo>obj.length-1){
        numVideo=0;
    }
    var vid=document.getElementById("video-slider-1");
vid.src=a+obj[numVideo];
numVideo++;
window.setTimeout("playVideo()",10000)
}
function preVideo(){
    var vi=document.getElementById("video-slider-1");
    if(numVideo<=0){
        numVideo=2;
        vi.src=a+obj[numVideo];
    }
else{
    numVideo=numVideo-1;
    vi.src=a+obj[numVideo];
}
    
//    }
}
function nextVideo(){
    var nvi=document.getElementById("video-slider-1");
    if(numVideo==2||numVideo>2){
        numVideo=0;
        nvi.src=a+obj[numVideo];
    }
   
    else {
        numVideo=numVideo+1;
        nvi.src=a+obj[numVideo];
    }
}
function playMsg(){
    var playbtn=document.getElementById("play");
    var videocon=document.getElementById("video-slider-1");
    playbtn.style.scale=1;
    playbtn.style.opacity=1
}
function removePlay(){
    var playbtn=document.getElementById("play");
    var videocon=document.getElementById("video-slider-1");
    playbtn.style.scale=0;
    playbtn.style.opacity=0;
}  

