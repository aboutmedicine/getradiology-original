const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');
app = express();

app.use(history());
app.use(bodyParser.json());
app.use('/', expressStaticGzip(path.join(__dirname, '/dist'), {
  // index: false,
}));

Lesson = require('./server/models/lesson');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;


// Routes

app.get('/', (req, res) => {
  res.render('./client/index')
})

app.get('/lessons', (req, res) => {
  Lesson.getLessons((err, lessons) => {
    if (err) {
      throw err;
    }
    res.json(lessons)
  });
});

app.get('/lessons/:_id', (req, res) => {
  Lesson.getLessonBySlug(req.params._id, (err, lesson) => {
    if (err) {
      throw err;
    }
    res.json(lesson);
  });
});

app.post('/lessons', (req, res) => {
  var lesson = req.body;
  Lesson.addLesson(lesson, (err, lesson) => {
    if (err) {
      throw err;
    }
    res.json(lesson);
  });
});


const port = process.env.PORT || 80;
console.log(port)
app.listen(port);
