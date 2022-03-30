const router = require('express').Router();

module.exports = db => {
  router.get('/conversations/:id', (req, res) => {
    const userId = req.params.id;

    db.query(`
      SELECT 
          DISTINCT messages.id as id,
          u1.id AS sender_id,
          concat(u1.first_name, ' ', u1.last_name) AS sender,
          u2.id AS receiver_id,
          concat(u2.first_name, ' ', u2.last_name) AS receiver,
          time_sent,
          text_body
      FROM messages
          JOIN users u1 ON u1.id = sender_id
          JOIN users u2 ON u2.id = receiver_id
      WHERE receiver_id = $1 OR sender_id = $1
      GROUP BY u1.id, u2.id, time_sent, text_body, messages.id
      ORDER BY time_sent;
      `, [userId])
      .then(({rows: messages}) => {
        console.debug('messages: ', messages);
        const messageMap = {
          messagers: [],
          messages: {}
        }
        messages.map(message => {
          const senderid = message.sender_id
          const receiverid = message.receiver_id
          const senderName = message.sender
          const receiverName = message.receiver
          if (senderid !== userId && !messageMap.messages[senderName]) {
            const messager = { name: senderName, userId: senderid }
            messageMap.messagers.push(messager)
            messageMap.messages[senderName] = [message]
          }
    
          if (senderid !== userId && messageMap.messages[senderName]) {
            messageMap.messages[senderName].push(message)
          }
    
          if (receiverid !== userId && !messageMap.messages[receiverName]) {
            const messager = { name: receiverName, userId: receiverid }
    
            messageMap.messagers.push(messager)
            messageMap.messages[receiverName] = [message]
          }
    
          if (receiverid !== userId && messageMap.messages[receiverName]) {
            messageMap.messages[receiverName].push(message)
          }
        })
        res.json(
          messageMap
        )
      });
  });

  router.get('/messages/:id', (req, res) => {
    console.debug(req.params.id);
    const userId = req.params.id;

    db.query(`
      SELECT
        messages.id as id,
        u1.id AS sender_id,
        concat(u1.first_name, ' ', u1.last_name) AS sender,
        u2.id AS receiver_id,
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
    console.debug(dateNow);

    db.query(`
      INSERT INTO messages
        (sender_id, receiver_id, text_body, time_sent, active)
      VALUES
        ($1, $2, $3, $4, true)
      RETURNING *;
    `, [senderID, receiverID, textInput, dateNow])
      .then((data) => {
        console.debug(data.rows);
        res.json({...data.rows[0], sender, receiver});
      });


  })

  router.put('/messages/read', (req, res) => {

    const { currentUserID, otherUserID } = req.body;

    console.debug(currentUserID);
    console.debug(otherUserID);

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

    console.debug('userID oh yeah', userID)

    db.query(`
      SELECT COUNT(*)
      FROM messages
      WHERE receiver_id = $1 AND receiver_read = false;
    `, [userID])
      .then(data => {
        res.json(data.rows);
      })

  })

  router.delete("/messages/:id", (req, res) => {
    console.debug("req.body", req.body, req.query, req.params);

    const { messageId } = req.query;
    console.debug('message Id in query, and req: ', messageId);
    db.query(
      `
      DELETE FROM messages 
      WHERE id = $1;
      `,
      [messageId]
    )
      .then((data) => {
        console.debug("data rows in delete message: ", data.rows);
        res.json(data.rows); // jeremy sez: why return the whole array?
      })
      .catch((err) => {
        console.error("bad juju on delete message DB", err);
        res.status(500).send("bad juju on delete message DB");
      });
  });

  return router;
}