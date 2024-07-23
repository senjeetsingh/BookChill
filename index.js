$(".bookImg").click(function(){
    window.location.href='index.html';
});
$("#b1").click(function(){
    window.location.href='index.html';
});
$("#b2").click(function(){
    window.location.href='index.html';
});
$("#21").click(function(){
    window.location.href='index.html';
});
$(".log-bt").click(function(){
    window.location.href='index.html';
});
$(".login-txt").click(function(){
    window.location.href='index.html';
});
$("#b3").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".login").fadeIn(250);
    $(".login").css("display", "flex");
});
$(".pop-up").click(function(e){
    e.preventDefault();
    e.stopPropagation();
});
$(document).click(function(){
    $(".login").fadeOut(250);
    $(".login").css("display", "none");
});
$(".cart-bt").click(function(event){
    var b = "#" + event.target.id;
    $(b).addClass("click-bt");
    setTimeout(function () {
        $(b).removeClass("click-bt");
    }, 100);
});
$(".bt").click(function(event){
    var b = "#" + event.target.id;
    $(b).addClass("click-bt1");
    setTimeout(function () {
        $(b).removeClass("click-bt1");
    }, 100);
});
$(".bt").mouseover(function(event){
    var b = "#" + event.target.id;
    $(b).addClass("shade");
});
$(".bt").mouseout(function(event){
    var b = "#" + event.target.id;
    $(b).removeClass("shade");
});
$(".cart-bt").mouseover(function(event){
    var b = "#" + event.target.id;
    $(b).addClass("shade1");
});
$(".cart-bt").mouseout(function(event){
    var b = "#" + event.target.id;
    $(b).removeClass("shade1");
});
$(".bookImg").mouseover(function(event){
    var b = "#" + event.target.id;
    $(b).addClass("image-border");
});
$(".bookImg").mouseout(function(event){
    var b = "#" + event.target.id;
    $(b).removeClass("image-border");
});
var r = Math.floor(Math.random()*20+1);
var rani = "images/all-books/"+r+".jpg";
$(".randomImg").attr("src",rani);
