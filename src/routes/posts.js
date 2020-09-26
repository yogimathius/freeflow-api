const router = require("express").Router();

module.exports = (db) => {
  router.get("/posts", (req, res) => {
    db.query(`SELECT * FROM posts;`).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/posts/:id", (req, res) => {
    const queryParams = [5];
    db.query(
      `
    SELECT active, is_mentor,is_student,owner_id,text_body,time_posted
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

  router.post("/posts", (req, res) => {
    console.log(req.body.post);
    const {
      text_body,
      time_posted,
      is_mentor,
      is_student,
      active,
    } = req.body.post;
    console.log(text_body, time_posted, is_mentor, is_student, active);
    const queryString = `
      INSERT INTO posts
      (owner_id, text_body, time_posted, is_mentor, is_student,active)
      VALUES
      ($1,$2,$3,$4,$5,$6)
    `;
    db.query(queryString, [
      4,
      active,
      text_body,
      time_posted,
      is_mentor,
      is_student,
    ])
      .then((data) => {
        res.json(data.rows);
      })
      .catch((errr) => {
        console.log("ERRRROOOOO");
      });
  });

  return router;
};
