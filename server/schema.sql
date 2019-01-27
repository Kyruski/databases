DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username text not null
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text text,
  username integer,
  room text,
  foreign key (username) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */
-- INSERT INTO users (username) VALUES ('Valjean');
-- INSERT INTO messages (text, room, username) VALUES ('Hello', 'Lobby', 1);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

