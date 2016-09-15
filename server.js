const express = require('express');

var notes = require('./routes/notes');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use('/api', notes);

if ( app.get('env') !== 'development' ) {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
