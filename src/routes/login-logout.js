const router = require('express').Router();

module.exports = (db) => {
  router.post('/login', (req, res) => {

    console.log(req.body);

    const userID = Number(req.body.userID);

    db.query(`
      SELECT users.id, username, avatar
      FROM users
      JOIN user_profiles ON users.id = user_id
      WHERE users.id = $1;
    `, [userID])
      .then(data => {
        res.json(data.rows);
      })
      .catch(err => {
        console.log(err);
      })

  });

  return router;
}