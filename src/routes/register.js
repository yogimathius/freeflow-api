const router = require('express').Router();

module.exports = (db) => {
  router.get('/register', (req, res) => {

    db.query(`
      SELECT * FROM avatars;
    `)
      .then((data) => {
        res.json(data.rows);
      })

  });

  return router;
}