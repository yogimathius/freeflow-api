const router = require('express').Router();

module.exports = (db) => {
  router.get('/register/avatars', (req, res) => {

    db.query(`
      SELECT * FROM avatars;
    `)
      .then((data) => {
        res.json(data.rows);
      })

  });

  router.get('/register/random_usernames', (req, res) => {

    db.query(`
      SELECT * FROM random_usernames;
    `)
      .then((data) => {
        res.json(data.rows);
      })

  });

  router.post('/register/new', (req, res) => {

    const { usernameInput, emailInput, passwordInput, avatarSrc } = req.body;

    db.query(`
      INSERT INTO users
        (username, email, password, active)
      VALUES
        ($1, $2, $3, true)
      RETURNING id;
    `, [usernameInput, emailInput, passwordInput])
      .then(data => {
        const user_id = data.rows[0].id;
        res.json({ user_id })
        db.query(`
          INSERT INTO user_profiles
            (user_id, avatar, active)
          VALUES
            ($1, $2, true)
          RETURNING *;
        `, [user_id, avatarSrc])
          .then(data => {
            console.log(data.rows);
          })
      })

  })

  return router;
}