DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(40) NOT NULL,
department_name VARCHAR(40),
price DECIMAL(5, 2),
stock_quanity INT(5),
Primary Key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Alarm Clock", "Electronics", 10.00, 45),
("Tennis Racket", "Sports", 25.00, 35),
("Television", "Electronics", 50.00, 40),
("Laptop", "Electronics", 45.00, 50),
("Dog Crate", "Pets", 20.00, 40),
("Baseball Glove", "Sports", 15.00, 60),
("Dog Leash", "Pets", 5.00, 75),
("Football Helmet", "Sports", 30.00, 45),
("Cell Phone", "Electronics", 40.00, 55),
("Bicycle", "Sports", 35.00, 65);

SELECT * FROM products;
