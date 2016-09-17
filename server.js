const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

var notes_router = require('./routes/notes');

const app = express();

if (app.get('env') === 'development') {
  const dotenv = require('dotenv');
  dotenv.config();
}

app.set('port', (process.env.PORT || 3100));

app.use('/api', notes_router);

if (process.env.BUILD_WEBPACK === 'true') {
  console.log(process.env.BUILD_WEBPACK);
  console.log(typeof process.env.BUILD_WEBPACK);
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
