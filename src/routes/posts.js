const { text } = require("express");

const router = require("express").Router();

module.exports = (db) => {
  router.get("/posts", (req, res) => {
    db.query(
      `
      SELECT users.id, text_body, time_posted, username, avatar, users.active
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
    SELECT active, is_mentor,is_student,owner_id,text_body,time_posted
    FROM posts
    WHERE owner_id = $1;`,
      queryParams
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log("user-profile api", err);
      });
  });

  router.post("/posts", (req, res) => {
    const {
      text_body,
      time_posted,
      is_mentor,
      is_student,
      active,
    } = req.body.post;
    const param = [
      4,
      text_body,
      time_posted,
      is_mentor,
      is_student,
      "active",
      active,
    ];
    // const queryString =;
    console.log(param);
    db.query(
      `INSERT INTO posts
    (owner_id, text_body, time_posted, is_mentor, is_student, status_field, active)
    VALUES
    ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *;`,
      param
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
