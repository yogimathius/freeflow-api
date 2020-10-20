const router = require("express").Router();

module.exports = (db) => {
  router.get("/helper_points", (req, res) => {
    db.query(
      `
      SELECT users.id, helper_id, avatar, location, is_helper, is_helped, users.username, SUM(helper_rating) as helperRating, users.active
      FROM users 
      JOIN experiences ON users.id = helper_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY users.id, helper_id, avatar,location, is_helper, is_helped, users.username, users.id
      ORDER BY username;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/helper_points/:id", (req, res) => {
    const queryParams = [4];
    db.query(
      `
      SELECT SUM(helper_rating) as helperRating
      FROM experiences
      JOIN users ON helper_id = users.id
      WHERE helper_id = $1;
      `,
      queryParams
    ).then((data) => {
      res.json(data.rows);
      // console.log("data from users", data.rows);
    });
  });

  router.put("/helper_points/", (req, res) => {
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
