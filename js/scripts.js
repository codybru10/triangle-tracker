
var triangleMath = function(sideOne, sideTwo, sideThree) {

  if (sideOne === sideTwo && sideTwo === sideThree) {
    return "This is an Equilateral Triangle";
  } else if ((sideOne === sideTwo && sideOne + sideTwo >= sideThree) || (sideTwo === sideThree && sideTwo + sideThree >= sideOne) || (sideOne === sideThree && sideOne + sideThree >= sideTwo) && !(sideOne + sideTwo <= sideThree) || (sideOne + sideThree <= sideTwo) || (sideTwo + sideThree <= sideOne)) {
    return "This is an Isosceles Triangle";
  } else if ((sideOne != sideTwo && sideOne != sideThree && sideTwo != sideThree) && !(sideOne + sideTwo <= sideThree) || (sideOne + sideThree <= sideTwo) || (sideTwo + sideThree <= sideOne)) {
    return "This is a Scalene Triangle";
  } else if ((sideOne + sideTwo <= sideThree) || (sideOne + sideThree <= sideTwo) || (sideTwo + sideThree <= sideOne)) {
    return "This is not a triangle";
  } else {
    alert("Error");
  }
}


$(document).ready(function() {

  $("form").submit(function(event){
    var sideOne = parseInt($("#side1").val());
    var sideTwo = parseInt($("#side2").val());
    var sideThree = parseInt($("#side3").val());

    var answer = triangleMath(sideOne, sideTwo, sideThree);

    $(".output").text(answer);

    event.preventDefault();
  });

});
