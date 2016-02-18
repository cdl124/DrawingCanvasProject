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
  if (isLineSelected === true) {
    renderLine();
  } else if (isCircleSelected === true) {
    renderCircle();
  }
}
