const router = require("express").Router();

module.exports = (db) => {
  router.get("/likes", (req, res) => {
    db.query(
    `
      SELECT * FROM likes;
    `).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/likes", (req, res) => {
    console.debug("req.body", req.body);
    const { post_id, liker_id } = req.body;
    const param = [post_id, liker_id];
    console.debug("params in like post: ", param);

    db.query(
      `
      INSERT INTO likes (post_id, liker_id)
      VALUES ($1, $2) 
      RETURNING *;
      `,
      param
    )
      .then((data) => {
        console.debug("data rows in like post: ", data.rows);
        res.json(data.rows[0]); // jeremy sez: why return the whole array?
      })
      .catch((err) => {
        console.error("bad juju on likes DB", err);
        res.status(500).send("bad juju on likes DB");
      });
  });

  router.delete("/likes", (req, res) => {
    console.debug("query: ", req.query, "params: ", req.params, "body: ", req.body);
    const query = JSON.parse(req.query.removeLike);
    console.debug("req.body remove like", req.body);

    const { post_id, liker_id } = query;
    const params = [post_id, liker_id];
    console.debug("params in remove like post: ", params);

    db.query(
      `
      DELETE FROM likes 
      WHERE post_id = $1
      AND liker_id = $2;
      `,
      params
    )
      .then((data) => {
        console.debug("data rows in remove like post: ", data);
        res.json(data.rows[0]); // jeremy sez: why return the whole array?
      })
      .catch((err) => {
        console.error("bad juju on likes DB", err);
        res.status(500).send("bad juju on likes DB");
      });
  });

  return router;
};
