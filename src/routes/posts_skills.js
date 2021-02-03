const router = require("express").Router();

module.exports = (db) => {
  router.get("/posts_skills", (req, res) => {
    //I need the params here
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
    const { post_id, skill_id } = req.body;
    const params = [post_id, skill_id];
    db.query(
      `
      insert into posts_skills
      (post_id,db_skills_id)
      values
      ($1,$2);
      `,
      params
    ).then((data) => {
      res.json(data.rows);
    });
  });

  return router;
};
