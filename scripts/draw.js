//creates our canvas where shapes can be made
var stage = new createjs.Stage('artboard');
var circle;
var line;
var rect;
var triangle;

//initiates the draw logic***********
$('.shapeSelector').click(function() {
  draw();
})
//***********************************

//Circle Functions*******************
function drawCircle(x, y) {
  circle.graphics.beginFill(shapeColor).drawCircle(x, y, 50);
  stage.update();
}

function renderCircle(e, offset) {
  var x = (e.pageX - offset.left);
  var y = (e.pageY - offset.top);
  drawCircle(x, y);
  console.log("Circle being drawn");
}
//***********************************

//Line functions*********************
function drawLine(x, y, x2, y2) {
  line.graphics.beginStroke(shapeColor);
  line.graphics.moveTo(x, y);
  line.graphics.lineTo(x2, y2);
  stage.update();
}

function renderLine(e, offset) {
  var x, y;
  x = (e.pageX - offset.left);
  y = (e.pageY - offset.top);
}

function endLine(e, xStart, yStart, offset) {
  drawLine(xStart, yStart, e.pageX - offset.left, e.pageY - offset.top);
  console.log('line being drawn');
}
//***********************************

//Rectangle Functions****************
function drawRect(x, y, w, h) {
  rect.graphics.beginFill(shapeColor).drawRect(x, y, w, h);
  stage.update();
}

function renderRect(e, offset) {
  var x, y, w, h;
  x = (e.pageX - offset.left);
  y = (e.pageY - offset.top);
}

function endRect(e, xStart, yStart, w, h, offset) {
  drawRect(Math.min(xStart, e.pageX -offset.left),
           Math.min(yStart, e.pageY - offset.top),
           Math.abs(xStart - (e.pageX - offset.left)),
           Math.abs(yStart - (e.pageY - offset.top)))
  console.log('rect being drawn');
}
//***********************************

//Triangle functions*****************
function drawTriangle() {
  triangle.graphics.beginFill(shapeColor)
  triangle.graphics.moveTo().lineTo().lineTo().lineTo();
  stage.update();
}

function renderTriangle() {

}
//***********************************

//draw the selected shape********************
function draw() {
  if (isLineSelected === true) {
    var xStart, yStart, offset;
    $('#artboard').mousedown(function(e) {
      console.log('dewing');
      offset = $(this).offset();
      xStart = (e.pageX - offset.left);
      yStart = (e.pageY - offset.top);
      renderLine(e, offset);
    }).mouseup(function(e) {
      offset = $(this).offset();
      endLine(e, xStart, yStart, offset);
    })
  } else if (isCircleSelected === true) {
    $('#artboard').click(function(e) {
      offset = $(this).offset();
      renderCircle(e, offset);
    })
  } else if (isRectSelected === true) {
    var xStart, yStart, w, h, offset;
    $('#artboard').mousedown(function(e) {
      offset = $(this).offset();
      xStart = (e.pageX - offset.left);
      yStart = (e.pageY - offset.top);
      renderRect(e, offset);
    }).mouseup(function(e) {
      offset = $(this).offset();
      endRect(e, xStart, yStart, w, h, offset);
    })
  }
}
//*******************************************
