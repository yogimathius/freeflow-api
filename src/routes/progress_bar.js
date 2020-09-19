const router = require("express").Router();

module.exports = (updatePoints) => {
  router.get("/points", (request, response) => {
    db.query(`SELECT * FROM progress_bars`).then(({ rows: points }) => {
      response.json();
    });
  });
};
