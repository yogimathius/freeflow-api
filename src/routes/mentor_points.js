// const router = require("express").Router();

// module.exports = (db) => {
//   router.get("/user_profiles/mentor_points/", (req, res) => {
//     // ********
//     // const userId = req.body.userId;
//     // ********

//     // hard coded for now...
//     const userId = 4;

//     db.query(
//       `
// 			SELECT SUM(mentor_rating) as mentorRating
// 			FROM tutor_experiences
// 			JOIN users ON mentor_id = users.id;
// 		`,
//       [userId]
//     ).then((data) => {
//       console.log("mentorPoints", data.rows);
//       console.log(userId);
//       res.json(data.rows);
//     });
//   });
//   return router;
// };
