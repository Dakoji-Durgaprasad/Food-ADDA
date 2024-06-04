create database Online_Food_Delivery;

use Online_Food_Delivery;

-- tables:

show tables;
-- user
-- restaurant
-- category
-- food
-- food_order
-- cart
-- order_item
-- order_delivery
-- delivery_person

select * from user;
select * from restaurant;
select * from category;
select * from food;
select * from food_order;
select * from cart;
select * from order_item;
select * from order_delivery;
select * from delivery_person;

-- describe
desc user;
desc restaurant;
desc category;
desc food;
desc food_order;
desc cart;
desc order_item;
desc order_delivery;
desc delivery_person;

ALTER TABLE user ADD UNIQUE (email_id);
ALTER TABLE user ADD UNIQUE (phone_number);

ALTER TABLE restaurant ADD UNIQUE (email_id);
ALTER TABLE restaurant ADD UNIQUE (phone_number);

ALTER TABLE food ADD FOREIGN KEY (catergory_id) REFERENCES category(category_id);
ALTER TABLE food ADD FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);

ALTER TABLE food_order ADD FOREIGN KEY (customer_id) REFERENCES user(user_id);
ALTER TABLE food_order ADD FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);

ALTER TABLE cart ADD FOREIGN KEY (customer_id) REFERENCES user(user_id);
ALTER TABLE cart ADD FOREIGN KEY (food_id) REFERENCES food(food_id);

ALTER TABLE order_item ADD FOREIGN KEY (order_id) REFERENCES food_order(order_id);
ALTER TABLE order_item ADD FOREIGN KEY (food_id) REFERENCES food(food_id);

ALTER TABLE delivery_person ADD UNIQUE (email_id);
ALTER TABLE delivery_person ADD UNIQUE (phone_number);
ALTER TABLE delivery_person ADD FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id);

ALTER TABLE order_delivery ADD FOREIGN KEY (order_id) REFERENCES food_order(order_id);
ALTER TABLE order_delivery ADD FOREIGN KEY (delivery_person_id) REFERENCES delivery_person(delivery_person_id);

select *from restaurant;

-- ALTER TABLE restaurant 
-- DROP COLUMN user_id;

-- ALTER TABLE food_order 
-- DROP COLUMN user_id;

-- ALTER TABLE delivery_person 
-- DROP COLUMN user_id;


-- select * from user_info;
-- drop table user_info;
-- create table User_info(
-- User_Id int primary key auto_increment,
-- User_Type varchar(200) not null,
-- First_Name varchar(200) not null,
-- Last_Name varchar(200) not null,
-- Email_Id varchar(200) unique not null,
-- Phone_Number bigint unique not null,
-- Street varchar(200),
-- City varchar(200),
-- Pin_Code varchar(30),
-- Password varchar(100) not null
-- );
