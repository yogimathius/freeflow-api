const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");

<<<<<<< HEAD
const points = require("./routes/points");
=======
const points = require("./routes/progress_bar");
const users = require('./routes/users');
const messages = require('./routes/messages');
const posts = require('./routes/posts');
const likes = require('./routes/likes');
const comments = require('./routes/comments');
const userProfiles = require('./routes/user_profiles');
const tutorExperiences = require('./routes/tutor_experiences');
const mentorStack = require('./routes/mentor_stack');
const studentStack = require('./routes/student_stack');
>>>>>>> 2728c872c0e68a35e9049a102babaee9f319b4cc

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8",
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
  actions = { updateAppointment: () => { } }
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use('/api', users(db));
  app.use('/api', messages(db));
  app.use('/api', posts(db));
  app.use('/api', likes(db));
  app.use('/api', comments(db));
  app.use('/api', userProfiles(db));
  app.use('/api', tutorExperiences(db));
  app.use('/api', mentorStack(db));
  app.use('/api', studentStack(db));

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`)),
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch((error) => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function() {
    return db.end();
  };

  return app;
};
