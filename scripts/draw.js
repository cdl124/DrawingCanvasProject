//creates our canvas where shapes can be made as well
//as sets up our variables to beused across functions
var stage = new createjs.Stage('artboard');
var message = new createjs.Text("Select a shape!", '36px Arial', '#777777');
  message.x = 125;
  message.y = 200;
  stage.addChild(message);
  stage.update();
var circle;
var line;
var freeLine;
var rect;
var triangle;

//initiates the draw logic***********
$('.shapeSelector').click(function() {
  if (stage.contains(message)) {
    stage.clear();
    stage.removeChild(message);
  }
  draw();
})
//***********************************

//Circle Functions*******************
function drawCircle(x, y, r) {
  circle.graphics.beginFill(shapeColor).drawCircle(x, y, r);
  stage.update();
}

function renderCircle(e, offset) {
  var x = (e.pageX - offset.left);
  var y = (e.pageY - offset.top);
}

function endCircle(e, xStart, yStart, offset) {
  drawCircle(xStart, yStart,
            (Math.sqrt
              (Math.pow((Math.abs((e.pageX - offset.left) - xStart)), 2) +
               Math.pow((Math.abs((e.pageY - offset.top) - yStart)), 2))));
  console.log('circle being drawn');
}
//***********************************

//straight line functions************
function drawLine(x, y, x2, y2) {
  line.graphics.beginStroke(shapeColor).setStrokeStyle(3, 'round');
  line.graphics.moveTo(x, y);
  line.graphics.lineTo(x2, y2);
  stage.update();
}

function renderLine(e, offset) {
  var x = (e.pageX - offset.left);
  var y = (e.pageY - offset.top);
}

function endLine(e, xStart, yStart, offset) {
  drawLine(xStart, yStart, e.pageX - offset.left, e.pageY - offset.top);
  console.log('line being drawn');
}
//*******************************************************************

//freedraw line*******************************************************
function drawFreeLine() {
    stage.addEventListener("stagemousedown", freeMouseDown);
    stage.addEventListener("stagemouseup", freeMouseUp);
    stage.update();
}

function freeMouseDown(event) {
  if (!event.primary) {return;}
  start = new createjs.Point(stage.mouseX, stage.mouseY);
  startMid = start.clone();
  stage.addEventListener("stagemousemove", freeMouseMove);
  console.log('here1');
}

function freeMouseMove(event) {
  if (!event.primary) {return;}
  var mid = new createjs.Point(start.x + stage.mouseX >> 1, start.y + stage.mouseY >> 1);

  freeLine.graphics.setStrokeStyle(5, 'round').beginStroke(shapeColor)
    .moveTo(mid.x, mid.y).curveTo(start.x, start.y, startMid.x, startMid.y);

  start.x = stage.mouseX;
  start.y = stage.mouseY;

  startMid.x = mid.x;
  startMid.y = mid.y;

  stage.update();
  console.log(start, startMid, mid);
}

function freeMouseUp(event) {
  if (!event.primary) { return; }
	stage.removeEventListener("stagemousemove", freeMouseMove);
}
//********************************************************************

//Rectangle Functions*************************************************
function drawRect(x, y, w, h) {
  rect.graphics.beginFill(shapeColor).drawRect(x, y, w, h);
  stage.update();
}

function renderRect(e, offset) {
  var w, h;
  var x = (e.pageX - offset.left);
  var y = (e.pageY - offset.top);
}

function endRect(e, xStart, yStart, w, h, offset) {
  drawRect(Math.min(xStart, e.pageX -offset.left),
           Math.min(yStart, e.pageY - offset.top),
           Math.abs(xStart - (e.pageX - offset.left)),
           Math.abs(yStart - (e.pageY - offset.top)))
  console.log('rect being drawn');
}
//*********************************************************************

//draw the selected shape**********************************************
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
    var xStart, yStart, offset;
    $('#artboard').mousedown/*.click*/(function(e) {
      console.log('dewing');
      offset = $(this).offset();
      xStart = (e.pageX - offset.left);
      yStart = (e.pageY - offset.top);
      renderCircle(e, offset);
    }).mouseup(function(e) {
      offset = $(this).offset();
      endCircle(e, xStart, yStart, offset);
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
  } else if (isFreeSelected === true) {
    var start, startMid;
    drawFreeLine();
  }
}
//*********************************************************************
