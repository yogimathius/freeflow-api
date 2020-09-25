const router = require("express").Router();

module.exports = (db) => {
  router.get("/student_stack", (req, res) => {
    db.query(`SELECT * FROM student_stack;`).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/student_stack/:id", (req, res) => {
    // const queryString = ;
    const queryParams = [4];
    db.query(
      `SELECT *
    FROM student_stack 
    where user_profile_id = $1`,
      queryParams
    ).then((data) => {
      res.json(data.rows);
      console.log("data from users", data);
    });
  });

  return router;
};
