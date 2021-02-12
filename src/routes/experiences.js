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

    const tutorExperienceID = req.body.tutorSessionID;
    const dateNow = new Date().toISOString();
    console.log('datanow', dateNow)

    // console.log(tutorExperienceID);

    db.query(`
      UPDATE experiences
      SET date_accepted = $2,
        status = 'in-progress'
      WHERE id = $1
      RETURNING *;
    `, [tutorExperienceID, dateNow])
      .then(data => {
        res.json(data.rows[0]);
      })
  });

  router.put('/experiences/delete', (req, res) => {

    const experienceId = req.body;
    // console.log(tutorExperienceID);

    db.query(`
      DELETE FROM experiences
      WHERE id = $1
      RETURNING *;
    `, [experienceId])
      .then(data => {
        console.log("success in delete experience: ", data.rows[0]);
        res.json(data.rows[0]);
      })
  });

  router.put('/experiences/complete', (req, res) => {

    const { tutorSessionID, ishelper, rating, comments } = req.body;
    const dateNow = new Date().toISOString();
    console.log('datEnow', dateNow)
    console.log(tutorSessionID);
    console.log(ishelper);
    console.log(rating);
    console.log(comments);

    let helperRating, helperComments, helpedRating, helpedComments;

    if (ishelper) {
      helperRating = rating;
      helperComments = comments;
      helpedRating = null;
      helpedComments = null;
    } else {
      helperRating = null;
      helperComments = null;
      helpedRating = rating;
      helpedComments = comments;
    }

    db.query(`
      UPDATE experiences
      SET date_completed = $2,
        helper_rating = $3,
        helper_comments = $4,
        helped_rating = $5,
        helped_comments = $6,
        status = 'completed'
      WHERE id = $1
      RETURNING *;
    `, [tutorSessionID, dateNow, helperRating, helperComments, helpedRating, helpedComments])
      .then(data => {
        res.json(data.rows[0]);
      })
  });


  router.put('/experiences/complete-other', (req, res) => {

    const { ishelperRating, rating, comments, tutorSessionID } = req.body;
    console.log(ishelperRating, rating, comments, tutorSessionID);

    if (ishelperRating) {

      db.query(`
        UPDATE experiences
        SET helper_rating = $2,
          helper_comments = $3
        WHERE id = $1
        RETURNING *;
      `, [tutorSessionID, rating, comments])
        .then(data => {
          res.json(data.rows[0]);
        })

    } else {
      db.query(`
        UPDATE experiences
        SET helped_rating = $2,
          helped_comments = $3
        WHERE id = $1
        RETURNING *;
      `, [tutorSessionID, rating, comments])
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


  return router;
};
