const router = require('express').Router();

module.exports = db => {
  router.get('/mentor_stack', (req, res) => {
    db.query(`SELECT * FROM mentor_stack;`)
      .then((data) => {
        res.json(data.rows)
      });
  });

  return router;
}