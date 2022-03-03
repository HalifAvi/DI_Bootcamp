
/* Exercise 1 : Items And Customers */

/* All items, ordered by price (lowest to highest) */
SELECT item_name, item_price FROM public.items ORDER BY item_price

/* Items with a price above 80 (80 included), ordered by price (highest to lowest) */
SELECT item_name, item_price FROM public.items WHERE item_price >= 80 ORDER BY item_price DESC

/* The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results */
SELECT customer_id, customer_firstname FROM  public.customers ORDER BY customer_firstname;

/* All last names (no other columns!), in reverse alphabetical order (Z-A) */
SELECT customer_lastname FROM public.customers ORDER BY customer_lastname DESC;


/* Create a table named purchases. It should have 3 columns :
customer_id : this column references the table customers
item_id : this column references the table items
quantity_purchased : this column is the quantity of items purchased by a certain customer */
CREATE TABLE purchases (

	purchase_id serial PRIMARY KEY,
	customer_id INTEGER,
	item_id INTEGER,
	FOREIGN KEY (customer_id) REFERENCES public.customers (customer_id),
	FOREIGN KEY (item_id) REFERENCES public.items (item_id),
	quantity_purchased integer
)



/* Insert purchases for the customers, use subqueries:
Scott Scott bought one fan
Melanie Johnson bought ten large desks
Greg Jones bougth two small desksv */
insert into public.purchases(customer_id, item_id, quantity_purchased) values
  ((select customer_id
  from public.customers
  where customer_firstname = 'Scott' AND customer_lastname = 'Scott'),
 (select item_id
  from public.items
  where item_name= 'Fan'),
  1),
  ((select customer_id
  from public.customers
  where customer_firstname = 'Melanie' AND customer_lastname = 'Johnson'),
 (select item_id
  from public.items
  where item_name= 'Large Desk'),
  10),    
  ((select customer_id
  from public.customers
  where customer_firstname = 'Greg' AND customer_lastname = 'Jones'),
 (select item_id
  from public.items
  where item_name= 'Small Desk'),
  2);



/* Part II */
/* Use SQL to get the following from the database:
All purchases. Is this information useful to us? No, cause it's all displayed as id's*/
SELECT purchase_id, customer_id, item_id, quantity_purchased FROM public.purchases


/*All purchases, joining with the customers table*/
SELECT purchase_id, quantity_purchased, customer_firstname, customer_lastname, item_name
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id;


/* Purchases of the customer with the ID equal to 5 */
SELECT purchase_id, quantity_purchased, customer_firstname, customer_lastname, item_name
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id
WHERE customers.customer_id = 5;


/* Purchases for a large desk AND a small desk */
SELECT purchase_id, quantity_purchased, customer_firstname, customer_lastname, item_name
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id
WHERE items.item_name = 'Large Desk' OR items.item_name = 'Small Desk';


/* Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
Customer first name
Customer last name
Item name */
SELECT distinct item_name, customer_firstname, customer_lastname
FROM purchases
INNER JOIN customers ON purchases.customer_id = customers.customer_id
INNER JOIN items ON purchases.item_id = items.item_id


/* Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not? */
insert into public.purchases(customer_id, quantity_purchased) values
  ((select customer_id
  from public.customers
  where customer_firstname = 'Scott' AND customer_lastname = 'Scott'),
  1); /* Yes! It worked, cause we didn't defined 'item_id' col as NOT NULL */





  /* Exercise 2 : Dvdrental Database */
  /* In the dvdrental database write a query to select all the columns from the “customer” table */
SELECT customer_id, store_id, first_name, last_name, email, address_id, activebool, create_date, last_update, active FROM customer


  /* Write a query to display the names (first_name, last_name) using an alias named “full_name”. */
SELECT first_name || ' ' || last_name AS full_name FROM customer

 /* Lets get all the dates that accounts were created.
  Write a query to select all the create_date from the “customer” table (there should be no duplicates).*/
SELECT distinct create_date FROM customer

/* Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name */
SELECT customer_id, store_id, first_name, last_name, email, address_id, activebool, create_date, last_update, active FROM customer
ORDER BY first_name DESC;

/* Write a query to get the film ID, title, description, year of release and
 rental rate in ascending order according to their rental rate.*/
SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate;

/* Write a query to get the address, and the phone number of all customers living in the Texas district,
 these details can be found in the “address” table*/
SELECT address.address, address.phone
FROM customer
INNER JOIN address ON customer.address_id = address.address_id
WHERE address.district = 'Texas';

/* Write a query to retrieve all movie details where the movie id is either 15 or 150. */
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

/* Write a query which should check if your favorite movie exists in the database.
Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table*/
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Zorro Ark';


/* No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description,
length and the rental rate of all the movies starting with the two first letters of your favorite movie*/
SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Zo%';


/* Write a query which will find the 10 cheapest movies */
SELECT title, replacement_cost
FROM film
ORDER BY replacement_cost
LIMIT 10;


/* Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
Bonus: Try to not use LIMIT.*/
SELECT title, replacement_cost
FROM film
ORDER BY replacement_cost
LIMIT 10 OFFSET 10;

/* BONUS : */
SELECT title, replacement_cost 
FROM film
ORDER BY replacement_cost
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;


/* Write a query which will join the data in the customer table and the payment table.
You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…)*/
SELECT payment.amount, payment.payment_date 
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY payment.customer_id;


/* You need to check your inventory. Write a query to get all the movies which are not in inventory*/
SELECT distinct film.title
FROM film /* LEFT TABLE : FIRST TABLE = 'film'*/
LEFT JOIN inventory ON inventory.film_id = film.film_id /* LEFT JOIN : TILL HERE WE HAVE ALL DATA FROM 'film' AND IF IT'S NOT
EXSIST IN 'inventory' TABLE WE WILL HAVE 'null' */
WHERE inventory.film_id IS NULL /* BY THIS ROW WE CHOOSE DISPLAY JUST THE 'null' VALUES*/


/* Write a query to find which city is in which country */
SELECT city.city, country.country 
FROM city
INNER JOIN country ON city.country_id = country.country_id



/*Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id,
 names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd */
 SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id
 FROM customer
 INNER JOIN payment ON customer.customer_id = payment.customer_id
 ORDER BY payment.staff_id;



