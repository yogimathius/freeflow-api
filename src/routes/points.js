const router = require("express").Router();

module.exports = (db) => {
  router.get("/points", (request, response) => {
    db.query(`SELECT points FROM progress_bars`).then(({ rows: points }) => {
      // console.log("points: ", points);
      response.json(points);
    });
  });

  router.put("/points", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    const { points } = request.body;
    console.log("put points: ", points);
    const newPoints = Number(points) + 1;

    console.log("new points: ", newPoints);

    db.query(
      `
      UPDATE progress_bars SET points = ${newPoints};
      `
    )
      .then(() => {
        response.send({ points: newPoints }).status(204);
      })
      .catch((error) => console.log(error));
  });
  return router;
};
