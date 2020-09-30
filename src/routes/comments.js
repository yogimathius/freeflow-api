const router = require("express").Router();

module.exports = (db) => {
  router.get("/comments", (req, res) => {
    db.query(
      `
      SELECT post_id, commenter_id, text_body, users.username, avatar, users.active , username
      FROM comments 
      JOIN users ON commenter_id = users.id
      JOIN user_profiles ON users.id = user_id
      ORDER BY post_id;
      `
    ).then((data) => {
      // console.log("data in comments route: ", data.rows);
      res.json(data.rows);
    });
  });
  // router.get("/comments/:slug", (req, res) => {
  //   const slug = request.params.slug;
  //   db.query("SELECT * FROM comments WHERE slug = $1 ORDER BY date DESC", [
  //     slug,
  //   ]).then((data) => {
  //     res.json(data.rows);
  //   });
  // });

  router.post("/comments", (req, res) => {
    const { name, slug, text } = req.body;
    const parentCommentId = parseInt(req.body.parentCommentId);
    db.query(
      "INSERT INTO comments (name, slug, text, parent_comment_id) VALUES ($1, $2, $3, $4)",
      [name, slug, text, parentCommentId]
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.put("/comments/:id", (req, res) => {
    const { name, slug, text } = req.body;
    const id = parseInt(req.params.id);
    const parentCommentId = parseInt(req.body.parentCommentId);
    db.query(
      "UPDATE comments SET name = $1, slug = $2, text = $3, parent_comment_id = $4 WHERE id = $5",
      [name, slug, text, parentCommentId, id],
      (error) => {
        if (error) {
          throw error;
        }
        res.status(200).json({
          status: "success",
          message: `Comment modified with ID: ${id}`,
        });
      }
    );
  });

  router.delete("/comments/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query("DELETE FROM comments WHERE id = $1", [id], (error) => {
      if (error) {
        throw error;
      }
      res
        .status(200)
        .json({ status: "success", message: `Comment deleted with ID: ${id}` });
    });
  });
  return router;
};
