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
DROP TABLE IF EXISTS experiences
CASCADE;
DROP TABLE IF EXISTS types
CASCADE;
DROP TABLE IF EXISTS topics
CASCADE;
DROP TABLE IF EXISTS skill_categories
CASCADE;
DROP TABLE IF EXISTS user_skills
CASCADE;
DROP TABLE IF EXISTS db_skills
CASCADE;
DROP TABLE IF EXISTS posts_skills
CASCADE;
DROP TABLE IF EXISTS avatars
CASCADE;
DROP TABLE IF EXISTS random_usernames
CASCADE;
-- DROP TABLE IF EXISTS coding_challenges
-- CASCADE;
-- DROP TABLE IF EXISTS user_challenges
-- CASCADE;
-- DROP TABLE IF EXISTS coding_tests
-- CASCADE;

-- ************************************************************
-- users table
-- ************************************************************
CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
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
  receiver_read BOOLEAN NOT NULL DEFAULT FALSE,
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
  is_helper BOOLEAN NOT NULL DEFAULT FALSE,
  is_helped BOOLEAN NOT NULL DEFAULT FALSE,
  status_field VARCHAR(255) NOT NULL,
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
  dob DATE,
  location VARCHAR(255),
  is_helper BOOLEAN DEFAULT FALSE,
  is_helped BOOLEAN DEFAULT FALSE,
  avatar VARCHAR(255),
  active BOOLEAN DEFAULT TRUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);
-- ************************************************************
-- experiences table
-- ************************************************************
CREATE TABLE experiences
(
  id SERIAL PRIMARY KEY NOT NULL,
  helper_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  helped_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  helper_rating INTEGER DEFAULT NULL,
  helped_rating INTEGER DEFAULT NULL,
  helper_comments TEXT DEFAULT NULL,
  helped_comments TEXT DEFAULT NULL,
  status VARCHAR(255) NOT NULL,
  date_initiated TIMESTAMP,
  date_accepted TIMESTAMP,
  date_completed TIMESTAMP,
  receiver_seen BOOLEAN NOT NULL DEFAULT FALSE
);

-- ************************************************************
-- user_skills table
-- ************************************************************
CREATE TABLE user_skills
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);

-- ************************************************************
-- skill_categories table
-- ************************************************************
CREATE TABLE skill_categories
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

-- ************************************************************
-- db_skills table
-- ************************************************************
CREATE TABLE db_skills
(
  id SERIAL PRIMARY KEY NOT NULL,
  skill_category_id INTEGER REFERENCES skill_categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);


-- ************************************************************
-- db_skills table
-- ************************************************************
CREATE TABLE posts_skills
(
  id SERIAL PRIMARY KEY NOT NULL,
  db_skills_id INTEGER REFERENCES db_skills(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
);


-- ************************************************************
-- avatars table
-- ************************************************************
CREATE TABLE avatars
(
  id SERIAL PRIMARY KEY NOT NULL,
  url VARCHAR(255) NOT NULL
);


-- ************************************************************
-- random_usernames table
-- ************************************************************
CREATE TABLE random_usernames
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);