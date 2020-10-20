const router = require("express").Router();

module.exports = (db) => {
  router.get("/user_skills", (req, res) => {
    db.query(
      `SELECT user_id, name FROM user_skills GROUP BY user_skills.user_id, user_skills.name;`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/user_skills", (req, res) => {
    // console.log("WHAT");
    const { user_id, name } = req.body;
    const params = [user_id, name];
    db.query(
      `insert into user_skills
      (user_id, name)
    values
      ($1,$2);`,
      params
    ).then((data) => {
      res.json(data.rows[0]);
    });
  });

  router.delete("/user_skills", (req, res) => {
    const { user_id, name } = req.query;

    const params = [user_id, name];

    db.query(
      `
      DELETE FROM user_skills
      WHERE user_id = $1
      AND name = $2;
      `,
      params
    ).then((data) => {
      res.json(data.rows[0]);
    });
  });

  router.get("/user_skills/:id", (req, res) => {
    // const queryString = ;
    const queryParams = [4];
    db.query(
      `SELECT *
    FROM user_skills 
    where user_id = $1`,
      queryParams
    ).then((data) => {
      res.json(data.rows);
      console.log("data from users", data);
    });
  });

  return router;
};
