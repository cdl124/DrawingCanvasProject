var AWS = require('aws-sdk'); // Amazon Web Services storage
AWS.config.awsKeys = require('./awskey.js');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var s3 = new AWS.S3();
var fs = require('fs');

// var colorImg = fs.readFileSync('./img/colors.png');
var bodyParser = require('body-parser');

// Array to push saved artworks into for display in the gallery.
var artworkArray = [];

// Set your region for future requests.
AWS.config.region = 'us-west-2';


app.post('/imgUpload', bodyParser.text({extended: false,type: 'urlencoded'}), function(req, res) {
  console.log(req.body);

  s3.upload({
    ACL: 'public-read',
    Bucket: 'shapesnstuff',
    Key: 'Artwork/image' + artworkArray.length + '.png',
    Body: new Buffer(req.body.replace(/^data:image\/(png|jpg);base64,/, ''), 'base64')
  }, function(err, data) {
    if (err) {
      console.log(err);
      console.log('Error uploading data: ' + data);
    } else {
      artworkArray.push(s3.Key);
      console.log('New image put!');
    }
  })
})

app.get('/art', function(req, res) {
  s3.listObjects({Bucket: 'shapesnstuff', Prefix: 'Artwork/'}, function(err, data) {
      if (err) {
        console.log(err);
        console.log(data);
      } else {
        console.log(data);
        res.send(data);
      }
  });
});

// request.send();

app.use(express.static(__dirname));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!')
})
