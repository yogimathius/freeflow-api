const router = require('express').Router();

module.exports = db => {
  router.get('/posts', (req, res) => {
    db.query(`SELECT * FROM posts;`)
      .then((data) => {
        res.json(data.rows)
      });
  });

  return router;
}