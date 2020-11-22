drop database if exists employee_trackerDB;
create database employee_trackerDB;

use employee_trackerDB;

create table Department(
id int auto_increment,
name varchar(30), 
primary key (id)
);

create table role (
id int auto_increment,
title varchar (30),
salary decimal,
department_id int,
primary key (id)
);

create table employee( 
id int auto_increment,
first_name varchar(30), 
last_name varchar(30),
primary key (id)
);

select * from department;
select * from role;
select * from employee;