const router = require("express").Router();

module.exports = (db) => {
  router.get("/db_skills", (req, res) => {
    db.query(
      `
      SELECT * FROM db_skills;
    `
    ).then((data) => {
      console.log("data in db skills: ", data.rows);
      res.json(data.rows);
    });
  });

  return router;
};
