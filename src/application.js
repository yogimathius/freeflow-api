const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const whitelist = ['http://localhost:3000', 'https://freeflow-network.netlify.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://freeflow-network.netlify.app/'],
      scriptSrc: ["'self'", "'unsafe-inline'", 'https://freeflow-network.netlify.app/'],
      imgSrc: ["'self'", 'https://freeflow-network.netlify.app/'],
      objectSrc: ["'none'"],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      connectSrc: ["'self'", 'https://freeflow-api-production.up.railway.app/'],
    },
  })
);

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const db = require("./db");

const comments = require("./routes/comments");
const likes = require("./routes/likes");
const userSkills = require("./routes/user_skills");
const messages = require("./routes/messages");
const userMessages = require("./routes/messages");
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
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch((error) => {
        console.error(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function () {
    return db.end();
  };

  return app;
};
