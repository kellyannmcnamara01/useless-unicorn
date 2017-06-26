
/*
//get stage offset relative to the page
$(document).ready( function() {
  offset = $('#page').offset();
  console.log(offset);
}); //end of document.ready

//track and save the position of the mouse
$(document).mousemove(function (e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    relMouseX = mouseX - offset.left;
    relMouseY = mouseY - offset.top;
    console.log("x: " + relMouseX + " y: " + relMouseY);
}); //end of document.mousemove
*/

// tut from: https://www.kirupa.com/canvas/follow_mouse_cursor.htm

//vars
//grab the canvas and get it's context
context = document.getElementById('canvas').getContext("2d");
//console.log(context);
//get the position of the canvas
var canvasPos = getPosition(canvas);
//set the x-axis to 0
var mouseX = 0;
//set the y axis to 0
var mouseY = 0;

//add an event listener from when the mouse is over the canvas to call the function setMouse
canvas.addEventListener("mousemove", setMouse, false);

//create the function call set mouse, this grab the location of the mouse
function setMouse(e) {
    //sets the x-axis coordinates and then subtracts the x-axis of the canvas
    mouseX = e.clientX - canvasPos.x;
    //sets the y-axis coordinates and then subtracts the y-axis of the canvas
    mouseY = e.clientY - canvasPos.y;
    //console.log("x: " + mouseX + " y: " + mouseY);
}

//create a function that creates the object that follows the mouse
function mouse() {
    //clear the pixels so it doesn't draw the shape but rather has a circle follow the mouse
    context.clearRect(0, 0, canvas.width, canvas.height);
    //start the path
    context.beginPath();
    //create the circle, set the x and y axis to match the mouse axis, size, starting angle, ending angle, counterclockwise
    context.arc(mouseX, mouseY, 30, 0, 2 * Math.PI, true);
    //the fill colour
    context.fillStyle = "#00f";
    //apply the fill
    context.fill();
    //tell your browser to request an animation
    requestAnimationFrame(mouse);
}
//call mouse function
mouse();

//create a function that gets the position of the mouse on the canvas
function getPosition(el) {
    //set the x and y to start at 0
    var xPosition = 0;
    var yPosition = 0;

    //create a while loop that updates the mouse position when it is moving
    while (el) {
        //off set the scroll with the off set and add the left margin/top margin of the canvas
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}