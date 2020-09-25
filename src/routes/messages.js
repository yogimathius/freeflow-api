const router = require('express').Router();

module.exports = db => {
  // router.get('/messages', (req, res) => {
  //   db.query(`SELECT * FROM messages;`)
  //     .then((data) => {
  //       res.json(data.rows)
  //     });
  // });

  router.get('/messages', (req, res) => {

    // ********
    // const userId = req.session.user_id;
    // ********

    // hard coded for now...
    const userId = 2;

    db.query(`
      SELECT
        u1.id AS senderID,
        u1.username AS sender,
        u2.id AS receiverID,
        u2.username AS receiver,
        text_body, time_sent, messages.active
      FROM messages
        JOIN users u1 ON u1.id = sender_id
        JOIN users u2 ON u2.id = receiver_id
      WHERE receiver_id = $1 OR sender_id = $1;
    `, [userId])
      .then(data => {
        res.json({ userId, data: data.rows });
      });
  })

  return router;
}