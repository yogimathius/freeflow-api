-- USERS
insert into users (username, first_name, last_name, email, password, active) values ('mjachievem', 'Mathius', 'Johnson', 'cstilldale0@blogger.com', '123', true);
insert into users (username, first_name, last_name, email, password, active) values ('dsleaford1', 'Derril', 'Sleaford', 'dsleaford1@nyu.edu', '4lGhIyW', false);
insert into users (username, first_name, last_name, email, password, active) values ('rfrisel2', 'Rollie', 'Frisel', 'rfrisel2@epa.gov', 'wyGUjG9', false);

-- MESSAGES
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 2, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '2020-06-06T08:57:40Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 3, 'Aliquam erat volutpat. In congue.', '2019-12-07T22:49:38Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 1, 'Offline this discussion value-added blue money we want to empower the team with the right tools and guidance to uplevel our craft and build better can I just chime in on that one quick-win.', '2020-09-30T23:50:47Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 1, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', '2020-07-21T10:03:24Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 2, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', '2020-08-02T16:19:56Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 2, 'In hac habitasse platea dictumst.', '2020-08-31T20:08:12Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 3, 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '2020-03-13T00:16:58Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 3, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.', '2020-06-30T15:39:34Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 1, 'Vivamus in felis eu sapien cursus vestibulum.', '2020-05-21T07:30:35Z', true, false);


-- POSTS
insert into posts
  (owner_id, text_body, time_posted, is_helper, is_helped, status_field, active)
values
  (5, 'I need a website. How much will it cost can you turn it around in photoshop so we can see more of the front, and we dont need a backup, it never goes down! labrador make the font bigger. Can you rework to make the pizza look more delicious use a kpop logo thats not a kpop logo!.', '2020-08-29T04:45:11Z', true, false, 'active', true);
insert into posts
  (owner_id, text_body, time_posted, is_helper, is_helped, status_field, active)
values
  (6, 'I need a website. How much will it cost can you turn it around in photoshop so we can see more of the front, and we dont need a backup, it never goes down! labrador make the font bigger. Can you rework to make the pizza look more delicious use a kpop logo thats not a kpop logo!', '2020-09-19T08:03:13Z', false, true, 'active', true);
insert into posts
  (owner_id, text_body, time_posted, is_helper, is_helped, status_field, active)
values
  (1, 'I would love to help someone who would want to learn Yoga. I have a few years worth of experience as a developer and would love to have someone to mentor. ', '2020-08-22T23:46:08Z', true, false, 'active', true);

-- LIKES
insert into likes
  (post_id, liker_id)
values
  (10, 3);
insert into likes
  (post_id, liker_id)
values
  (6, 1);
insert into likes
  (post_id, liker_id)
values
  (3, 2);
insert into likes
  (post_id, liker_id)
values
  (7, 3);
insert into likes
  (post_id, liker_id)
values
  (4, 2);
insert into likes
  (post_id, liker_id)
values
  (2, 1);
insert into likes
  (post_id, liker_id)
values
  (8, 1);
insert into likes
  (post_id, liker_id)
values
  (7, 2);

-- COMMENTS
insert into comments
  (post_id, commenter_id, text_body)
values
  (1, 1, 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (2, 1, 'Aenean sit amet justo.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (3, 2, 'In quis justo.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (2, 3, 'Nulla facilisi.');

  -- USER PROFIELES
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (1, '11/7/1999', 'Fajã de Cima', false, true, 'https://robohash.org/voluptatemnemolaborum.png?size=50x50&set=set1', true, 'Mathius', 'Johnson');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (2, '5/8/1998', 'Vukovar', true, true, 'https://robohash.org/beataecorruptinesciunt.png?size=50x50&set=set1', false, 'Derril', 'Sleaford');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (3, '3/23/1962', 'Voyutychi', false, true, 'https://robohash.org/eumutinventore.png?size=50x50&set=set1', true, 'Rollie', 'Frisel');

-- EXPERIENCES
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (2, 1, 1, 3, 3, 'Integer tincidunt ante vel ipsum.', 'Nulla justo.', 'completed', '2020-05-07 16:42:23', '2020-06-03 18:29:05', '2020-07-27 17:04:36');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (3, 1, 3, null, null, null, null, 'in-progress', '2020-05-29 00:29:14', '2020-06-12 22:16:06', null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 3, 1, null, null, null, null, 'pending', '2020-05-29 17:56:32', null, null);

insert into user_skills
  (user_id, name)
values
  (2, 'Programming'),
  (1, 'Carpentry'),
  (1, 'Landscaping'),
  (2, 'Carpentry'),
  (1, 'Math'),
  (1, 'Writing'),
  (3, 'Programming'),
  (2, 'Landscaping'),
  (3, 'Landscaping');
insert into db_skills
  (name)
values
  ('Carpentry'),
  ('Creative'),
  ('Math'),
  ('Programming'),
  ('Landscaping'),
  ('Writing');

-- POSTS SKILLS
insert into posts_skills
  (db_skills_id, post_id)
values
  (1, 1);
insert into posts_skills
  (db_skills_id, post_id)
values
  (3, 2);
insert into posts_skills
  (db_skills_id, post_id)
values
  (5, 3);
insert into posts_skills
  (db_skills_id, post_id)
values
  (2, 1);

-- AVATARS
insert into avatars
  (url)
values
  ('https://robohash.org/voluptatemnemolaborum.png?size=50x50&set=set1');
insert into avatars
  (url)
values
  ('https://robohash.org/beataecorruptinesciunt.png?size=50x50&set=set1');
insert into avatars
  (url)
values
  ('https://robohash.org/eumutinventore.png?size=50x50&set=set1');

-- RANDOM USERNAMES
insert into random_usernames
  (name)
values
  ('vkinnane0');
insert into random_usernames
  (name)
values
  ('fbasant1');
insert into random_usernames
  (name)
values
  ('dkeymer2');