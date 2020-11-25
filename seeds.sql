drop database if exists employee_trackerDB;
create database employee_trackerDB;

use employee_trackerDB;

create table department(
id int auto_increment not null,
department varchar(30), 
primary key (id)
);

create table role (
id int auto_increment not null,
title varchar (30),
salary decimal,
department_id int not null,
primary key (id)
);

create table employee( 
id int auto_increment not null,
first_name varchar(30), 
last_name varchar(30),
role_id int not null,
manager_id int,
primary key (id)
-- FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);


insert into department (department) values("Sales"), ("Accounting"), ("Human Resources"), ("Engineering"), ("Legal");

insert into role (title, salary, department_id) values("Sales Lead", 100000, 1) , ("Sales Person", 80000, 1), ("Lead Engineer", 150000, 2), 
("Software Engineer", 120000, 2), ("Account Manager", 160000, 3), ("Account", 120000, 3), ("Legal Team Lead", 250000, 4), 
("Lawyer", 190000, 4), ("Software Engineer", 120000, 2);

insert into employee (first_name, last_name, role_id, manager_id) values("John", "Doe", 1, null), ("Mike", "Chan", 1, 1), ("Ashley", "Rodriguez", 2, null),
("Kevin", "Tupik", 2, 3), ("Molly", "Brown", 3, null), ("Sarah", "Lord", 4, null), ("Tom", "Allen", 4, 7);departmentdepartmentid




select * from department;
select * from role;
select * from employee;
