// 放大
document.getElementById("bigger").addEventListener('click', function () {
    var neirong=document.getElementById("maincontent");
    var nrstyle=window.getComputedStyle(neirong);
    var size0=nrstyle.fontSize;
    var size1=parseFloat(size0);
    size1=size1+1;
    neirong.style.fontSize=size1+"px";
}, false);
// 缩小
document.getElementById("smaller").addEventListener('click', function () {
    var neirong=document.getElementById("maincontent");
    var nrstyle=window.getComputedStyle(neirong);
    var size0=nrstyle.fontSize;
    var size1=parseFloat(size0);
    size1=size1-1;
    neirong.style.fontSize=size1+"px";
}, false);