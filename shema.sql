DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
item_id INTEGER(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
product_name VARCHAR(50) NOT NULL, 
department_name VARCHAR(50) NOT NULL, 
price DECIMAL(10,4) NOT NULL, 
stock_quantity INTEGER(11) NOT NULL
);
