-- DROP TABLE IF EXISTS progress_bars
-- CASCADE;
DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS messages
CASCADE;



-- CREATE TABLE progress_bars
-- (
--   id SERIAL PRIMARY KEY NOT NULL,
--   points BIGINT
-- );


-- ************************************************************
-- users table
-- ************************************************************
CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE
);


-- ************************************************************
-- messages table
-- ************************************************************
CREATE TABLE messages
(
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  text_body TEXT NOT NULL,
  time_sent TIMESTAMP NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE
);