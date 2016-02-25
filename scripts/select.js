//Shape selecting functions*****************
var isCircleSelected;
var isLineSelected;
var isRectSelected;

function circleSelect() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  $('#artboard').unbind('click');

  circle = new createjs.Shape();
  stage.addChild(circle);

  isCircleSelected = true;
  isLineSelected = false;
  isRectSelected = false;
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
}
//*******************************************

//draw the selected shape********************
 function createArt() {
  if (isLineSelected === true) {
    var xStart, yStart, offset;
    $('#artboard').mousedown(function(e) {
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

function removeLast() {

}
