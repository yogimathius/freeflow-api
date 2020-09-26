const router = require("express").Router();

module.exports = (db) => {
  router.get("/mentor_points", (req, res) => {
    db.query(
      `
      SELECT mentor_id, username, avatar, SUM(mentor_rating) as mentorRating 
      FROM users 
      JOIN tutor_experiences ON users.id = mentor_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, mentor_id, avatar
      ORDER BY mentor_id;
		`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/mentor_points/:id", (req, res) => {
    const queryParams = [4];
    db.query(
      `
      SELECT SUM(mentor_rating) as mentorRating
      FROM tutor_experiences
      JOIN users ON mentor_id = users.id
      WHERE mentor_id = $1;
      `,
      queryParams
    ).then((data) => {
      res.json(data.rows);
      // console.log("data from users", data.rows);
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
