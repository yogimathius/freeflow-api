const router = require("express").Router();

module.exports = (db) => {
  router.get("/helped_points", (req, res) => {
    db.query(
      `
      SELECT helped_id, users.id, username, avatar, SUM(helped_rating) as helpedRating, users.active from users JOIN experiences ON users.id = helped_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, helped_id, avatar, users.id
      ORDER BY helped_id;
		`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/helped_points/:id", (req, res) => {
    const queryParams = [4];
    db.query(
      `
      SELECT SUM(helped_rating) as helpedRating
      FROM experiences
      JOIN users ON helped_id = users.id
      WHERE helped_id = $1;
      `,
      queryParams
    ).then((data) => {
      res.json(data.rows);
      // console.log("data from users", data.rows);
    });
  });

  return router;
};
