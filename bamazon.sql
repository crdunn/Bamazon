DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

	item_id INT(5) NOT NULL,

	product_name VARCHAR(30) NOT NULL,

	department_name VARCHAR(30) NOT NULL,

	price DECIMAL(5,2) NOT NULL,
    
	stock_quantity INT(5)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('26843','Home Reference Guide','Books','16','200');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('52934','Bananas','Food','5','500');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('90436','Laptop','Electronics','900','50');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('35832','Javascript Textbook','Books','50','300');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('23464','Television','Electronics','500','75');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('74376','Bestseller','Books','35,5000');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('18346','Hammer','Hardware','25','100');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('33846','Screwdriver','Hardware','15','30');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('48382','PSYUPS','Psyonic Enhancers','100','50');
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values ('84012','Construction Set','Toys','45','150');