





function redraw(){
  var newRows = prompt("Enter Amount of new rows");
  $(".square").remove();
  writeSquares(newRows);
  changeBlue();
}


function writeSquares(num){

 
// $(".sketch").append("<h1>Hello Worrrrrld!</h1><p>Have a nice day!</p>");
var CompleteWidth = 25 * 16;
var rows = num;

var w = ( CompleteWidth / rows ) - 1 ;


$(".sketch").append("<ul>");
for(var i = 0 ; i < rows ; i++){
  $(".sketch").append("<li>");
    for(var j = 0; j <  rows ; j++){
    	$(".sketch").append("<div class='square'></div>");

  } //end inner loop
  $(".sketch").append("</li>");
} //end for loop


$(".sketch").append("</ul>");

$(".square").css('width', w);
$(".square").css('height',w);



$(".firstCol").css('margin-right',100);


   

};  //end function


function changeBlue(){
$('.square').mouseenter(function() {
       $(this).css({
         "background-color" : "blue"
      });
    })   
//$('.square').mouseleave(function() {
  //     $(this).css({
   //      "background-color" : "green"
   //   }); 
  // });

};


function changeRed(){
$('.square').mouseenter(function() {
       $(this).css({
         "background-color" : "Red"
      });
    })   

};

function changeGreen(){
$('.square').mouseenter(function() {
       $(this).css({
         "background-color" : "green"
      });
    })   

};


function changeBlack(){
$('.square').mouseenter(function() {
       $(this).css({
         "background-color" : "Black"
      });
    })   

};





