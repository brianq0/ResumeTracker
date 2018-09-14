DROP DATABASE IF EXISTS `e5lrwvctj4avryxq`;
CREATE DATABASE `e5lrwvctj4avryxq`;
USE `e5lrwvctj4avryxq`;

CREATE TABLE resumes(
    id INT NOT NULL AUTO_INCREMENT,
    resName VARCHAR(40),
    resLiked BOOLEAN,
    PRIMARY KEY(id)

)

