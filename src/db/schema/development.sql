
-- ************************************************************
-- users table
-- ************************************************************

insert into users (username, first_name, last_name, email, password, active) values ('mjachievem', 'Mathius', 'Johnson', 'cstilldale0@blogger.com', '123', true);
insert into users (username, first_name, last_name, email, password, active) values ('dsleaford1', 'Derril', 'Sleaford', 'dsleaford1@nyu.edu', '4lGhIyW', false);
insert into users (username, first_name, last_name, email, password, active) values ('rfrisel2', 'Rollie', 'Frisel', 'rfrisel2@epa.gov', 'wyGUjG9', false);
insert into users (username, first_name, last_name, email, password, active) values ('skidston3', 'Sara-ann', 'Kidston', 'skidston3@npr.org', 'wHAbRX', true);
insert into users (username, first_name, last_name, email, password, active) values ('jzoppo4', 'Jennilee', 'Zoppo', 'jzoppo4@phpbb.com', 'HToZ8p', true);
insert into users (username, first_name, last_name, email, password, active) values ('craubenheimer5', 'Casey', 'Raubenheimer', 'craubenheimer5@marriott.com', 'kqXoj7wzgd', false);
insert into users (username, first_name, last_name, email, password, active) values ('krosenbush6', 'Katharyn', 'Rosenbush', 'krosenbush6@xrea.com', 'iFDsDpu', false);
insert into users (username, first_name, last_name, email, password, active) values ('cjames7', 'Charleen', 'James', 'cjames7@miibeian.gov.cn', 'O0dgA3', false);
insert into users (username, first_name, last_name, email, password, active) values ('rbaum8', 'Raimund', 'Baum', 'rbaum8@disqus.com', 'h5ZkJvfvVHoe', false);
insert into users (username, first_name, last_name, email, password, active) values ('tsnarie9', 'Tremayne', 'Snarie', 'tsnarie9@wunderground.com', 'g42ajp2U', false);
insert into users (username, first_name, last_name, email, password, active) values ('elefleminga', 'Emilio', 'Le Fleming', 'elefleminga@goo.gl', '0cdLfNgHnx9', false);
insert into users (username, first_name, last_name, email, password, active) values ('llyfieldb', 'Lyman', 'Lyfield', 'llyfieldb@shop-pro.jp', 'HoDw6F5W1C5', false);
insert into users (username, first_name, last_name, email, password, active) values ('ninworthc', 'Nelia', 'Inworth', 'ninworthc@fda.gov', 'St6WukH', true);
insert into users (username, first_name, last_name, email, password, active) values ('csnufflebottomd', 'Cello', 'Snufflebottom', 'csnufflebottomd@bluehost.com', 'GANtItn', true);
insert into users (username, first_name, last_name, email, password, active) values ('lmeasore', 'Lem', 'Measor', 'lmeasore@liveinternet.ru', 'QLz5fo', true);



-- ************************************************************
-- ************************************************************
-- messages table
-- ************************************************************

insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 7, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '2020-06-06T08:57:40Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 5, 'Aliquam erat volutpat. In congue.', '2019-12-07T22:49:38Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 1, 'Offline this discussion value-added blue money we want to empower the team with the right tools and guidance to uplevel our craft and build better can I just chime in on that one quick-win.', '2020-09-30T23:50:47Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (6, 7, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', '2020-07-21T10:03:24Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 7, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', '2020-08-02T16:19:56Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 2, 'In hac habitasse platea dictumst.', '2020-08-31T20:08:12Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 10, 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '2020-03-13T00:16:58Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 3, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.', '2020-06-30T15:39:34Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (4, 1, 'Vivamus in felis eu sapien cursus vestibulum.', '2020-05-21T07:30:35Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (5, 7, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', '2019-10-10T20:02:49Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 8, 'Win-win-win.', '2020-09-19T01:49:26Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 2, 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', '2020-01-29T18:21:28Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 3, 'Vestibulum rutrum rutrum neque.', '2020-02-11T21:21:07Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 9, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', '2019-12-06T06:56:55Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 4, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', '2020-07-11T20:54:46Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 1, 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-03-17T12:49:54Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 4, 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.', '2020-06-26T12:22:22Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 5, 'Nunc rhoncus dui vel sem.', '2020-07-21T20:02:20Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 8, 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '2020-02-03T10:02:00Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 6, 'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.', '2020-05-28T13:41:49Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 3, 'Mauris lacinia sapien quis libero.', '2020-05-30T08:14:00Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (4, 9, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '2020-05-16T18:33:10Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (5, 9, 'Nam tristique tortor eu pede.', '2020-08-12T10:16:00Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 9, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', '2019-10-12T15:41:56Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 9, 'Suspendisse potenti.', '2019-11-17T03:14:05Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 8, 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '2019-11-20T00:18:06Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 6, 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.', '2020-02-02T09:22:20Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 3, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.', '2020-05-04T07:54:10Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 10, 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', '2020-06-10T15:57:17Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 8, 'Put your feelers out a better understanding of usage can aid in prioritizing future efforts.', '2020-09-21T02:55:45Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 7, 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '2020-04-18T00:19:59Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 3, 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-02-27T08:14:06Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (8, 9, 'You gotta smoke test your hypothesis.', '2020-01-07T01:10:08Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (8, 10, 'New economy sorry i was triple muted 4-blocker or c-suite. Draw a line in the sand roll back strategy so rock Star/Ninja please advise soonest so your work on this project has been really impactful..', '2019-12-09T01:29:17Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 4, 'Duis mattis egestas metus.', '2019-11-02T19:49:39Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (5, 3, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.', '2020-03-19T21:51:40Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 1, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2020-01-06T19:20:56Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 9, 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', '2020-01-08T21:30:08Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (6, 5, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2020-08-12T01:34:38Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 9, 'Quisque id justo sit amet sapien dignissim vestibulum.', '2020-09-10T10:16:56Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 9, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '2020-09-15T01:27:22Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 9, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.', '2020-01-01T18:20:49Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (8, 2, 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.', '2020-03-04T11:02:02Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 6, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', '2020-05-12T01:45:15Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 3, 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '2020-01-15T01:35:32Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 3, 'Etiam faucibus cursus urna. Ut tellus.', '2020-08-09T02:18:47Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (8, 4, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', '2019-11-22T03:05:58Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 10, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', '2020-02-02T05:38:38Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 8, 'In eleifend quam a odio. In hac habitasse platea dictumst.', '2020-04-30T16:33:21Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (4, 7, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2019-11-17T06:15:13Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (4, 9, 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', '2020-09-03T19:20:29Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 4, 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2020-09-28T14:50:49Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 7, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', '2020-01-11T00:35:26Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (5, 3, 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', '2020-09-24T00:46:18Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 6, 'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.', '2019-11-05T01:02:02Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (6, 5, 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', '2020-08-25T06:24:50Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (5, 10, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.', '2020-08-16T14:41:52Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 1, 'Window of opportunity get six alpha pups in here for a focus group, or can we jump on a zoom.', '2019-10-11T02:12:21Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (6, 8, 'In this space we want to see more charts value-added, or strategic staircase, yet i dont care if you got some copy, why you dont use officeipsumcom or something like that.', '2020-9-12T14:45:30Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 4, 'In hac habitasse platea dictumst.', '2020-05-23T09:11:08Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 3, 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '2020-07-29T19:57:17Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (8, 10, 'I also believe it is important for every member to be involved and invested in our company.', '2020-07-25T23:35:39Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (2, 1, 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '2020-04-06T17:30:44Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (4, 1, 'Nam nulla.', '2020-06-22T09:41:56Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 1, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', '2020-05-05T17:17:55Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (10, 1, 'If you want to motivate these clowns, try less carrot and more stick paddle on both sides, or t-shaped individual, nor accountable talk race without a finish line sorry.', '2020-09-24T10:11:22Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (6, 3, 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.', '2019-11-07T09:04:59Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (4, 5, 'Sed ante. Vivamus tortor.', '2020-08-28T04:03:05Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 3, 'Pellentesque at nulla.', '2020-04-04T19:33:10Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (4, 9, 'Nunc rhoncus dui vel sem. Sed sagittis.', '2020-09-17T16:33:51Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (6, 2, 'Duis bibendum.', '2019-12-27T14:27:46Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (9, 6, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', '2019-10-15T00:45:52Z', false, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (8, 10, 'Deploy to production driving the initiative forward close the loop.', '2020-08-12T21:23:10Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (5, 1, 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '2020-07-05T23:54:33Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (8, 10, 'Deploy to production driving the initiative forward close the loop. Powerpoint Bunny high performance keywords, highlights . After I ran into Helen at a restaurant, I realized she was just office pretty. We need to harvest synergy effects.', '2020-09-29T19:31:20Z', true, false);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (3, 6, 'Vestibulum rutrum rutrum neque.', '2019-11-14T05:40:58Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (5, 3, 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-08-19T18:24:11Z', true, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 7, 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '2019-10-17T08:47:09Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (7, 9, 'Cras in purus eu magna vulputate luctus.', '2019-10-20T12:21:50Z', false, true);
insert into messages
  (sender_id, receiver_id, text_body, time_sent, active, receiver_read)
values
  (1, 10, 'Out of scope eat our own dog food. That jerk from finance really threw me under the bus root-and-branch review pass the mayo, appeal to the client.', '2020-07-15T18:17:54Z', true, false);





-- ************************************************************
-- posts table
-- ************************************************************


-- ************************************************************
-- posts table
-- ************************************************************
insert into posts
  (owner_id, text_body, time_posted, is_helper, is_helped, status_field, active, skill_ids)
values
  (5, 'I need a website. How much will it cost can you turn it around in photoshop so we can see more of the front, and we dont need a backup, it never goes down! labrador make the font bigger. Can you rework to make the pizza look more delicious use a kpop logo thats not a kpop logo!.', '2021-01-16T19:59:23Z', true, false, 'active', true, '{3, 2, 6}'),
  
  (6, 'I need a website. How much will it cost can you turn it around in photoshop so we can see more of the front, and we dont need a backup, it never goes down! labrador make the font bigger. Can you rework to make the pizza look more delicious use a kpop logo thats not a kpop logo!', '2021-01-21T06:06:33Z', false, true, 'active', true, '{1, 3, 7, 4}'),

  (1, 'I would love to help someone who would want to learn Yoga. I have a few years worth of experience as a developer and would love to have someone to mentor. ', '2021-01-18T07:44:28Z', true, false, 'active', true, '{2, 12, 9, 3}'),

  (1, 'Inredibly excited for the new PS4 release!!!! What do you guys think about that? ', '2021-01-09T20:28:12Z', true, false, 'active', true, '{ 4, 6, 15}'),

  (1, 'Mentorship is the best way to reinforce knowledge. Is anyone looking for a mentor to help them setup Writing backend? Would love to offer some help. ', '2021-01-23T23:57:47Z', true, false, 'active', true, '{2}'),

  (3, 'My grasp on reality right now is tenuous. We want to see more charts. Are we in agreeance. Performance review prairie dogging run it up the flagpole, ping the boss and circle back five-year strategic plan herding cats. Low hanging fruit circle back nor due diligence optics usabiltiy. Deploy to production. The last person we talked to said this would be ready we need to build it so that it scales, this is not the hill i want to die on clear blue water scope creep nor we want to see more charts.', '2021-01-05T07:26:13Z', false, true, 'active', true, '{2, 8}'),

  (7, 'Work. Strategic staircase we need distributors to evangelize the new line to local markets. Circle back around i also believe its important for every member to be involved and invested in our company and this is one way to do so yet reach out, and i am dead inside, or personal development note for the previous submit: the devil should be on the left shoulder. Game plan due diligence, for can you send me an invite?. You must be muted create spaces to explore what’s next put a record on and see who dances, so poop', '2021-01-13T19:39:38Z', true, false, 'active', true, '{5}'),

  (2, 'Drop-dead date can you send me an invite? service as core &innovations as power makes our brand i don''t want to drain the whole swamp, i just want to shoot some alligators who''s the goto on this job with the way forward . Helicopter view land the plane but products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved but performance review zeitgeist keep it lean we need a paradigm shift.', '2021-01-29T14:03:23Z', false, true, 'active', true, '{7, 4}'),

  (1, 'I was wondering if my cat could be placed over the logo in the flyer. That will be a conversation piece can you make the logo bigger yes bigger bigger still the logo is too big can we barter services? yet labrador so we need to make the new version clean and sexy can you pimp this powerpoint, need more geometry patterns you might wanna give it another shot.', '2021-02-01T19:32:18Z', true, false, 'active', true, '{4}'),

  (6, 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '2021-01-05T08:09:45Z', true, false, 'active', true, '{3, 9}'),

  (2, 'Apple the target audience is makes and famles aged zero and up make it pop. Can you make it look more designed this red is too red. We have big contacts we will promote you can you make it more infographic-y nor this was not according to brief can you lower the price for the website? make it high quality and please use Research can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site?', '2021-01-26T13:58:34Z', false, true, 'active', true, '{12}'),
  (8, 'Hello, everyone! I''m just wondering if someone will be willing to help me out with a project? I have not dealt with Carpentry before and would love some advice on it! Heard we have a great community here.', '2021-02-02T02:29:53Z', true, false, 'active', true, '{20}');



-- ************************************************************
-- likes table
-- ************************************************************
insert into likes
  (post_id, liker_id)
values
  (10, 5);
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
  (7, 5);
insert into likes
  (post_id, liker_id)
values
  (4, 4);
insert into likes
  (post_id, liker_id)
values
  (2, 9);
insert into likes
  (post_id, liker_id)
values
  (8, 5);
insert into likes
  (post_id, liker_id)
values
  (7, 1);
insert into likes
  (post_id, liker_id)
values
  (4, 2);
insert into likes
  (post_id, liker_id)
values
  (7, 8);
insert into likes
  (post_id, liker_id)
values
  (3, 3);
insert into likes
  (post_id, liker_id)
values
  (2, 4);
insert into likes
  (post_id, liker_id)
values
  (5, 2);
insert into likes
  (post_id, liker_id)
values
  (9, 6);
insert into likes
  (post_id, liker_id)
values
  (9, 5);
insert into likes
  (post_id, liker_id)
values
  (1, 8);
insert into likes
  (post_id, liker_id)
values
  (4, 7);
insert into likes
  (post_id, liker_id)
values
  (8, 2);
insert into likes
  (post_id, liker_id)
values
  (5, 7);
insert into likes
  (post_id, liker_id)
values
  (3, 9);
insert into likes
  (post_id, liker_id)
values
  (5, 10);
insert into likes
  (post_id, liker_id)
values
  (6, 2);
insert into likes
  (post_id, liker_id)
values
  (5, 4);
insert into likes
  (post_id, liker_id)
values
  (9, 8);
insert into likes
  (post_id, liker_id)
values
  (8, 7);
insert into likes
  (post_id, liker_id)
values
  (3, 2);
insert into likes
  (post_id, liker_id)
values
  (3, 3);
insert into likes
  (post_id, liker_id)
values
  (3, 4);
insert into likes
  (post_id, liker_id)
values
  (3, 5);
insert into likes
  (post_id, liker_id)
values
  (4, 9);
insert into likes
  (post_id, liker_id)
values
  (4, 4);
insert into likes
  (post_id, liker_id)
values
  (4, 5);
insert into likes
  (post_id, liker_id)
values
  (4, 8);
insert into likes
  (post_id, liker_id)
values
  (12, 6);
insert into likes
  (post_id, liker_id)
values
  (12, 5);




-- ************************************************************
-- comments table
-- ************************************************************
insert into comments
  (post_id, commenter_id, text_body)
values
  (1, 10, 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (10, 5, 'Aenean sit amet justo.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (7, 8, 'In quis justo.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (2, 8, 'Nulla facilisi.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (2, 7, 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (5, 6, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (3, 1, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (5, 3, 'Vestibulum sed magna at nunc commodo placerat.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (3, 2, 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (7, 4, 'Aliquam non mauris. Morbi non lectus.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (1, 4, 'Fusce consequat. Nulla nisl.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (7, 6, 'Fusce consequat.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (4, 2, 'In congue.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (5, 5, 'Sed vel enim sit amet nunc viverra dapibus.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (7, 1, 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.');
insert into comments
  (post_id, commenter_id, text_body)
values
  (12, 1, 'I would like to help you out on this project. I will send you a message so we can start as tutor session');
insert into comments
  (post_id, commenter_id, text_body)
values
  (12, 3, 'It''s cool how you have a side project going on! It will really help you out in the long-term');
insert into comments
  (post_id, commenter_id, text_body)
values
  (12, 7, 'Not the best person do help out with Carpentry but cool man.');



-- ************************************************************
-- user_profiles table
-- ************************************************************
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (1, '11/7/1999', 'Fajã de Cima', false, true, 'https://robohash.org/rerumipsafugiat.bmp?size=50x50&set=set1', true, 'Mathius', 'Johnson');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (2, '5/8/1998', 'Vukovar', true, true, 'https://robohash.org/nequenemonostrum.jpg?size=50x50&set=set1', true, 'Derril', 'Sleaford');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (3, '3/23/1962', 'Voyutychi', false, true, 'https://robohash.org/reprehenderitquiasimilique.jpg?size=50x50&set=set1', true, 'Rollie', 'Frisel');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (4, '2/25/1963', 'Dajin', false, true, 'https://robohash.org/eteiustenetur.png?size=50x50&set=set1', true, 'Sara-ann', 'Kidston');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (5, '7/16/1996', 'Putou', true, false, 'https://robohash.org/nobissaepecorrupti.bmp?size=50x50&set=set1', true, 'Jennilee', 'Zoppo');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (6, '11/15/1965', 'Khisarya', true, false, 'https://robohash.org/velitsedvoluptatem.bmp?size=50x50&set=set1', true, 'Casey', 'Raubenheimer');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (7, '1/8/1987', 'Iksan', true, false, 'https://robohash.org/voluptatemnostrumomnis.bmp?size=50x50&set=set1', true, 'Katharyn', 'Rosenbush');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (8, '1/3/1992', 'Kryevidh', true, true, 'https://robohash.org/doloremvoluptatemconsequatur.jpg?size=50x50&set=set1', true, 'Charleen', 'James');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (9, '4/5/1974', 'Gaoming', true, true, 'https://robohash.org/suscipitnisiet.jpg?size=50x50&set=set1', true, 'Raimund', 'Baum');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (10, '9/22/1994', 'Kruty', false, false, 'https://robohash.org/possimusillout.bmp?size=50x50&set=set1', true, 'Tremayne', 'Snarie');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (11, '3/14/1998', 'Maracás', false, true, 'https://robohash.org/aliquamcommodiquisquam.png?size=50x50&set=set1', true, 'Emilio', 'Le Fleming');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (12, '1/9/1983', 'Roshal’', false, false, 'https://robohash.org/autetatque.png?size=50x50&set=set1', true, 'Lyman', 'Lyfield');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (13, '4/27/1974', 'Xinchengpu', false, false, 'https://robohash.org/sedautfacilis.bmp?size=50x50&set=set1', true, 'Nelia', 'Inworth');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (14, '2/19/1972', 'La Sierpe', true, false, 'https://robohash.org/vitaeseddoloremque.png?size=50x50&set=set1', true, 'Cello', 'Snufflebottom');
insert into user_profiles (user_id, dob, location, is_helper, is_helped, avatar, active, first_name, last_name) values (15, '4/18/1998', 'Chocianów', false, true, 'https://robohash.org/dignissimossequimolestias.png?size=50x50&set=set1', true, 'Lem', 'Measor');


-- ************************************************************
-- ************************************************************
-- experiences table
-- ************************************************************
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (8, 1, 1, 3, 3, 'Integer tincidunt ante vel ipsum.', 'Nulla justo.', 'completed', '2020-05-07 16:42:23', '2020-06-03 18:29:05', '2020-07-27 17:04:36');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (8, 1, 8, null, null, null, null, 'in-progress', '2020-05-29 00:29:14', '2020-06-12 22:16:06', null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 8, 1, null, null, null, null, 'pending', '2020-05-29 17:56:32', null, null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 8, 8, null, null, null, null, 'pending', '2020-05-02 21:43:41', null, null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (8, 4, 4, null, null, null, null, 'in-progress', '2020-05-07 04:58:30', '2020-06-12 22:16:06', null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (2, 8, 2, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (2, 1, 2, null, null, null, null, 'pending', '2020-05-21 05:51:10', null, null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (8, 5, 5, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 6, 1, null, null, null, null, 'pending', '2020-05-21 05:51:10', null, null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (8, 7, 8, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 3, 3, null, null, null, null, 'pending', '2020-05-21 05:51:10', null, null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 7, 1, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (10, 8, 10, null, null, null, null, 'pending', '2020-05-21 05:51:10', null, null);
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (2, 8, 8, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (2, 1, 2, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (9, 8, 9, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 5, 5, 4, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (8, 5, 8, 3, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');
insert into experiences
  (helper_id, helped_id, creator_id, helper_rating, helped_rating, helper_comments, helped_comments, status, date_initiated, date_accepted, date_completed)
values
  (1, 6, 1, 7, 5, 'hello', 'goodbye', 'completed', '2020-05-12 07:51:11', '2020-06-03 15:26:43', '2020-07-09 00:02:56');

-- ************************************************************
-- user_skills table
-- ************************************************************
insert into user_skills
  (user_id, name)
  values
  (5, 'Programming'),
  (1, 'Carpentry'),
  (1, 'Landscaping'),
  (1, 'Carpentry'),
  (1, 'Math'),
  (1, 'Writing'),
  (9, 'Programming'),
  (4, 'Landscaping'),
  (3, 'Landscaping'),
  (10, 'Landscaping'),
  (4, 'Writing'),
  (7, 'Fitness'),
  (5, 'Yoga'),
  (6, 'Landscaping'),
  (9, 'Engineering'),
  (3, 'Writing'),
  (4, 'Fitness'),
  (2, 'Landscaping'),
  (8, 'Landscaping'),
  (10, 'Writing'),
  (9, 'Writing'),
  (1, 'Yoga'),
  (6, 'Engineering'),
  (9, 'Landscaping'),
  (10, 'Programming'),
  (10, 'Fitness'),
  (1, 'Programming'),
  (4, 'Programming'),
  (2, 'Yoga'),
  (10, 'Speaking'),
  (9, 'Speaking'),
  (1, 'Marketing'),
  (6, 'Cooking'),
  (9, 'Music'),
  (10, 'Dancing'),
  (10, 'Singing'),
  (1, 'Dancing'),
  (4, 'Dancing'),
  (2, 'Singing');



-- ************************************************************
-- skill_categories table
-- ************************************************************
insert into skill_categories
  (name)
values
  ('Analytical'),
  ('Business'),
  ('Creative'),
  ('Communication'),
  ('Phisical'),
  ('Management'),
  ('Technical');

-- ************************************************************
-- db_skills table
-- ************************************************************
insert into db_skills
  (skill_category_id, name)
values
  (1, 'Research'),
  (2, 'Creative'),
  (5, 'Yoga'),
  (1, 'Programming'),
  (7, 'Landscaping'),
  (1, 'Engineering'),
  (1, 'SASS'),
  (7, 'Carpentry'),
  (2, 'Sales'),
  (4, 'Networking'),
  (5, 'Fitness'),
  (3, 'Writing'),
  (1, 'Reading'),
  (3, 'Guitar'),
  (5, 'Meditation'),
  (3, 'Cooking'),
  (3, 'Dancing'),
  (3, 'Singing'),
  (3, 'Music'),
  (2, 'Marketing'),
  (4, 'Public Speaking');


-- -- ************************************************************
-- -- posts_skills table
-- -- ************************************************************
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (8, 9);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (3, 3);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (15, 4);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (11, 5);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (11, 9);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (8, 7);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (12, 8);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (14, 3);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (2, 3);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (12, 4);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (2, 7);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (10, 9);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (12, 10);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (6, 8);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (6, 1);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (6, 7);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (8, 7);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (4, 10);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (15, 3);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (2, 4);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (5, 5);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (2, 4);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (9, 3);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (3, 9);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (8, 2);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (3, 2);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (4, 7);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (7, 3);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (5, 5);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (10, 10);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (12, 1);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (10, 2);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (2, 6);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (15, 10);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (7, 5);
-- insert into posts_skills
--   (db_skills_id, post_id)
-- values
--   (3, 12);

-- -- ************************************************************
-- -- types table
-- -- ************************************************************
-- insert into types
--   (name)
-- values
--   ('Skills'),
--   ('Assets'),
--   ('Wants'),
--   ('Needs');

-- -- ************************************************************
-- -- topics table
-- -- ************************************************************
-- insert into topics (user_id, type_id, skill_category_id) values (7, 3, 4);
-- insert into topics (user_id, type_id, skill_category_id) values (13, 2, 7);
-- insert into topics (user_id, type_id, skill_category_id) values (1, 4, 7);
-- insert into topics (user_id, type_id, skill_category_id) values (14, 3, 4);
-- insert into topics (user_id, type_id, skill_category_id) values (9, 4, 5);
-- insert into topics (user_id, type_id, skill_category_id) values (11, 4, 7);
-- insert into topics (user_id, type_id, skill_category_id) values (9, 2, 5);
-- insert into topics (user_id, type_id, skill_category_id) values (4, 1, 5);
-- insert into topics (user_id, type_id, skill_category_id) values (7, 3, 1);
-- insert into topics (user_id, type_id, skill_category_id) values (2, 4, 1);
-- insert into topics (user_id, type_id, skill_category_id) values (7, 4, 6);
-- insert into topics (user_id, type_id, skill_category_id) values (1, 2, 7);
-- insert into topics (user_id, type_id, skill_category_id) values (9, 3, 2);
-- insert into topics (user_id, type_id, skill_category_id) values (7, 3, 6);
-- insert into topics (user_id, type_id, skill_category_id) values (10, 2, 3);
-- insert into topics (user_id, type_id, skill_category_id) values (11, 2, 7);
-- insert into topics (user_id, type_id, skill_category_id) values (11, 4, 3);
-- insert into topics (user_id, type_id, skill_category_id) values (2, 1, 6);
-- insert into topics (user_id, type_id, skill_category_id) values (8, 4, 4);
-- insert into topics (user_id, type_id, skill_category_id) values (12, 1, 6);
