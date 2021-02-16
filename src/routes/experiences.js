const router = require("express").Router();

module.exports = (db) => {
  router.get("/experiences", (req, res) => {
    db.query(`
    SELECT experiences.*, CONCAT(u1.first_name, ' ', u1.last_name) as helper,
    CONCAT(u2.first_name, ' ', u2.last_name) as helped
    FROM experiences
    JOIN users u1 
      ON helper_id = u1.id
    JOIN users u2 
      ON helped_id = u2.id;
    `).then((data) => {
      res.json(data.rows);
    });
  });

  router.post('/experiences/new', (req, res) => {

    const { helper_id, helped_id, creator_id, helper, helped } = req.body;
    const dateNow = new Date().toISOString();
    const status = 'pending';
    console.log(dateNow);

    db.query(`
      INSERT INTO experiences
        (helper_id, helped_id, creator_id, date_initiated, status)
      VALUES
        ($1, $2, $3, $4, $5)
      RETURNING *;
    `, [helper_id, helped_id, creator_id, dateNow, status])
      .then(data => {
        console.log("success in add new experience: ", data.rows);
        data.rows[0].helper = helper;
        data.rows[0].helped = helped;
        res.json(data.rows[0]);
      })
  })

  router.put('/experiences/accept', (req, res) => {

    const experienceId = req.body.experienceId;
    const dateNow = new Date().toISOString();
    console.log('datenow', dateNow)

    // console.log(experienceId);

    db.query(`
      UPDATE experiences
      SET date_accepted = $2,
        status = 'in-progress'
      WHERE id = $1
      RETURNING *;
    `, [experienceId, dateNow])
      .then(data => {
        res.json(data.rows[0]);
      })
  });

  router.put('/experiences/complete', (req, res) => {

    const { experienceId, ishelper, comments } = req.body;
    console.log('datenow', dateNow)
    console.log(experienceId);
    console.log(ishelper);
    console.log(comments);

    let helperComments, helpedComments;

    if (ishelper) {
      helperComments = comments;
      helpedComments = null;
    } else {
      helperComments = null;
      helpedComments = comments;
    }

    db.query(`
      UPDATE experiences
      SET helper_comments = $2,
        helped_comments = $3,
        status = 'completed'
      WHERE id = $1
      RETURNING *;
    `, [experienceId, dateNow, helperComments, helpedComments])
      .then(data => {
        res.json(data.rows[0]);
      })
  });


  router.put('/experiences/complete-other', (req, res) => {

    const { ishelperRating, comments, experienceId } = req.body;
    const dateNow = new Date().toISOString();

    console.log(ishelperRating, rating, comments, experienceId);

    if (ishelperRating) {

      db.query(`
        UPDATE experiences
        SET helper_comments = $2,
        date_completed = $3
        WHERE id = $1
        RETURNING *;
      `, [experienceId, comments, dateNow])
        .then(data => {
          res.json(data.rows[0]);
        })

    } else {
      db.query(`
        UPDATE experiences
        SET helped_comments = $2
        WHERE id = $1
        RETURNING *;
      `, [experienceId, comments])
        .then(data => {
          res.json(data.rows[0]);
        })
    }
  })

  router.post('/experiences/unseen_count', (req, res) => {

    const { userID } = req.body;

    db.query(`
      SELECT COUNT(*)
      FROM experiences
      WHERE (helped_id = $1 OR helper_id = $1) AND creator_id <> $1 AND status = 'pending' AND receiver_seen = false;
    `, [userID])
      .then(data => {
        res.json(data.rows[0]);
      })
  })

  router.put('/experiences/see_all', (req, res) => {

    const { userID } = req.body;

    db.query(`
      UPDATE experiences
      SET receiver_seen = true
      WHERE (helped_id = $1 OR helper_id = $1) AND creator_id <> $1 AND status = 'pending'
      RETURNING *;
    `, [Number(userID)])
      .then(data => {
        res.json(data.rows[0]);
      })

  })


  router.delete('/experiences/delete', (req, res) => {
    console.log("req.body in delete: ". req);
    const { experienceId } = req.query;
    console.log("experience id in delete: ", experienceId);

    db.query(`
      DELETE FROM experiences
      WHERE id = $1
      RETURNING *;
    `, [experienceId])
      .then(data => {
        console.log("success in delete experience: ", data.rows);
        res.json(data.rows);
      })
  });

  return router;
};
