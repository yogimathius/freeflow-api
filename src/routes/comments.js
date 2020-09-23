const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("route is working");
    db.query(`SELECT * FROM comments;`).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
