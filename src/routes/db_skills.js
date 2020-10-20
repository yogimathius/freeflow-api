const router = require("express").Router();

module.exports = (db) => {
  router.get("/db_skills", (req, res) => {
    db.query(
      `
      SELECT * FROM db_skills;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
