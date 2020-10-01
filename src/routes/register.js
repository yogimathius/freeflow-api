const router = require('express').Router();

module.exports = (db) => {
  router.get('/register/avatars', (req, res) => {

    db.query(`
      SELECT * FROM avatars;
    `)
      .then((data) => {
        res.json(data.rows);
      })

  });

  router.get('/register/random_usernames', (req, res) => {

    db.query(`
      SELECT * FROM random_usernames;
    `)
      .then((data) => {
        res.json(data.rows);
      })

  });

  return router;
}