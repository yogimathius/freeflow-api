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

    const { tutorSessionID, isMentor, rating, comments } = req.body;
    const dateNow = new Date().toISOString();
    console.log('datEnow', dateNow)
    console.log(tutorSessionID);
    console.log(isMentor);
    console.log(rating);
    console.log(comments);

    let mentorRating, mentorComments, studentRating, studentComments;

    if (isMentor) {
      mentorRating = rating;
      mentorComments = comments;
      studentRating = null;
      studentComments = null;
    } else {
      mentorRating = null;
      mentorComments = null;
      studentRating = rating;
      studentComments = comments;
    }

    db.query(`
      UPDATE tutor_experiences
      SET date_completed = $2,
        mentor_rating = $3,
        mentor_comments = $4,
        student_rating = $5,
        student_comments = $6,
        status = 'completed'
      WHERE id = $1
      RETURNING *;
    `, [tutorSessionID, dateNow, mentorRating, mentorComments, studentRating, studentComments])
      .then(data => {
        res.json(data);
      })
  });

  router.post('/tutor_experiences/new', (req, res) => {

    const { mentorID, studentID, creatorID } = req.body;
    const dateNow = new Date().toISOString();
    const status = 'pending';
    console.log(dateNow);

    db.query(`
      INSERT INTO tutor_experiences
        (mentor_id, student_id, creator_id, date_initiated, status)
      VALUES
        ($1, $2, $3, $4, $5)
      RETURNING *;
    `, [mentorID, studentID, creatorID, dateNow, status])
      .then(data => {
        res.json(data);
      })

  })

  router.put('/tutor_experiences/complete-other', (req, res) => {

    const { isMentorRating, rating, comments, tutorSessionID } = req.body;
    console.log(isMentorRating, rating, comments, tutorSessionID);

    if (isMentorRating) {

      db.query(`
        UPDATE tutor_experiences
        SET mentor_rating = $2,
          mentor_comments = $3
        WHERE id = $1
        RETURNING *;
      `, [tutorSessionID, rating, comments])
        .then(data => {
          res.json(data)
        })

    } else {
      db.query(`
        UPDATE tutor_experiences
        SET student_rating = $2,
          student_comments = $3
        WHERE id = $1
        RETURNING *;
      `, [tutorSessionID, rating, comments])
        .then(data => {
          res.json(data)
        })
    }
  })

  router.post('/tutor_experiences/unseen_count', (req, res) => {

    const { userID } = req.body;

    db.query(`
      SELECT COUNT(*)
      FROM tutor_experiences
      WHERE (student_id = $1 OR mentor_id = $1) AND creator_id <> $1 AND status = 'pending' AND receiver_seen = false;
    `, [userID])
      .then(data => {
        res.json(data.rows);
      })
  })

  router.put('/tutor_experiences/see_all', (req, res) => {

    const { userID } = req.body;

    db.query(`
      UPDATE tutor_experiences
      SET receiver_seen = true
      WHERE (student_id = $1 OR mentor_id = $1) AND creator_id <> $1 AND status = 'pending'
      RETURNING *;
    `, [Number(userID)])
      .then(data => {
        res.json(data.rows);
      })

  })


  return router;
};
