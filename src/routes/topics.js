const router = require("express").Router();

module.exports = (db) => {
  router.get("/topics", (req, res) => {
    db.query(
      `
      SELECT * FROM topics;
      `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/topics", (req, res) => {
    // console.log("WHAT");
    const { user_id, types_id, skill_category_id } = req.body;
    const params = [ user_id, types_id, skill_category_id ];
    db.query(
      `insert into topics
      ( users_id, types_id, skill_category_id )
    values
      ($1, $2, $3);`,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.delete("/topics", (req, res) => {
    const { user_id, type_id, skill_category_id } = req.query;

    const params = [user_id, type_id, skill_category_id];

    db.query(
      `
      DELETE FROM topics
      WHERE user_id = $1
      AND type_id = $2
      AND skill_category_id = $3;
      `,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
