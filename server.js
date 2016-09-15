const express = require('express');

var notes = require('./routes/notes');
var { Notes } = require('./models/notes');
var { Users } = require('./models/users');

const app = express();

app.set('port', (process.env.PORT || 3001));

let db = {};
let users = new Users(db);

// Middleware to give requests access to the Users and Notes models.
app.use((req, res, next) => {
  req.notes = notes;
  req.users = users;
  next();
});

app.use('/api', notes);

if ( app.get('env') !== 'development' ) {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
