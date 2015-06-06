$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).css({
         "background-color" : "blue"
      });
    })   
   $('div').mouseleave(function() {
       $(this).css({
         "background-color" : "green"
      }); 
   }); 
});




function write(){

document.write("<h1>Hello World!</h1><p>Have a nice day!</p>");
var w = 50;

var rows = 10;
document.write("<ul>");
for(var i = 0 ; i < rows ; i++){
  document.write("<li>");
  document.write("<div  class = 'firstCol' style=\"height:" + w.toString()+ "px; " +"width:" + w.toString()+ "px\";></div>");
    for(var j = 0; j < ( rows - 1 ) ; j++){
    document.write("<div style=\"height:" + w.toString()+ "px; " +"width:" + w.toString()+ "px\";></div>");

  } //end inner loop
  document.write("</li>");
} //end for loop
document.write("<ul>");

 

}

$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).css({
         "background-color" : "blue"
      });
    })   $(".sketch").append
   $('div').mouseleave(function() {
   $(".sketch").appends({
         "background-color" : "green"
      }); 
   }); 
});










var rows = 10;
$(".sketch").append("<ul>");
for(var i = 0 ; i < rows ; i++){
  $(".sketch").append("<li>");
  $(".sketch").append("<div  class ='firstCol'></div>");
    for(var j = 0; j < ( rows - 1 ) ; j++){
    $(".sketch").append("<div class='square'></div>");

  } //end inner loop
  $(".sketch").append("</li>");
} //end for loop
$(".sketch").append("</ul>");
 $("<div>").css('width', w);
  $("<div>").css('height',w);
