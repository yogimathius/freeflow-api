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

  // router.post("/posts", (req, res) => {
  //   const queryString = `
  //   INSERT INTO
  //   posts
  //   (owner_id, text_body, time_posted, is_mentor, is_student, active)
  //   VALUES
  //     ()
  // `;
  //   db.query(queryString, queryParams).then((data) => {
  //     res.json(data.rows);
  //   });
  // });

  return router;
};
