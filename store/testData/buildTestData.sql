INSERT INTO users(username, password, firstname, lastname) VALUES ('bigfluffy', 'password$1', 'Julie', 'Sim');
INSERT INTO users(username, password, firstname, lastname) VALUES ('gigachad', 'fifty5', 'Chad', 'Guy');
INSERT INTO users(username, password, firstname, lastname) VALUES ('nifty', 'abc', 'Lamb', 'Chop');
INSERT INTO users(username, password, firstname, lastname) VALUES ('swifty', 'supersafe', 'Sam', 'Wise');
INSERT INTO users(username, password, firstname, lastname) VALUES ('billybobswankins', 'notsafe', 'Bob', 'Billy');
INSERT INTO users(username, password, firstname, lastname) VALUES ('yeetypie', 'what', 'Jack', 'Flap');

INSERT INTO travel_group(owner_id, group_name, travel_destination) VALUES ('3', 'Fun Travel Group', 'Paris, France'); --,'2023-08-20', '2023-08-28')
INSERT INTO travel_group(owner_id, group_name, travel_destination) VALUES ('2', 'Wow we are so cool', 'Miami, Florida'); --2022-06-17,2022-08-29

INSERT INTO itinerary_items(group_id, title, category, hyperlink, cost, date_of_event) VALUES ('1', 'Go to the beach', 'Fun', 'https://www.hotels.com/go/usa/south-beach-miami', 0, '2023-08-20 12:30:00');
INSERT INTO itinerary_items(group_id, title, category, hyperlink, cost, date_of_event) VALUES ('1', 'Go see a show', 'Entertainment', 'https://www.viator.com/tours/Paris/Crazy-Horse-Cabaret-in-Paris/d479-6281CRAZYHORSE', 100, '2023-08-23 14:20:00');
INSERT INTO itinerary_items(group_id, title, category, hyperlink, cost, date_of_event) VALUES ('1', 'Eat yummy food', 'Food', 'https://sexyfishmiami.com/?utm_source=YextGoogle&utm_medium=Organic', 20, '2023-08-21 20:00:00');

INSERT INTO group_members(user_id, group_id) VALUES ('3', '1');
INSERT INTO group_members(user_id, group_id) VALUES ('2', '1');
INSERT INTO group_members(user_id, group_id) VALUES ('5', '1');
INSERT INTO group_members(user_id, group_id) VALUES ('6', '1');
INSERT INTO group_members(user_id, group_id) VALUES ('3', '2');
INSERT INTO group_members(user_id, group_id) VALUES ('1', '2');
INSERT INTO group_members(user_id, group_id) VALUES ('2', '2');