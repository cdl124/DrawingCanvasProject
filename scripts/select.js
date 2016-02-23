var isCircleSelected;
var isLineSelected;

function circleSelect() {
  isCircleSelected = true;
  isLineSelected = false;
  console.log('is circle selected ' + isCircleSelected, 'is line selected ' + isLineSelected);
}

function lineSelect() {
  isCircleSelected = false;
  isLineSelected = true;
  console.log('is circle selected ' + isCircleSelected, 'is line selected ' + isLineSelected);
}

// still needs work to draw only one shape
function createArt() {
  console.log(isCircleSelected, isLineSelected);
  if (isLineSelected === true && isCircleSelected === false) {
    console.log("render line");
    renderLine();
  } else if (isCircleSelected === true && isLineSelected === false) {
    console.log("render circle");
    renderCircle();
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
