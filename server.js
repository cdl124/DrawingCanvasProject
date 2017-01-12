var AWS = require('aws-sdk'); // Amazon Web Services storage

var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var s3 = new AWS.S3();
var bodyParser = require('body-parser');

AWS.config.region = 'us-west-2';


app.post('/imgUpload', bodyParser.text({extended: false,type: 'urlencoded'}), function(req, res) {

  s3.upload({
    ACL: 'public-read',
    Bucket: 'shapesnstuff',
    Key: 'Artwork/image.png',
    Body: new Buffer(req.body.replace(/^data:image\/(png|jpg);base64,/, ''), 'base64')
  }, function(err, data) {
    if (err) {
      throw new Error ('Error uploading data: ', err);
    } else {
      res.send(data);
    }
  });
});

app.get('/art', function(req, res) {
  s3.listObjects({Bucket: 'shapesnstuff', Prefix: 'Artwork/'}, function(err, data) {
    if (err) {
      throw new Error('Error obtaining images: ', err);
    } else {
      res.send(data);
    }
  });
});

app.use(express.static(__dirname));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
