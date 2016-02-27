//Shape selecting functions*****************
var isCircleSelected;
var isLineSelected;
var isRectSelected;
var isFreeSelected;

function eventClear() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  $('#artboard').unbind('click');
  stage.removeEventListener("stagemousedown", freeMouseDown);
}

function circleSelect() {
  eventClear();
  circle = new createjs.Shape();
  stage.addChild(circle);

  isCircleSelected = true;
  isLineSelected = false;
  isRectSelected = false;
  isTriSelected = false;
}

function lineSelect() {
  eventClear();
  line = new createjs.Shape();
  stage.addChild(line);

  isCircleSelected = false;
  isLineSelected = true;
  isRectSelected = false;
  isTriSelected = false;
}

function freeSelect() {
  eventClear();
  freeLine = new createjs.Shape();
  stage.addChild(freeLine);

  isCircleSelected = false;
  isLineSelected = false;
  isRectSelected = false;
  isFreeSelected = true;
}

function rectSelect() {
  eventClear();
  rect = new createjs.Shape();
  stage.addChild(rect);

  isCircleSelected = false;
  isLineSelected = false;
  isRectSelected = true;
  isTriSelected = false;
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
