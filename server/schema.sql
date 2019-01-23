CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
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
  text text,
  username integer,
  room integer,
  foreign key (username) REFERENCES usernames(id),
  foreign key (room) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

