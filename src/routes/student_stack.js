const router = require("express").Router();

module.exports = (db) => {
  router.get("/student_stack", (req, res) => {
    db.query(`SELECT * FROM student_stack;`).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
