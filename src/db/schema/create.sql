-- DROP TABLE IF EXISTS progress_bars
-- CASCADE;
DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS messages
CASCADE;
DROP TABLE IF EXISTS posts
CASCADE;
DROP TABLE IF EXISTS likes
CASCADE;
DROP TABLE IF EXISTS comments
CASCADE;
DROP TABLE IF EXISTS user_profiles
CASCADE;
DROP TABLE IF EXISTS tutor_experiences
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


-- ************************************************************
-- posts table
-- ************************************************************
CREATE TABLE posts
(
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  text_body TEXT NOT NULL,
  time_posted TIMESTAMP NOT NULL,
  is_mentor BOOLEAN NOT NULL DEFAULT FALSE,
  is_student BOOLEAN NOT NULL DEFAULT FALSE,
  active BOOLEAN NOT NULL DEFAULT TRUE
);


-- ************************************************************
-- likes table
-- ************************************************************

CREATE TABLE likes
(
  id SERIAL PRIMARY KEY NOT NULL,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  liker_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);


-- ************************************************************
-- comments table
-- ************************************************************

CREATE TABLE comments
(
  id SERIAL PRIMARY KEY NOT NULL,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  commenter_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  text_body TEXT NOT NULL
);


-- ************************************************************
-- user_profiles table
-- ************************************************************
CREATE TABLE user_profiles
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  dob DATE NOT NULL,
  location VARCHAR(255) NOT NULL,
  is_mentor BOOLEAN NOT NULL DEFAULT FALSE,
  is_student BOOLEAN NOT NULL DEFAULT FALSE,
  active BOOLEAN NOT NULL DEFAULT TRUE
);


-- ************************************************************
-- tutor_experiences table
-- ************************************************************
CREATE TABLE tutor_experiences
(
  id SERIAL PRIMARY KEY NOT NULL,
  mentor_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  student_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  mentor_rating INTEGER NOT NULL DEFAULT 0,
  student_rating INTEGER NOT NULL DEFAULT 0,
  mentor_comments TEXT,
  student_comments TEXT,
  date_interacted DATE NOT NULL
);