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

    console.log(req.session);
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

  router.post('/messages/new', (req, res) => {

    const { receiverID, textInput } = req.body;

    // hard coded for now...
    const senderID = 2;

    const dateNow = new Date().toISOString();

    console.log(dateNow)
    // insert into messages
    // (sender_id, receiver_id, text_body, time_sent, active)
    // values
    //   (1, 2, 'Maecenas rhoncus aliquam lacus.', '2020-08-25T11:21:04Z', true);

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

  return router;
}