const router = require("express").Router();

module.exports = (db) => {
  router.get("/user_profiles", (req, res) => {
    db.query(
      `
      SELECT users.id,avatar,location, first_name, last_name, is_helper, is_helped, users.username
      FROM user_profiles
      JOIN users on  user_profiles.user_id = users.id;
    `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.put("/user_profiles/edit", (req, res) => {
    console.log("from update users", req.body);
    const { id, location, avatar } = req.body;
    const params = [id, location, avatar];
    db.query(
      `
      update user_profiles
      set location = $2,
       avatar = $3
      where user_id = $1;
    `,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.get("/user_profiles/helper_points/:id", (req, res) => {
    // ********
    // const userId = req.body.userId;
    // ********

    // hard coded for now...
    const userId = 4;
    // const userId = req.params;    // wuldn't this b beter?

    db.query(
      `
      SELECT SUM(helper_rating) as helperRating
      FROM experiences
      JOIN users ON helper_id = users.id
      WHERE users.id = $1;
    `,
      [userId]
    ).then((data) => {
      // console.log('helperPoints', data.rows)
      // console.log(userId);
      res.json(data.rows);
    });
  });

  router.get("/user_profiles/helped_points/:id", (req, res) => {
    // ********
    // const userId = req.body.userId;
    // ********

    // hard coded for now...
    const userId = 4;

    db.query(
      `
      SELECT SUM(student_rating) as studentRating
      FROM experiences
      JOIN users ON helped_id = users.id
      WHERE users.id = $1;
    `,
      [userId]
    ).then((data) => {
      // console.log('studentPoints', data.rows)
      // console.log(userId);
      res.json(data.rows);
    });
  });

  return router;
};
