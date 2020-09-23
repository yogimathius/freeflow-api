const router = require('express').Router();

module.exports = db => {
  router.get('/comments', (req, res) => {
    db.query(`SELECT * FROM comments;`)
      .then((data) => {
        res.json(data.rows)
      });
  });

  return router;
}