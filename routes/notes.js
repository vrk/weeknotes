var express = require('express');
var router = express.Router();

router.get('/notes', (req, res) => {
  let map = [];
  map[0] = {'yo': 'hello'};
  res.json(map);
});

  /*
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }

  var postData = querystring.stringify({
    id_token: param
  });

  var options = {
    hostname: 'www.googleapis.com',
    path: '/oauth2/v3/tokeninfo',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  var req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
  */
module.exports = router;
