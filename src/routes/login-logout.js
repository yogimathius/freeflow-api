const router = require('express').Router();

module.exports = db => {
	router.post('/login', (req, res) => {
		console.log('this is request body', req.body);

		const userID = Number(req.body.userID);

		db.query(
			`
      SELECT users.id, username, avatar
      FROM users
      JOIN user_profiles ON users.id = user_id
      WHERE users.id = $1;
    `,
			[userID]
		)
			.then(data => {
				res.json(data.rows);
			})
			.catch(err => {
				console.log(err);
			});
	});

	router.post('/login-real', (req, res) => {
		console.log('fron login page', req.body);

		const username = req.body.username;
		const password = req.body.password;

		db.query(
			`
      SELECT users.id, username, avatar, password
      FROM users
      JOIN user_profiles ON users.id = user_id
      WHERE username = $1 AND password = $2;
    `,
			[username, password]
		)
			.then(data => {
				res.json(data.rows);
			})
			.catch(err => {
				res.json(err);
			});
	});

	return router;
};
