//testing the drawing function
var elem = document.getElementById('artboard');
var params = {width: 500, height: 500};
var two = new Two(params).appendTo(elem);


//creates a two Circle object
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

//creates a line object
function drawLine(x, y, x2, y2) {
  var line = two.makeLine(x, y, x2, y2);

  line.stroke = '#000000';
  two.update();
}

//places the two.line on the artboard
function renderLine(){
  $('#artboard').click(function(e) {
    if (x == null){
      var offset = $(this).offset();
      var x = (e.pageX - offset.left);
      var y = (e.pageY - offset.top);
      console.log(x, y, x2, y2);
      x2 = null;
    } else if (x != null ) {
      offset = $(this).offset();
      var x2 = (e.pageX - offset.left);
      var y2 = (e.pageY - offset.top);
      drawLine(x, y, x2, y2);
      x = null;
    }
      console.log(x, y, x2, y2);
      console.log(two.scene);
  })
}
