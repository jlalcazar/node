// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

AWS.config.update({accessKeyId: '', secretAccessKey: ''});
//AWS.config.update({region: 'us-west-1'});

// Create an S3 client
var s3 = new AWS.S3();

var params = {
  Bucket: 'ehl1',
  Key: 'hello_world.txt',
  MFA: '',
  VersionId: 'null'
};
s3.deleteObject(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

