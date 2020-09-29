const router = require("express").Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    db.query(
      `
      SELECT users.id, avatar, location, is_mentor, is_student, users.username, SUM(mentors.mentor_rating) as mentorRating, SUM(students.student_rating) as studentrating 
      FROM users 
      LEFT JOIN tutor_experiences as mentors ON users.id = mentors.mentor_id 
      LEFT JOIN tutor_experiences as students ON users.id = students.student_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, avatar, location, users.id, is_mentor, is_student
      ORDER BY users.id, location, username;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
