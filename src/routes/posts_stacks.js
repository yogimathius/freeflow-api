const router = require("express").Router();

module.exports = (db) => {
  router.get("/posts_stacks", (req, res) => {
    //I need the params here
    db.query(
      `
      Select name, stack_preference_id, post_id from stack_preferences JOIN posts_stacks on stack_preferences.id=posts_stacks.stack_preference_id;
      `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/posts_stacks", (req, res) => {
    const { post_id, stack_id } = req.body;
    const params = [post_id, stack_id];
    db.query(
      `
      insert into posts_stacks
      (post_id,stack_preference_id)
      values
      ($1,$2);
      `,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
