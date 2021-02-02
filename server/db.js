const mysql = require('mysql');
const Promise = require('bluebird');
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'watchlist'
})

db.connectAsync()
  .then(() => {
    console.log(`MySql connected to '${db.config.database}'`);
  })
  .catch((err) => console.log(err));

const getAll = () => {
  return db.queryAsync('select * from movie_list');
}

const getOne = (id) => {
  return db.queryAsync('SELECT * FROM movie_list WHERE id = ?', [id]);
}

const addOne = (movie) => {
  return db.queryAsync('INSERT INTO movie_list SET ?', movie)
}

const removeOne = (id) => {
  return db.queryAsync('DELETE FROM movie_list WHERE id = ?', [id]);
}



/////// METHODS //////////
module.exports = {
  getAll: getAll,
  getOne: getOne,
  addOne: addOne,
  removeOne: removeOne
};