DROP DATABASE IF EXISTS resumes_db;
CREATE DATABASE resumes_db;
USE resumes_db;

CREATE TABLE resumes(
    id INT NOT NULL AUTO_INCREMENT,
    resName VARCHAR(40),
    resScore INT(10),
    PRIMARY KEY(id)

)

INSERT INTO resumes (resName, resScore)
VALUES ("John Smith", 3), ("Brian Qian", 5), ("Tyreek Hill", 1)