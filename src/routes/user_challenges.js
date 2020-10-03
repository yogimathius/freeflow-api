const router = require("express").Router();

module.exports = (db) => {
  router.get("/user_challenges", (req, res) => {
    db.query(`
      SELECT user_id, coding_challenge_id, completed, difficulty
      FROM user_challenges
      JOIN coding_challenges ON coding_challenge_id = coding_challenges.id;
    `)
      .then((data) => {
        res.json(data.rows);
      });
  });

  router.get('/challenges/all', (req, res) => {
    db.query(`
      SELECT * FROM coding_challenges;
    `)
      .then(data => {
        res.json(data.rows);
      })
  })

  return router;
};
