const router = require('express').Router();

module.exports = db => {
  router.get('/likes', (req, res) => {
    db.query(`SELECT * FROM likes;`)
      .then((data) => {
        res.json(data.rows)
      });
  });

  return router;
}