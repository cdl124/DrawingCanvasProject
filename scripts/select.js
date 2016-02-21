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

function createArt() {
  console.log(isCircleSelected, isLineSelected);
  if (isLineSelected === true) {
    console.log("render line");
    renderLine();
  } else if (isCircleSelected === true) {
    console.log("render circle");
    renderCircle();
  }
}
