const router = require("express").Router();

module.exports = (db) => {
  router.get("/student_points", (req, res) => {
    db.query(
      `
      SELECT username, avatar, SUM(student_rating) as studentRating from users JOIN tutor_experiences ON users.id = student_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, student_id, avatar
      ORDER BY username;
		`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
