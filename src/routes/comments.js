const router = require("express").Router();

module.exports = (db, updateComments) => {
  router.get("/comments", (req, res) => {
    db.query(
      `
      SELECT comments.id, post_id, users.first_name, users.last_name, commenter_id, text_body, users.active, time_posted
      FROM comments 
      JOIN users ON commenter_id = users.id
      JOIN user_profiles ON users.id = user_id
      ORDER BY post_id;
      `
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.error("bad juju on comments DB", err);
        res.status(500).send("bad juju on comments DB");
      });
  });

  router.post("/comments", (req, res) => {
    console.debug(req.body);
    const { post_id, commenter_id, text_body, time_posted } = req.body;
    const param = [post_id, commenter_id, text_body, time_posted];
    db.query(
      `INSERT INTO comments (post_id, commenter_id, text_body, time_posted) VALUES ($1, $2, $3, $4)
      RETURNING *`,
      param
    )
      .then((data) => {
        console.debug("data in route: ", data.rows[0]);
        res.json(data.rows[0]);
        setTimeout(() => {
          updateComments(Number(post_id), Number(commenter_id), text_body);
        }, 1000);
      })
      .catch((err) => {
        console.error("bad juju on comments DB", err);
        res.status(500).send("bad juju on comments DB");
      });
  });

  router.put("/comments", (req, res) => {
    console.debug("req.body: ", req.body);
    const { post_id, commenter_id, text_body } = req.body;
    console.debug(post_id, commenter_id, text_body);
    const params = [post_id, commenter_id, text_body];
    db.query(
      "UPDATE comments SET text_body = $3 WHERE post_id = $1 AND commenter_id = $2",
      params)
      .then((data) => {
        console.debug("success in update comments! ", data);
        res.json(data.rows)
      })
      .catch((err) => {
        console.error("bad juju on update comments DB", err);
        res.status(500).send("bad juju on update comments DB");
      });
  });

  router.delete("/comments", (req, res) => {
    console.debug("req.body", req.body, req.query);
    const query = JSON.parse(req.query.removeComment);

    const { post_id, commenter_id, id } = query;
    const params = [post_id, commenter_id, id];
    console.debug("params in delete comment post: ", params);

    db.query(
      `
      DELETE FROM comments 
      WHERE post_id = $1 AND commenter_id = $2 AND id = $3;
      `,
      params
    )
      .then((data) => {
        console.debug("data rows in comment post: ", data);
        res.json(data.rows); // jeremy sez: why return the whole array?
      })
      .catch((err) => {
        console.error("bad juju on comments DB", err);
        res.status(500).send("bad juju on comments DB");
      });
  });
  return router;
};
