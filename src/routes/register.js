const router = require('express').Router();

module.exports = db => {
	router.get('/register/avatars', (req, res) => {
		db.query(
			`
      SELECT * FROM avatars;
    `
		).then(data => {
			res.json(data.rows);
		});
	});

	router.get('/register/random_usernames', (req, res) => {
		db.query(
			`
      SELECT * FROM random_usernames;
    `
		).then(data => {
			res.json(data.rows);
		});
	});

	router.post('/register/new', (req, res) => {
		const {
			usernameInput,
			firstnameInput,
			lastnameInput,
			emailInput,
			passwordInput,
			avatarSrc,
		} = req.body;

		db.query(
			`
      INSERT INTO users
        (username, first_name, last_name, email, password, active)
      VALUES
        ($1, $2, $3, $4, $5, true)
      RETURNING id;
    `,
			[usernameInput, firstnameInput, lastnameInput, emailInput, passwordInput]
		).then(data => {
			console.log(data.rows[0]);
			const user_id = data.rows[0].id;
			res.json({ user_id });
			console.log('attempting to create user profile with user id', user_id);

			db.query(
				`
          INSERT INTO user_profiles
            (user_id, first_name, last_name, avatar, active)
          VALUES
            ($1, $2, $3, $4, true)
          RETURNING *;
        `,
				[user_id, firstnameInput, lastnameInput, avatarSrc]
			).then(data => {
				console.log('set up user profile', data.rows);
			});
		});
	});

	return router;
};
