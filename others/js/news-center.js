
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

// 回到顶部
window.addEventListener('scroll', function () {
    var backToTopButton=document.getElementById('suspension');
    var scrollPosition=document.documentElement.scrollTop;
    if (scrollPosition>100) {
        backToTopButton.style.display='block';
    } else {
        backToTopButton.style.display='none';
    }
});


window.alert("好消息！！！我们接到了第一个广告\n非常感谢来自浙江省回浦中学23届毕业生❤️李航❤️同学的支持");
