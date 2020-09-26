const router = require("express").Router();

module.exports = (db) => {
  router.get("/posts", (req, res) => {
    db.query(
      `
      SELECT text_body, time_posted, username, avatar, users.active
      FROM posts
      JOIN user_profiles ON user_profiles.id = owner_id
      JOIN users on users.id = owner_id
      GROUP BY owner_id, posts.id, user_profiles.id, users.id
      ORDER BY time_posted;
      `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/posts/:id", (req, res) => {
    const queryParams = [4];
    db.query(
      `
    SELECT *
    FROM posts
    WHERE owner_id = $1`,
      queryParams
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log("user-profile api", err);
      });
  });

  router.post("/posts/new", (req, res) => {
    const queryString = `
    INSERT INTO
    posts
    ()
    VALUES
      ()
    RETURNING
      stories.id as story_id
  `;
    const queryParams = 1;
    db.query(queryString, queryParams).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
