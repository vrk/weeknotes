const express = require('express');
var path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3001));

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

console.log(path.join(__dirname, 'client/build'));
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
