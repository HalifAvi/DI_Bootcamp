
/*Create a table called orders and a table called items. You decide which fields should be in each table,
 although make sure the items table has a column called price.*/
CREATE TABLE orders (

	order_id serial PRIMARY KEY,
	customer_name VARCHAR(10)
)


CREATE TABLE items (

    item_id serial PRIMARY KEY,
	item_price INTEGER,
	item_desc VARCHAR(10),
    order_id INTEGER,
	FOREIGN KEY (order_id) REFERENCES orders (order_id)
)


insert into orders(customer_name) values
  ('avi'),
  ('ortal'),    
  ('shlomi'),
  ('niv');
  
insert into items(item_price, item_desc, order_id) values
  (200, 'fan', (select order_id from orders where customer_name = 'ortal')),
  (1200, 'table', (select order_id from orders where customer_name = 'ortal')),    
  (700, 'chair', (select order_id from orders where customer_name = 'ortal')),
  (200, 'shels', (select order_id from orders where customer_name = 'shlomi')),
  (1200, 'lamp', (select order_id from orders where customer_name = 'shlomi')),    
  (700, 'papers', (select order_id from orders where customer_name = 'shlomi')),
  (200, 'printer', (select order_id from orders where customer_name = 'shlomi')),
  (1200, 'computer', (select order_id from orders where customer_name = 'niv')),    
  (700, 'shampo', (select order_id from orders where customer_name = 'niv'));


/*Display all the items*/
SELECT item_desc FROM items;

/*Display all the orders*/
SELECT order_id, customer_name FROM orders;

/*Use Inner Join to display the orders with their items*/
SELECT customer_name, item_desc, item_price
FROM orders
INNER JOIN items
ON orders.order_id = items.order_id
ORDER BY customer_name;

