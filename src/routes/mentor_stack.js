const router = require("express").Router();

module.exports = (db) => {
  router.get("/mentor_stack", (req, res) => {
    db.query(
      `SELECT user_id, name FROM mentor_stack GROUP BY mentor_stack.user_id, mentor_stack.name;`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/mentor_stack", (req, res) => {
    // console.log("WHAT");
    const { user_id, name } = req.body;
    const params = [user_id, name];
    db.query(
      `insert into mentor_stack
      (user_id, name)
    values
      ($1,$2);`,
      params
    ).then((data) => {
      res.json(data.rows[0]);
    });
  });

  router.delete("/mentor_stack", (req, res) => {
    const { user_id, name } = req.query;

    const params = [user_id, name];

    db.query(
      `
      DELETE FROM mentor_stack
      WHERE user_id = $1
      AND name = $2;
      `,
      params
    ).then((data) => {
      res.json(data.rows[0]);
    });
  });

  router.get("/mentor_stack/:id", (req, res) => {
    // const queryString = ;
    const queryParams = [4];
    db.query(
      `SELECT *
    FROM mentor_stack 
    where user_id = $1`,
      queryParams
    ).then((data) => {
      res.json(data.rows);
      console.log("data from users", data);
    });
  });

  return router;
};
