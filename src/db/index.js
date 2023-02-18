const pg = require("pg");
postgresql://postgres:bE0CNwDh18NoXvlETe3u@containers-us-west-22.railway.app:6413/railway
const client = new pg.Client({
  user: "postgres",
  password: "bE0CNwDh18NoXvlETe3u",
  database: "railway",
  port: 6413,
  host: "containers-us-west-22.railway.app",
  ssl: {rejectUnauthorized: false}
});

client
  .connect()
  .catch((e) => console.error(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
