'use strict';

exports.handler = function (event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: `<h1>Hello, world!</h1>
    <p>This page is from Lambda function through API Gateway.</p>`
  };

  callback(null, response);
}