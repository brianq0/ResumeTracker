DROP DATABASE IF EXISTS resumes_db;
CREATE DATABASE resumes_db;
USE resumes_db;

CREATE TABLE resumes(
    id INT NOT NULL AUTO_INCREMENT,
    resName VARCHAR(40),
    resLiked BOOLEAN,
    PRIMARY KEY(id)

)

INSERT INTO resumes (resName, resLiked)
VALUES ("John Smith", true), ("Brian Qian", true), ("Tyreek Hill", true)