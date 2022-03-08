
/*Create 2 tables : Customer and Customer profile. They have a One to One relationship.
A customer can have only one profile, and a profile belongs to only one customer
The Customer table should have the columns : id, first_name, last_name NOT NULL
The Customer profile table should have the columns : 
id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)*/



-- One to one relation :
CREATE TABLE Customer (
    id_customer serial PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR NOT NULL
)

-- 'id' is :
-- the Primary Key of the table Customer
-- and the Primary Key and the Foreign Key and of the table Customer_profile.
CREATE TABLE Customer_profile (
    -- The valus to insert in this table are : pk_id_customer, isLoggedIn 
    pk_id_customer INTEGER NOT NULL,
    PRIMARY KEY(pk_id_customer),
    CONSTRAINT fk_id_customer FOREIGN KEY (pk_id_customer) REFERENCES Customer (id_customer),
    isLoggedIn BOOLEAN NOT NULL DEFAULT FALSE
)


-- Insert some data, use subqueries
INSERT INTO Customer(first_name, last_name) values
('avi','halif'),
('ortal','choen'),
('shlomi','david')


INSERT INTO Customer_profile(pk_id_customer, isLoggedIn) values
((select id_customer from Customer where first_name = 'avi'),),
((select id_customer from Customer where first_name = 'shlomi'),),
((select id_customer from Customer where first_name = 'ortal'),)



-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
SELECT c.first_name, cp.isLoggedIn
FROM Customer c

INNER JOIN Customer_profile cp
ON c.id_customer = cp.pk_id_customer

WHERE cp.isLoggedIn = true

-- All the customers even if the isLoggedIn column is null
SELECT c.first_name, c.first_name, cp.isLoggedIn
FROM Customer c

FULL OUTER JOIN Customer_profile cp
ON c.id_customer = cp.pk_id_customer


-- The number of customers that are not LoggedIn
SELECT COUNT(pk_id_customer)
FROM Customer_profile 

WHERE isLoggedIn = 'false'




-- PART 2

-- Create a table named Book, with the columns : id, title NOT NULL, author NOT NULL
CREATE TABLE Book (
    id_book serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    author VARCHAR NOT NULL
)


-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
INSERT INTO Book(title, author) values
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')


-- Create a table named Student, with the columns : id, name NOT NULL UNIQUE, age.
-- Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE Student (
    id_student serial PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    age INT
    CHECK (age BETWEEN 0 AND 15)
)



-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14
INSERT INTO Student(name, age) values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)



-- Create a table named Library, with the columns :
-- book_id ON DELETE CASCASE ON UPDATE CASCADE
-- student_id ON DELETE CASCASE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables :
--  A student can borrow many books, and a book can be borrowed by many children
CREATE TABLE Library (
  book_id INTEGER NOT NULL,
  student_id INTEGER NOT NULL,
  PRIMARY KEY (book_id, student_id),
  FOREIGN KEY (book_id) REFERENCES Book(id_book) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_id) REFERENCES Student(id_student) ON DELETE CASCADE ON UPDATE CASCADE,
  borrowed_date DATE
)



-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice in Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice in Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT into Library(book_id, student_id, borrowed_date) VALUES 
((SELECT id_book FROM Book where title = 'Alice In Wonderland'), 
(SELECT id_student FROM Student where name = 'John'), '2022-02-15'),
((SELECT id_book FROM Book where title = 'To kill a mockingbird'), 
(SELECT id_student FROM Student where name = 'Bob'), '2021-03-03'),
((SELECT id_book FROM Book where title = 'Alice In Wonderland'), 
(SELECT id_student FROM Student where name = 'Lera'), '2021-05-23'),
((SELECT id_book FROM Book where title = 'Harry Potter'), 
(SELECT id_student FROM Student where name = 'Bob'), '2021-08-12');



-- Display the data
-- Select all the columns from the junction table
SELECT * FROM Library;

-- Select the name and title of the borrowed books
SELECT s.name, b.title
FROM Library l
INNER JOIN Book b
ON l.book_id = b.id_book

INNER JOIN Student s
ON l.student_id = s.id_student

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(s.age)
FROM Library l
INNER JOIN Book b
ON l.book_id = b.id_book

INNER JOIN Student s
ON l.student_id = s.id_student

WHERE b.title = 'Alice In Wonderland'



-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM Student
WHERE name = 'Bob';
-- Al related rows will deleted also from the junction table














