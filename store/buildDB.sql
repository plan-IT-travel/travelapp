-- 
CREATE TABLE IF NOT EXISTS user_session(
    id serial NOT NULL,
    cookie_id varchar NOT NULL,
    user_id bigint NOT NULL,
    date_of_creation timestamp NOT NULL,
    CONSTRAINT "user_session_pk0" PRIMARY KEY ("id")
) WITH (OIDS=FALSE);

-- Users table
CREATE TABLE IF NOT EXISTS users(
    id serial NOT NULL,
    username varchar NOT NULL,
    password varchar NOT NULL,
    firstname varchar NOT NULL,
    lastname varchar NOT NULL,
    CONSTRAINT "users_pk0" PRIMARY KEY ("id")
) WITH (OIDS=FALSE);

-- Group table
CREATE TABLE IF NOT EXISTS travel_group(
    id serial NOT NULL,
    owner_id bigint NOT NULL,
    group_name varchar NOT NULL,
    travel_destination varchar NOT NULL,
    CONSTRAINT "travel_group_pk0" PRIMARY KEY ("id")
) WITH (OIDS=FALSE);

--Itinerary Item table
CREATE TABLE IF NOT EXISTS itinerary_items(
    id serial NOT NULL,
    group_id bigint NOT NULL,
    title varchar NOT NULL,
    category varchar NOT NULL,
    hyperlink varchar NOT NULL,
    cost float NOT NULL,
    date_of_event date NOT NULL,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp,
    deleted_at timestamp,
    CONSTRAINT "itinerary_items_pk0" PRIMARY KEY ("id")
) WITH (OIDS=FALSE);

--Travel group members
CREATE TABLE IF NOT EXISTS group_members(
    id serial NOT NULL,
    user_id bigint NOT NULL,
    group_id bigint NOT NULL,
    CONSTRAINT "group_member_pk0" PRIMARY KEY ("id")
) WITH (OIDS=FALSE);

/*
Sessions:
    -users
*/
ALTER TABLE user_session ADD CONSTRAINT "user_session_fk0" FOREIGN KEY ("user_id") REFERENCES users("id");

/*
Users:
    -unique username
*/
ALTER TABLE users ADD CONSTRAINT "unique_username" UNIQUE ("username");

/* 
Travel Group FKs 
    - owner_id: users
*/
ALTER TABLE travel_group ADD CONSTRAINT "travel_group_fk0" FOREIGN KEY ("owner_id") REFERENCES users("id");

/*
Itinerary Item:
    - group_id
*/
ALTER TABLE itinerary_items ADD CONSTRAINT "itinerary_items_fk0" FOREIGN KEY ("group_id") REFERENCES travel_group("id");

/*
Travel Group Members:
    - user_id: users
    - group_id: travel_group
*/

ALTER TABLE group_members ADD CONSTRAINT "group_members_fk0" FOREIGN KEY ("user_id") REFERENCES users("id");
ALTER TABLE group_members ADD CONSTRAINT "group_members_fk1" FOREIGN KEY ("group_id") REFERENCES travel_group("id");
-- Add UNIQUE constraint of user_id + group_id
ALTER TABLE group_members ADD CONSTRAINT "unique_user_group" UNIQUE ("user_id", "group_id");