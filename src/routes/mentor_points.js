const router = require("express").Router();

module.exports = (db) => {
  router.get("/mentor_points", (req, res) => {
    // ********
    // const userId = req.body.userId;
    // ********

    // hard coded for now...

    db.query(
      `
      SELECT username, SUM(student_rating) as mentorRating from users JOIN tutor_experiences ON users.id = mentor_id GROUP BY username;
		`
    ).then((data) => {
      res.json(data.rows);
    });
  });
  return router;
};
