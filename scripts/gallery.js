// Upon clicking "Save to Gallery", the canvas image's URL will be grabbed,
// and will post to my AWS S3 bucket, shapesnstuff, directory Artwork.
// Also, the gallery page will display all images that are in the Artwork
// directory of the shapesnstuff bucket.
$(document).ready(function() {

  $('#galleryPost').click(function() {
    var canvas = document.getElementById("artboard");
    var dataUrl = canvas.toDataURL("image/png").atob();
    console.log(dataUrl);
    });

})
