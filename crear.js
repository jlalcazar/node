// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

AWS.config.update({accessKeyId: 'AKIAJAYMHJ4MKXZWLSHA', secretAccessKey: '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'});
//AWS.config.update({region: 'us-west-1'});


// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName = 'node-sdk-sample-ehl'; //+ uuid.v4();
var keyName = 'hello_world.txt';


s3.createBucket({Bucket: bucketName}, function() {
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });
});
