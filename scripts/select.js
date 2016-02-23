var isCircleSelected;
var isLineSelected;

function circleSelect() {
  $('#artboard').unbind('mouseup');
  $('#artboard').unbind('mousedown');
  isCircleSelected = true;
  isLineSelected = false;
  console.log('is circle selected ' + isCircleSelected, 'is line selected ' + isLineSelected);
}

function lineSelect() {
  $('#artboard').unbind('click')
  isCircleSelected = false;
  isLineSelected = true;
  console.log('is circle selected ' + isCircleSelected, 'is line selected ' + isLineSelected);
}

// still needs work to draw only one shape
function createArt() {
  console.log(isCircleSelected, isLineSelected);
  if (isLineSelected === true && isCircleSelected === false) {
    var xStart, yStart, offset;
    $('#artboard').mousedown(function(e) {
      offset = $(this).offset();
      xStart = e.pageX - offset.left;
      yStart = e.pageY - offset.top;
      renderLine(e, offset);
    }).mouseup(function(e) {
      offset = $(this).offset();
      endLine(e, xStart, yStart, offset);
    })
  } else if (isCircleSelected === true && isLineSelected === false) {
    $('#artboard').click(function(e) {
      offset = $(this).offset();
      renderCircle(e, offset);
    })
    // if (stage.children) {
    //   stage.removeChild(line);
    //   renderCircle();
    // } else {
    //   renderCircle();
    // }
  }
}

var shapeColor = "black";
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

function selectColor(i) {
    shapeColor = colors[i];
}
