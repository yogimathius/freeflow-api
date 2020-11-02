const router = require("express").Router();

module.exports = (db) => {
  router.get("/types", (req, res) => {
    db.query(
      `
      SELECT * FROM types;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/types", (req, res) => {
    // console.log("WHAT");
    const { name } = req.body;
    const params = [name];
    db.query(
      `insert into types
      (name)
    values
      ($1);`,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.delete("/types", (req, res) => {
    const { name } = req.query;

    const params = [name];

    db.query(
      `
      DELETE FROM types
      WHERE name = $1;
      `,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};


  