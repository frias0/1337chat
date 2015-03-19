CREATE USER 'sails'@'localhost' IDENTIFIED BY 'password';
CREATE DATABASE sails-test;
GRANT ALL PRIVILEGES ON sails-test.* TO 'sails'@'localhost';
