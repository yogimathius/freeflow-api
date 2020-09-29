const router = require("express").Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    db.query(
      `
      SELECT SUM(student_rating) as studentRating, is_mentor, is_student
      FROM users 
      JOIN tutor_experiences ON users.id = mentor_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, avatar, location, users.id, is_mentor, is_student
      ORDER BY location, username;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
