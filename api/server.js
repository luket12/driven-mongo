const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/driven-mongo', {useNewUrlParser: true});
const Note = require('./models/note');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
db.on('error', (err) => console.error.bind(console, 'connection error:' + err));

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/notes', (req, res) => {
  Note.find({}, function(err, notes) {
    if (err) {
      next(err)
    } else {
      return res.json({notes: notes});
    }
  });
});

app.post('/note/add', (req, res) => {
  const newNote = new Note({
    'title': req.body.title,
    'body': req.body.body,
  });
  newNote.save();
  return res.send({ message: 'note saved!', newNote });
});

app.listen(3000);

