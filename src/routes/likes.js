const router = require("express").Router();

module.exports = (db) => {
  router.get("/likes", (req, res) => {
    db.query(`SELECT post_id, liker_id from likes;`).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/likes", (req, res) => {
    console.log("req.body", req.body);
    const { post_id, liker_id } = req.body.newLike;
    const param = [post_id, liker_id];
    console.log("params in like post: ", param);

    db.query(
      `
      INSERT INTO likes (post_id, liker_id)
      VALUES ($1, $2) 
      RETURNING *;
      `,
      param
    )
      .then((data) => {
        console.log("data rows in like post: ", data.rows);
        res.json(data.rows); // jeremy sez: why return the whole array?
      })
      .catch((err) => {
        console.log("bad juju on likes DB", err);
        res.status(500).send("bad juju on likes DB");
      });
  });

  router.delete("/likes", (req, res) => {
    const query = JSON.parse(req.query.removeLike);
    // console.log("req.body", req.body);

    const { post_id, liker_id } = query;
    const params = [post_id, liker_id];
    console.log("params in like post: ", params);

    db.query(
      `
      DELETE FROM likes 
      WHERE post_id = $1
      AND liker_id = $2;
      `,
      params
    )
      .then((data) => {
        console.log("data rows in like post: ", data);
        res.json(data.rows); // jeremy sez: why return the whole array?
      })
      .catch((err) => {
        console.log("bad juju on likes DB", err);
        res.status(500).send("bad juju on likes DB");
      });
  });

  return router;
};
