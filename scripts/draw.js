//creates our canvas where shapes can be made
var elem = document.getElementById('artboard');
var params = {width: 500, height: 500};
var two = new Two(params).appendTo(elem);


//creates a two.circle object
function drawCircle(x, y) {
  var circle = two.makeCircle(x, y, 50);

  circle.fill =  '#ffffff';
  circle.stroke = '#000000';
  two.update();
}

//places the two.circle on the artboard
function renderCircle() {
  $('#artboard').click(function(e) {
    var offset = $(this).offset();
    var x = (e.pageX - offset.left);
    var y = (e.pageY - offset.top);
    console.log(x, y);
    console.log(two.scene);

    two.remove();
    drawCircle(x, y);
  })
}

//creates a two.line object
function drawLine(x, y, x2, y2) {
  var line = two.makeLine(x, y, x2, y2);

  line.stroke = '#000000';
  two.update();
}

//places the two.line on the artboard
function renderLine() {
  var x; var y; var x2; var y2;
  $('#artboard')
    .mousedown(function(e) {
      var offset = $(this).offset();
      x = (e.pageX - offset.left);
      y = (e.pageY - offset.top);
    })
    .mouseup(function(e) {
      var offset = $(this).offset();
      x2 = (e.pageX - offset.left);
      y2 = (e.pageY - offset.top);
      drawLine(x, y, x2, y2);
    })
    console.log(two.scene);
}

//creates a two.rectangle object
function drawRect(x, y, w, h) {
  var rect = two.makeRectangle(x, y, w, h);

  rectangle.stroke = '#000000';
  rectangle.fill = '#ffffff';
  two.update();
}

function renderRect(){
  $('artboard')
    .mousedown(function(e) {
      var offset = $(this).offset();
      var x = (e.pageX - offset.left);
      var y = (e.pageY - offset.left);
      console.log(x, y);
    })
    .mouseup(function(e) {
      var offset = $(this).offset();
      var w = (e.pageX);
      var h = (e.pageY);
    })
}
