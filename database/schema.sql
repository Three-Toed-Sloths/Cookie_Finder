CREATE DATABASE onlineStore_DB;
USE onlineStore_DB;

CREATE TABLE store(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(120),
    image VARCHAR(50),
    price INT(5) NOT NULL,
    stock INT(3) NOT NULL,
    PRIMARY KEY(id)
);