CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id integer primary key,
  username text not null
);

CREATE TABLE rooms (
  id integer primary key,
  roomname text not null
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer primary key,
  messagetext text,
  username integer,
  room integer,
  -- created_At timestamp,
  -- updated_At timestamp,
  foreign key (username) REFERENCES usernames(id),
  foreign key (room) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

