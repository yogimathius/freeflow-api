const { text } = require("express");
const router = require("express").Router();
module.exports = (db) => {
  router.get("/posts", (req, res) => {
    db.query(
      `
      SELECT posts.id as post_id, owner_id, text_body, time_posted, status_field, posts.active, avatar, username, users.active,name,stack_preferences.id as stack_id
      FROM posts
      JOIN user_profiles ON user_profiles.id = owner_id
      JOIN users on users.id = owner_id
      JOIN  posts_stacks on posts_stacks.post_id=posts.id JOIN stack_preferences on stack_preferences.id = posts_stacks.stack_preference_id
      GROUP BY owner_id, posts.id, user_profiles.id, users.id,name,stack_preferences.id
      ORDER BY time_posted DESC;
      `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  // router.get("/posts/:id", (req, res) => {
  //   const queryParams = [4];
  //   db.query(
  //     `
  //   SELECT active, is_mentor,is_student,owner_id,text_body,time_posted
  //   FROM posts
  //   WHERE owner_id = $1;`,
  //     queryParams
  //   )
  //     .then((data) => {
  //       res.json(data.rows);
  //     })
  //     .catch((err) => {
  //       console.log("user-profile api", err);
  //     });
  // });
  router.post("/posts", (req, res) => {
    const {
      owner_id,
      text_body,
      time_posted,
      is_mentor,
      is_student,
      active,
    } = req.body.newPost;
    const param = [
      owner_id,
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
      //console.log(data.rows);
      res.json(data.rows[0]);
    });
    // .catch((err) => {
    //   console.log("what the heck", err);
    //   res.status(500).send("bad juju on the DB I guess");
    // });
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
    console.log(req.query);
    const { post_id } = req.query;

    db.query(
      `
      DELETE FROM posts
      WHERE id = $1
      `,
      [post_id]
    ).then((data) => {
      res.json(data.rows[0]);
    });
  });
  return router;
};
