const router = require('express').Router();

module.exports = db => {
  router.get('/conversations/:id', (req, res) => {
    const userId = req.params.id;

    db.query(`
      SELECT 
        messages.id AS id,
        u1.id AS senderID,
        concat(u1.first_name, ' ', u1.last_name) AS sender,
        u2.id AS receiverID,
        concat(u2.first_name, ' ', u2.last_name) AS receiver
      FROM messages
        JOIN users u1 ON u1.id = sender_id
        JOIN users u2 ON u2.id = receiver_id
      WHERE receiver_id = $1 OR sender_id = $1
      GROUP BY u1.id, u2.id, sender, receiver;
      `, [userId])
      .then(({rows: messages}) => {
        console.log('message gets hit: ', messages);
        res.json(
          messages
        )
      });
  });

  router.get('/messages/:id', (req, res) => {
    console.log(req.params.id);
    const userId = req.params.id;

    db.query(`
      SELECT
      ROW_NUMBER() OVER(ORDER BY u1.id) AS id,
        messages.id as id,
        u1.id AS senderID,
        concat(u1.first_name, ' ', u1.last_name) AS sender,
        u2.id AS receiverID,
        concat(u2.first_name, ' ', u2.last_name) AS receiver,
        text_body, time_sent, messages.active, messages.receiver_read
      FROM messages
        JOIN users u1 ON u1.id = sender_id
        JOIN users u2 ON u2.id = receiver_id
      WHERE receiver_id = $1 OR sender_id = $1;
    `, [userId])
      .then(data => {
        res.json(data.rows);
      });
  })

  router.post('/messages/new', (req, res) => {

    const { receiverID, textInput, senderID, sender, receiver } = req.body;
    


    const dateNow = new Date().toISOString();
    console.log(dateNow);

    db.query(`
      INSERT INTO messages
        (sender_id, receiver_id, text_body, time_sent, active)
      VALUES
        ($1, $2, $3, $4, true)
      RETURNING *;
    `, [senderID, receiverID, textInput, dateNow])
      .then((data) => {
        console.log(data.rows);
        res.json({...data.rows[0], sender, receiver});
      });


  })

  router.put('/messages/read', (req, res) => {

    const { currentUserID, otherUserID } = req.body;

    console.log(currentUserID);
    console.log(otherUserID);

    db.query(`
      UPDATE messages
      SET receiver_read = true
      WHERE receiver_id = $1 AND sender_id = $2
      RETURNING *;
    `, [currentUserID, otherUserID])
      .then(data => {
        res.json(data.rows);
      });

  })

  router.post('/messages/unread_count', (req, res) => {

    const { userID } = req.body;

    console.log('userID oh yeah', userID)

    db.query(`
      SELECT COUNT(*)
      FROM messages
      WHERE receiver_id = $1 AND receiver_read = false;
    `, [userID])
      .then(data => {
        res.json(data.rows);
      })

  })

  return router;
}