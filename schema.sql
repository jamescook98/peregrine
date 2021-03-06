DROP DATABASE IF EXISTS peregrineDB;

CREATE DATABASE peregrineDB;

USE peregrineDB;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  userName VARCHAR(30) NOT NULL,
  userPassword VARCHAR(30) NOT NULL,
  userEmail VARCHAR(100) NOT NULL,
  verified BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE userPost (
  id int NOT NULL AUTO_INCREMENT,
  userEmail VARCHAR (100) NOT NULL,
  postLocation VARCHAR (140) NOT NULL,
  postDate DATETIME NOT NULL,
  postTitle VARCHAR(140) NOT NULL,
  postBody NVARCHAR(8000) NOT NULL,
  postTags NVARCHAR(8000) NULL,
  userRating int NOT NULL,
  imgFilepath VARCHAR(160) NULL,
  PRIMARY KEY (id)
);