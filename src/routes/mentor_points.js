const router = require("express").Router();

module.exports = (db) => {
  router.get("/mentor_points", (req, res) => {
    db.query(
      `
      SELECT mentor_id, username, avatar, SUM(mentor_rating) as mentorRating from users JOIN tutor_experiences ON users.id = mentor_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, mentor_id, avatar
      ORDER BY username;
		`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.put("/mentor_points/", (req, res) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => res.status(500).json({}), 1000);
      return;
    }

    db.query(
      `
      UPDATE
      `
    );
  });
  return router;
};
