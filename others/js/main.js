
// 设置日期
var datetime=new Date();
var date='';
var weekday="";
var week=datetime.getDay();
switch(week){
    case 1:
        weekday="星期一";break;
    case 2:
        weekday="星期二";break;
    case 3:
        weekday="星期三";break;
    case 4:
        weekday="星期四";break;
    case 5:
        weekday="星期五";break;
    case 6:
        weekday="星期六";break;
    case 0:
        weekday="星期日";break;
}
date=`今天是 ${datetime.getFullYear()}年${parseInt(datetime.getMonth())+1}月${datetime.getDate()}日${weekday}`;
var timerID=window.setInterval("showtime()",1000);
function showtime(){
    let datetime=new Date();
    let time='';
    time+=(datetime.getHours()<10? `0${datetime.getHours()}:`:`${datetime.getHours()}:`);
    time+=(datetime.getMinutes()<10? `0${datetime.getMinutes()}:`:`${datetime.getMinutes()}:`);
    time+=(datetime.getSeconds()<10? `0${datetime.getSeconds()}`:`${datetime.getSeconds()}`);
    document.getElementById("date-time").innerHTML=`<i class="fa-duotone fa-solid fa-calendar-days"></i>${date} ${time}`;
}


// 广告
document.getElementById("ad-button").addEventListener('click',function(){
    document.getElementById("ad").style.display="none";
},false)


// 轮播图片
var count=1;
var a=[...document.querySelectorAll('#banner a')];
var carouselID=window.setInterval("carousel()", 2000);
for (let i=0;i<a.length;i++) {
    a[i].addEventListener('click',function(){
        count=i+1;
        changeImageAndBg(count);
    },false);
}

const turnLeftDiv=document.getElementById('turnleft');
const turnRightDiv=document.getElementById('turnright');
turnLeftDiv.addEventListener('click',function(){
    count=count-1;
    if(count<1){
        count=3;
    }
    changeImageAndBg(count);
},false);
turnRightDiv.addEventListener('click',function(){
    count=count+1;
    if(count>3){
        count=1;
    }
    changeImageAndBg(count);
},false);


function carousel(){
    let imgSrc=`others/images/henfu${count}.jpg`;
    let aChange=`point${count}`;
    let aCount=count - 1;
    if(aCount==0){aCount=3; }
    let aRestore = `point${aCount}`;
    document.getElementById("henfu").src=imgSrc;
    document.getElementById(aChange).style.backgroundColor="hsl(0, 0.00%, 14%)";
    document.getElementById(aRestore).style.backgroundColor="hsl(0, 0%, 50%)";
    count=count+1;
    if(count==4){count=1; }
}

function changeImageAndBg(newCount){
    document.getElementById("henfu").src=`others/images/henfu${newCount}.jpg`;
    for (let targetNum=1;targetNum<=3;targetNum++) {
        let aTarget=`point${targetNum}`;
        if (targetNum==newCount) {
            document.getElementById(aTarget).style.backgroundColor="hsl(0, 0.00%, 14%)";
        }
        else {
            document.getElementById(aTarget).style.backgroundColor="hsl(0, 0%, 50%)";
        }
    }
}

// 回到顶部
window.addEventListener('scroll', function () {
    var backToTopButton=document.getElementById('suspension');
    var scrollPosition=document.documentElement.scrollTop;
    if (scrollPosition > 420) {
        backToTopButton.style.display='block';
    } else {
        backToTopButton.style.display='none';
    }
});



