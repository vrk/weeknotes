const express = require('express');

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/notes', (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }
  
  let map = [];
  map[0] = {'yo': 'hello'};
  res.json(map);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
