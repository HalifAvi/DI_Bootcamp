
/* Count how many actors are in the table. */
SELECT COUNT(actor_id serial) FROM actors

/* Try to add a new actor with some blank fields. What do you think the outcome will be ? */
/* It's impossible cause we defined some columns as required fields*/