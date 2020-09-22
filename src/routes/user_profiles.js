const router = require('express').Router();

module.exports = db => {
  router.get('/user_profiles', (req, res) => {
    db.query(`SELECT * FROM user_profiles;`)
      .then((data) => {
        res.json(data.rows)
      });
  });

  return router;
}