

/*Exercise 1: DVD Rental*/

/*Get a list of all film languages*/
SELECT DISTINCT language.name 
FROM film
INNER JOIN language
ON language.language_id = film.language_id;

/*Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
Get all films, even if they don’t have languages.
Get all languages, even if there are no films in those languages.*/
SELECT language.name, film.title
FROM film
FULL OUTER JOIN language
ON language.language_id = film.language_id;

/*Create a new table called new_film with the following columns :
 id, name. Add some new films to the table.*/

 CREATE TABLE new_film(

    new_film_id serial PRIMARY KEY,
	new_film_name VARCHAR(50)
 );

 INSERT INTO new_film(new_film_name) values
   	('Chamber Italian'),
    ('Airport Pollock'),
    ('Bright Encounters'),
    ('Alaska Phantom');


/*Create a new table called customer_review, which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
It should have the following columns:
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.*/
CREATE TABLE customer_review(
    /*If we'll delete the father(='film') the child(='review') will also be deleted*/
    /*The DELETE CASCADE constraint will allow you to delete a parent record,
    but its corresponding child record will be deleted as well*/
    review_id serial PRIMARY KEY NOT NULL,
    film_id INTEGER,
    FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE,
    language_id INTEGER,
    FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE,
    title VARCHAR(50),
    score INT NOT NULL
    CHECK (score BETWEEN 1 AND 10),
    review_text VARCHAR,
    last_update  DATE NOT NULL
)


 /*Add 3 movie reviews. Make sure you link them to valid objects in the other tables.*/
  INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update) values
   	((select new_film_id from new_film where new_film_name='Chamber Italian'),
     (select language_id from language where language_id = (select language_id from film where title='Chamber Italian')),
     'title1 of review',
     10,
     'dfsdf dsfdsf dfsd fsdf sfdgfgfg1',
     '1988-10-25'),

     ((select new_film_id from new_film where new_film_name='Airport Pollock'),
     (select language_id from language where language_id = (select language_id from film where title='Airport Pollock')),
     'title1 of review',
     5,
     'dfsdf dsfdsf dfsd fsdf sfdgfgfg324',
     '1987-01-28'),

     ((select new_film_id from new_film where new_film_name='Airport Pollock'),
     (select language_id from language where language_id = (select language_id from film where title='Airport Pollock')),
     'title2 of review',
     1,
     'dfsdf dsfdsf dfsd fsdf sfdgfgfg4365645',
     '1999-10-20');


/*Delete a film that has a review from the new_film table,
 what happens to the customer_review table?*/
 DELETE FROM new_film where new_film_name = 'Airport Pollock';
 /*The record deleted from review table and also from new_film table*/




 /*Exercise 2 : DVD Rental*/

 /*Use UPDATE to change the language of some films.
  Make sure that you use valid languages*/
UPDATE film
SET language_id = (select language_id from language where name = 'French')
WHERE film.title IN('Chamber Italian', 'Bright Encounters', 'Grosse Wonderful');

/*Which foreign keys (references) are defined for the customer table?
How does this affect the way in which we INSERT into the customer table?*/
/*store_id & address_id - When we insert to customer table we have to base on
valid id values from store and address tables*/

/*We created a new table called customer_review.
Drop this table. Is this an easy step, or does it need extra checking?*/
DROP TABLE customer_review;

/*Find out how many rentals are still outstanding
(ie. have not been returned to the store yet).*/
SELECT COUNT(rental_id) from rental WHERE rental.return_date IS NULL;

 /*Find the 30 most expensive movies which are outstanding
  (ie. have not been returned to the store yet)*/
SELECT f.title, p.amount, r.return_date
FROM film f

INNER JOIN inventory i 
ON f.film_id = i.film_id

INNER JOIN rental r
ON i.inventory_id = r.inventory_id

INNER JOIN payment p
ON r.rental_id = p.rental_id 

WHERE r.return_date IS NULL

ORDER BY p.amount DESC

LIMIT 30;


/*Your friend is at the store, and decides to rent a movie.
He knows he wants to see 4 movies, but he can’t remember their names.
Can you help him find which movies he wants to rent?

The 3rd film : A film that his friend Matthew Mahan rented.
He paid over $4.00 for the rental, and he returned it between the 28th
of July and the 1st of August, 2005.

The 4th film : His friend Matthew Mahan watched this film, as well.
It had the word “boat” in the title or description,
and it looked like it was a very expensive DVD to replace.*/
SELECT distinct(f.title)
FROM film f

INNER JOIN film_actor fa
ON f.film_id = fa.film_id
INNER JOIN actor a
ON fa.actor_id = a.actor_id

INNER JOIN film_category fc
ON fc.film_id = f.film_id
INNER JOIN category c
ON c.category_id = fc.category_id

 
INNER JOIN inventory i
ON i.film_id = f.film_id
INNER JOIN rental r
ON i.inventory_id = r.inventory_id
INNER JOIN payment p
ON r.rental_id = p.rental_id
INNER JOIN customer cu
ON p.customer_id = cu.customer_id



WHERE (f.description LIKE '%Sumo Wrestler%' AND a.first_name = 'Penelope' AND a.last_name = 'Monroe')

OR (c.name = 'Documentary' AND f.length < 60 AND f.rating = 'R')

/*The 3rd film : A film that his friend Matthew Mahan rented.
He paid over $4.00 for the rental, and he returned it between the 28th of
July and the 1st of August, 2005.*/
OR (cu.first_name = 'Matthew' AND cu.last_name = 'Mahan' AND p.amount > 4 AND 
   (r.return_date BETWEEN '2005-07-28' AND '2005-08-01'))  

/*The 4th film : His friend Matthew Mahan watched this film, as well.
It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace*/
OR (cu.first_name = 'Matthew' AND cu.last_name = 'Mahan' AND (f.description like '%boat%' OR f.title like '%boat%') 
AND (select MAX(amount) from payment) 






   
