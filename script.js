
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

context = document.getElementById('canvas').getContext("2d");
console.log(context);