//Shape selecting functions*****************
var isCircleSelected;
var isLineSelected;
var isRectSelected;
var isTriSelected;

function circleSelect() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  $('#artboard').unbind('click');

  circle = new createjs.Shape();
  stage.addChild(circle);

  isCircleSelected = true;
  isLineSelected = false;
  isRectSelected = false;
  isTriSelected = false;
}

function lineSelect() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  $('#artboard').unbind('click');

  line = new createjs.Shape();
  stage.addChild(line);

  isCircleSelected = false;
  isLineSelected = true;
  isRectSelected = false;
  isTriSelected = false;
}

function rectSelect() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  $('#artboard').unbind('click');

  rect = new createjs.Shape();
  stage.addChild(rect);

  isCircleSelected = false;
  isLineSelected = false;
  isRectSelected = true;
  isTriSelected = false;
}

function TriSelect() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  $('#artboard').unbind('click');

  triangle = new createjs.shape();
  stage.addChild(triangle);

  isCircleSelected = false;
  isLineSelected = false;
  isRectSelected = false;
  isTriSelected = true;
}
//*******************************************

//selection functions for colors and removing drawings
var shapeColor = "black";
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

function selectColor(i) {
    shapeColor = colors[i];
}

function clearCanvas() {
  stage.removeAllChildren();
  stage.update();
}
