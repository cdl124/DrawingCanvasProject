var AWS = require('aws-sdk'); // Amazon Web Services storage
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var s3 = new AWS.S3();

var fs = require('fs');
var colorImg = fs.readFileSync('./img/colors.png');

/**
 * Don't hard-code your credentials!
 * Export the following environment variables instead:
 *
 * export AWS_ACCESS_KEY_ID='AKID'
 * export AWS_SECRET_ACCESS_KEY='SECRET'
 */

// Set your region for future requests.
AWS.config.region = 'us-west-2';

s3.upload({
  ACL: 'public-read',
  Bucket: 'shapesnstuff',
  Key: 'Artwork/colorImg2.png',
  Body: colorImg
}, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('Image put!');
  }
})

var url = s3.getSignedUrl('getObject', {Bucket: 'shapesnstuff', Key: 'Artwork/colorImg.png', Expires: 95395738});
console.log(url);

// s3.listObjects({Bucket: 'shapesnstuff', Prefix: 'Artwork/'}, function(err, data) {
//     if (err) {
//       console.log(err);
//       console.log(data);
//     } else {
//       console.log(data);
//     }
// });



// request.send();

app.listen(port, function() {
  console.log('Server started on port ' + port + '!')
})
