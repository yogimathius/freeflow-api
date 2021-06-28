const router = require('express').Router();

module.exports = db => {
  router.get('/messages', (req, res) => {
    db.query(`SELECT * FROM messages;`)
      .then(({rows: messages}) => {
        console.log('message gets hit: ', messages);
        res.json(
          messages.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        )
      });
  });

  router.get('/messages/:id', (req, res) => {
    console.log(req.params.id);
    const userId = req.params.id;

    db.query(`
      SELECT
        messages.id as id,
        u1.id AS senderID,
        u1.username AS sender,
        u2.id AS receiverID,
        u2.username AS receiver,
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

    const { receiverID, textInput, senderID } = req.body;

    // console.log('receiver', receiverID);
    // console.log('sender', senderID);
    // console.log('textInput', textInput);
    // const senderID = 2;

    const dateNow = new Date().toISOString();
    console.log(dateNow);

    db.query(`
      INSERT INTO messages
        (sender_id, receiver_id, text_body, time_sent, active)
      VALUES
        ($1, $2, $3, $4, true)
      RETURNING *;
    `, [senderID, receiverID, textInput, dateNow])
      .then(data => {
        res.json({ data: data.rows });
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