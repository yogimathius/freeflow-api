const router = require("express").Router();

module.exports = (db) => {
  router.get("/mentor_points", (req, res) => {
    db.query(
      `
      SELECT users.id, mentor_id, avatar,location, is_mentor, is_student, users.username, SUM(mentor_rating) as mentorRating from users JOIN tutor_experiences ON users.id = mentor_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY users.id, mentor_id, avatar,location, is_mentor, is_student, users.username
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
