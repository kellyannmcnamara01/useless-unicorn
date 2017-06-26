//vars
//grab the canvas from the dom
var canvas = document.querySelector('#canvas');
//grab the context
var context = canvas.getContext('2d');

//mouse event
var xMouse = 0;
var yMouse = 0;

//add an event listener to get the mouse position using clientX and clienY
canvas.addEventListener("mousemove", setMouse, false);

//get the position using clientX and clientY
function setMouse(e){
  xMouse = e.clientX;
  yMouse = e.clientY;
} // end function setMouse


function mouse() {
  //create the circle
  //start the path
  context.beginPath();
  //create the circle
  context.arc(100, 100, 30, 0, 2 * Math.PI, true);
  //fill colour
  context.fillStyle = "#00f";
  //fill the circle
  context.fill();

}//end function mouse

//call the function
mouse();

function getPosition(el){
  var xPosition = 0;
  var yPosition = 0;

  //while loop for when the mouse is moving
  while (el){
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }//end while loop
  console.log("x: " + xPosition + " y: " + yPosition);
  return {
    x: xPosition,
    y: yPosition
  };
} //end of function getPosition
getPosition();
