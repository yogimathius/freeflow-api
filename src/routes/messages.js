const router = require('express').Router();

module.exports = db => {
  router.get('/messages', (req, res) => {
    db.query(`SELECT * FROM messages;`)
      .then((data) => {
        res.json(data.rows)
      });
  });

  return router;
}