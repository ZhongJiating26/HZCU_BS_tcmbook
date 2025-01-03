// 广告
document.getElementById("ad-button").addEventListener('click',function(){
    document.getElementById("ad").style.display="none";
},false);

// 视频图文直播
document.getElementById("box-title1").addEventListener('click',function(){
    document.getElementById("box-video").style.display="flex";
    document.getElementById("box-title1").style.backgroundColor="hsl(28, 100%, 80%)";
    document.getElementById("box-img").style.display="none";
    document.getElementById("box-title2").style.backgroundColor="hsl(28, 81%, 46%)";

},false);
document.getElementById("box-title2").addEventListener('click',function(){
    document.getElementById("box-img").style.display="block";
    document.getElementById("box-title2").style.backgroundColor="hsl(28, 100%, 80%)";
    document.getElementById("box-video").style.display="none";
    document.getElementById("box-title1").style.backgroundColor="hsl(28, 81%, 46%)";
    document.getElementById("onlyvideo").pause();
},false);