const router = require("express").Router();

module.exports = (db) => {
  router.get("/skill_categories", (req, res) => {
    db.query(
      `
      SELECT * FROM skill_categories;
      `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/skill_categories", (req, res) => {
    // console.log("WHAT");
    const { name } = req.body;
    const params = [name];
    db.query(
      `insert into skill_categories
      (name)
    values
      ($1);`,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.delete("/skill_categories", (req, res) => {
    const { name } = req.query;

    const params = [ name ];

    db.query(
      `
      DELETE FROM skill_categories
      WHERE name = $1;
      `,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};


  