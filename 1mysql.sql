DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
item_id INTEGER(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
product_name VARCHAR(50) NOT NULL, 
department_name VARCHAR(50) NOT NULL, 
price DECIMAL(10,4) NOT NULL, 
stock_quantity INTEGER(11) NOT NULL,
quantity_purchased INTEGER(11) NOT NULL
);

INSERT INTO products VALUES (1, "Soil", "Gardening/Planting", 10.99, 20);
INSERT INTO products VALUES (2, "Pot", "Gardening/Planting", 5.99, 30);
INSERT INTO products VALUES (3, "Spray Bottle", "Gardening/Planting", 2.99, 40);
INSERT INTO products VALUES (4, "Watering Can", "Gardening/Planting", 15.99, 15);
INSERT INTO products VALUES (5, "Snake Plant", "Gardening/Planting", 12.99, 10);
INSERT INTO products VALUES (6, "Monstera", "Gardening/Planting", 30.99, 5);
INSERT INTO products VALUES (7, "Croton", "Gardening/Planting", 17.99, 10);
INSERT INTO products VALUES (8, "Jade", "Gardening/Planting", 52.99, 30);
INSERT INTO products VALUES (9, "Alocasia", "Gardening/Planting", 20.99, 10);
INSERT INTO products VALUES (10, "Pothos", "Gardening/Planting", 12.99, 50);


SELECT * FROM products;
SHOW TABLES;
DESCRIBE products;



