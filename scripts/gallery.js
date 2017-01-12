$(document).ready(function() {

// Upon clicking "Save to Gallery", the canvas image's URL will be grabbed,
// and will post to the Artwork directory in my AWS S3 'shapesnstuff' bucket.
// The gallery will then get and display the images from the Artwork directory.

  $('#galleryPost').click(function() {
    var canvas = document.getElementById("artboard");
    var dataUrl = canvas.toDataURL("image/png");
    $.post('/imgUpload', dataUrl, function(data, status, XHR) {
      console.log('Posted to the bucket: ', data);
    })
  });

  // Gallery .pagecontent displays all images in the 'shapesnstuff' Artwork directory here.

  (function() {
    var pageContent = $('#pagecontent');
    $.ajax({
      'type': 'GET',
      'url': '/art',
      'success': function(data) {
        for (var i = 1; i < data.Contents.length; i++) {
          $('div#pagecontent').append('<img class="galleryart" src="http://shapesnstuff.s3.amazonaws.com/' + data.Contents[i].Key + '" /></div>');
        }
      }
    });
  })();

});
