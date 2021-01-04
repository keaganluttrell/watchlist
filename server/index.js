const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const db = Promise.promisifyAll(require('./db.js'));

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// ROUTES ///////

// when a new item is added or deleted update for you list with several selections
// based on their choices and send it back with the data
app.get('/yourList', (req, res) => {
  db.getAll()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
});

app.post('/yourList', (req, res) => {
  delete req.body.genre_ids;
  db.addOne(req.body)
    .then(() => db.getOne(req.body.id))
    .then((movie) => res.status(201).send(movie))
    .catch(err => res.status(400).send(err));
});

app.delete('/yourList/:id', (req, res) => {
  db.removeOne(req.params.id)
    .then(() => db.getAll())
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(400).send(err) });
});
// ROUTES ///////

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});



