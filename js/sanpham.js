var modal = document.getElementById("form");
var btn = document.getElementById("datHang");
var span= document.getElementsByClassName("endform");

btn.onclick=function (){
    modal.style.display = "block";
}
span.onclick=function (){
    modal.style.display="none";
}
window.onclick=function (event){
    if(event.target==modal){
        modal.style.display="none";
    }
}
function buy(){
    let order=document.getElementById("uptt").innerText;
    alert("Chúng tôi đã nhận được thông tin của Quý Khách \n \
    Nhân viên tư vấn sẽ liên lạc với Quý Khách ngay lập tức")
}

var modal1=document.getElementById("form");
var btn1=document.getElementById("datHang2");
var span=document.getElementsByClassName("endform");

btn1.onclick=function (){
    modal.style.display="block";
}
span.onclick=function (){
    modal.style.display="none";
}

window.onclick=function (event){
    if(event.target==modal1){
        modal1.style.display="none";
    }
}


var modal2= document.getElementById("form");
var btn2= document.getElementById("datHang3");
var span=document.getElementsByClassName("endform");

btn2.onclick=function (){
    modal.style.display="block";
}

span.onclick = function (){
    modal2.style.display = "none";
}

window.onclick=function (event){
    if(event.target==modal){
        modal.style.display="none";
    }
}










