//testing the drawing function
var elem = document.getElementById('artboard');
var params = {width: 500, height: 500};
var two = new Two(params).appendTo(elem);

function circle(x, y) {
  var circle = two.makeCircle(x, y, 50);

  circle.fill =  '#ffffff';
  circle.stroke = '#000000';

  two.update();
}

function drawCircle() {
  $('#artboard').click(function(e) {
    var offset = $(this).offset();
    var x = (e.pageX - offset.left);
    var y = (e.pageY - offset.top);
    console.log(x, y);

    circle(x, y);
  })
}
