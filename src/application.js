const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const db = require("./db");

const comments = require("./routes/comments");
const likes = require("./routes/likes");
const userSkills = require("./routes/user_skills");
const messages = require("./routes/messages");
const posts = require("./routes/posts");
const postsSkills = require("./routes/posts_skills");
const dbSkills = require("./routes/db_skills");
const index = require("./routes/index");
const login = require("./routes/login-logout");
const experiences = require("./routes/experiences");
const users = require("./routes/users");
const register = require("./routes/register");

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
  actions = { updateComments: () => {}, deleteComments: () => {} }
) {
  const corsUrl ='https://freeflow-two-point-o.herokuapp.com/api'
  app.use(cors({
    origin: corsUrl
  }));
  app.use(helmet());
  app.use(bodyparser.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyparser.urlencoded({ extended: true }));

  app.use("/api", comments(db, actions.updateComments, actions.deleteComments));
  app.use("/api", likes(db));
  app.use("/api", userSkills(db));
  app.use("/api", messages(db));
  app.use("/api", posts(db));
  app.use("/api", postsSkills(db));
  app.use("/api", dbSkills(db));
  app.use("/api", index());
  app.use("/api", login(db));
  app.use("/api", experiences(db));
  app.use("/api", users(db));
  app.use("/api", register(db));

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to freeflow application." });
  });

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

  app.close = function () {
    return db.end();
  };

  return app;
};
