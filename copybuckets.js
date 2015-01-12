// Load the SDK and UUID
var AWS = require('aws-sdk');

AWS.config.update({accessKeyId: 'AKIAJAYMHJ4MKXZWLSHA', secretAccessKey: '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'});
//AWS.config.update({region: 'us-west-1'});

// Create an S3 client
var s3 = new AWS.S3();

var params = {
  Bucket: 'ehl3',
  Key: 'crypto.pdf',
  CopySource: 'ehl1/ejemplo.pdf',
  ACL: 'public-read',
  ServerSideEncryption: 'AES256'
};

s3.copyObject(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
