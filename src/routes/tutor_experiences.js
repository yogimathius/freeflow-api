const router = require("express").Router();

module.exports = (db) => {
  router.get("/tutor_experiences", (req, res) => {
    db.query(`
    SELECT *
    FROM tutor_experiences;
    `).then((data) => {
      res.json(data.rows);
    });
  });

  router.put('/tutor_experiences/accept', (req, res) => {

    const tutorExperienceID = req.body.tutorSessionID;
    const dateNow = new Date().toISOString();
    console.log('datanow', dateNow)

    // console.log(tutorExperienceID);

    db.query(`
      UPDATE tutor_experiences
      SET date_accepted = $2,
        status = 'in-progress'
      WHERE id = $1
      RETURNING *;
    `, [tutorExperienceID, dateNow])
      .then(data => {
        res.json(data);
      })
  });

  router.put('/tutor_experiences/delete', (req, res) => {

    const tutorExperienceID = req.body.tutorSessionID;
    // console.log(tutorExperienceID);

    db.query(`
      DELETE FROM tutor_experiences
      WHERE id = $1
      RETURNING *;
    `, [tutorExperienceID])
      .then(data => {
        res.json(data);
      })
  });

  router.put('/tutor_experiences/complete', (req, res) => {

    const tutorExperienceID = req.body.tutorSessionID;
    const dateNow = new Date().toISOString();
    console.log('datanow', dateNow)
    // console.log(tutorExperienceID);

    db.query(`
      UPDATE tutor_experiences
      SET date_completed = $2,
        status = 'completed'
      WHERE id = $1
      RETURNING *;
    `, [tutorExperienceID, dateNow])
      .then(data => {
        res.json(data);
      })
  });

  return router;
};
