const router = require("express").Router();

module.exports = (db) => {
  router.get("/student_points", (req, res) => {
    db.query(
      `
      SELECT student_id, username, avatar, SUM(student_rating) as studentRating from users JOIN tutor_experiences ON users.id = student_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, student_id, avatar
      ORDER BY student_id;
		`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/student_points/:id", (req, res) => {
    const queryParams = [4];
    db.query(
      `
      SELECT SUM(student_rating) as studentRating
      FROM tutor_experiences
      JOIN users ON student_id = users.id
      WHERE student_id = $1;
      `,
      queryParams
    ).then((data) => {
      res.json(data.rows);
      // console.log("data from users", data.rows);
    });
  });

  return router;
};
