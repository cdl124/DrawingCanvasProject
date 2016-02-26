// Upon clicking "Save to Gallery", the canvas image's URL will be grabbed,
// and will post to the Artwork directory in my AWS S3 'shapesnstuff' bucket.
// The gallery will then get and display the images from the Artwork directory.

$(document).ready(function() {

  $('#galleryPost').click(function() {
    var canvas = document.getElementById("artboard");
    var dataUrl = canvas.toDataURL("image/png");
    $.post('/imgUpload', dataUrl, function(data, status, XHR) {
      console.log(data);
    })
  });

})
