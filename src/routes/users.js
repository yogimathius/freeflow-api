const router = require("express").Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    db.query(
      `
      SELECT users.id, users.first_name, users.last_name, location, users.username, COUNT(helpers.helper_id) as helperRating, COUNT(helped.helped_id) as helpedRating, users.active, profession, tagline
      FROM users 
      LEFT JOIN experiences as helpers ON users.id = helpers.helper_id 
      LEFT JOIN experiences as helped ON users.id = helped.helped_id 
      JOIN user_profiles ON user_profiles.id = users.id
      GROUP BY username, avatar, location, users.id, is_helper, is_helped, profession, tagline
      ORDER BY users.id, location, username;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.put("/users/edit", (req, res) => {
    console.debug("from update users", req.body);
    const { id, username } = req.body;
    const params = [id, username];
    db.query(
      `
      update users
     set username = $2
     where id = $1;
    `,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });
  return router;
};
