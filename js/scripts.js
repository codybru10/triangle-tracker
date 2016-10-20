
var triangleMath = function() {
  var sideOne = parseInt($("#side1").val());
  var sideTwo = parseInt($("#side2").val());
  var sideThree = parseInt($("#side3").val());

  if (sideOne === sideTwo && sideTwo === sideThree){
    $(".output").text("This is an Equilateral Triangle");
  } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree){
    $(".output").text("This is an Isosceles Triangle");
  } else if (sideOne != sideTwo && sideOne != sideThree && sideTwo != sideThree){
    $(".output").text("This is a Scalene Triangle");
  }
}


$(document).ready(function() {

  $("form").submit(function(event){
    triangleMath();

    event.preventDefault();
  });

});
