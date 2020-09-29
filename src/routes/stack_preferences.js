const router = require("express").Router();

module.exports = (db) => {
  router.get("/stack_preferences", (req, res) => {
    db.query(
      `
      SELECT * FROM stack_preferences;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
