const { text } = require("express");
const router = require("express").Router();
module.exports = (db) => {
  router.get("/posts", (req, res) => {
    db.query(
      `
      SELECT posts.id as id, owner_id, text_body, users.first_name, users.last_name, time_posted, status_field, posts.active, users.active, skill_ids
      FROM posts
      JOIN users on users.id = owner_id
      GROUP BY posts.id, users.id ORDER BY time_posted DESC;
      `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/posts", (req, res) => {
    const {
      owner_id,
      text_body,
      time_posted,
      is_helper,
      is_helped,
      active,
      skill_ids
    } = req.body;
    console.log(owner_id);

    const param = [
      owner_id,
      text_body,
      time_posted,
      is_helper,
      is_helped,
      "active",
      active,
      skill_ids
    ];

    console.log("data to be posted in posts: ", param);
    db.query(
      `INSERT INTO posts
    (owner_id, text_body, time_posted, is_helper, is_helped, status_field, active, skill_ids)
    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *;`,
      param
    ).then((data) => {
      console.log(data.rows[0]);
      res.json(data.rows[0]);
    })
    // .catch((err) => {
    //   console.log("what the heck", err);
    //   res.status(500).send("bad juju on the DB I guess");
    // })
  });

  router.put("/posts", (req, res) => {
    console.log("editing post", req.body);
    const { text_body, post_id } = req.body;
    const params = [text_body, post_id];
    db.query(
      `
      UPDATE posts
      SET text_body = $1
      WHERE id=$2
      RETURNING *;
      `,
      params
    ).then((data) => {
      res.json(data.rows[0]);
    });
  });

  router.delete("/posts", (req, res) => {
    console.log("query in delete", req.query);
    const { post_id } = req.query;

    db.query(
      `
      DELETE FROM posts
      WHERE id = $1
      RETURNING *
      `,
      [post_id]
    ).then((data) => {
      console.log(data.rows);
      res.json(data.rows[0]);
    });
  });
  return router;
};
