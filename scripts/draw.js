//creates our canvas where shapes can be made
var stage = new createjs.Stage('artboard');
var circle = new createjs.Shape();
var line = new createjs.Shape();

//createjs.Ticker.addEventListener("tick", stage);
//createjs.Ticker.addEventListener("tick", tick);

function drawCircle(x, y) {
  //var circle = new createjs.Shape();
  circle.graphics.beginFill(shapeColor).drawCircle(x, y, 50);
  //stage.addChild(circle);
  stage.addChild(circle);
  stage.update();
}

function renderCircle(e, offset) {
  var x = (e.pageX - offset.left);
  var y = (e.pageY - offset.top);
  drawCircle(x, y);
  console.log("Circle being drawn");
}

//creates a easel.js line object
function drawLine(x, y, x2, y2) {
  //var line = new createjs.Shape();
  line.graphics.beginStroke(shapeColor);
  line.graphics.moveTo(x, y);
  line.graphics.lineTo(x2, y2);
  stage.addChild(line);
  //stage.addChild(line);
  stage.update();
}

//places the line on the artboard
function renderLine(e, offset) {
  var x; var y;
  x = (e.pageX - offset.left);
  y = (e.pageY - offset.top);
}

function endLine(e, xStart, yStart, offset) {
  drawLine(xStart, yStart, e.pageX - offset.left, e.pageY - offset.top);
}

//creates a easle rectangle object
function drawRect(x, y, w, h) {
  var rect = new createjs.Shape();
  rect.graphics.beginFill(shapeColor).drawRect(x, y, w, h);
  stage.addChild(rect);
  stage.update();
}

//places the easle rectangle on the page
function renderRect() {
  var x; var y; var w; var h;
  $('#artboard')
    .mousedown(function(e) {
      var offset = $(this).offset();
      x = (e.pageX - offset.left);
      y = (e.pageY - offset.top);
      console.log(x, y)
    })
    .mouseup(function(e) {
      var offset = $(this).offset();
      w = Math.abs(x - (e.pageX - offset.left));
      h = Math.abs(y - (e.pageY - offset.top));
      x = Math.min(x, e.pageX - offset.left);
      y = Math.min(y, e.pageY - offset.top);
      console.log(w, h);
      drawRect(x, y, w, h);
    })
}
