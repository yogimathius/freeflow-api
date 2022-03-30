const router = require("express").Router();

module.exports = (db) => {
  router.get("/posts_skills", (req, res) => {
    db.query(
      `
      Select posts_skills.id AS id,
      name, db_skills_id, post_id from db_skills JOIN posts_skills on db_skills.id=posts_skills.db_skills_id;
      `
    ).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/posts_skills", (req, res) => {
    const { post_id, db_skills_id } = req.body;
    console.debug(req.body);
    const params = [post_id, db_skills_id ];
    console.debug("params in posts skills: ", params);
    db.query(
      `
      insert into posts_skills
      (post_id,db_skills_id)
      values
      ($1,$2);
      `,
      params
    ).then((data) => {
      console.debug("success in post skills post request!!");
      res.json(data.rows);
    }).catch((err) => {
      console.error("bad juju on post skills DB", err);
      res.status(500).send("bad juju on pst skills DB", err);

    });
  });

  return router;
};
