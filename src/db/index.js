const pg = require("pg");

const client = new pg.Client({
  user: "sprinter",
  password: "sprinter",
  database: "sprint",
  // port: 5432,
  host: "localhost",
  ssl: {rejectUnauthorized: false}
});

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
