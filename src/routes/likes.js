const router = require("express").Router();

module.exports = (db) => {
  router.get("/likes", (req, res) => {
    db.query(
      `SELECT post_id, SUM(liker_id) as sum from likes GROUP BY post_id;`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/likes", (req, res) => {
    const { post_id, liker_id } = req.body.params;
    const param = [post_id, liker_id];
    console.log("params in like post: ", param);
    db.query(
      `
      INSERT INTO likes (post_id, liker_id)
      VALUES ($1, $2) 
      RETURNING *;
      `,
      param
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
