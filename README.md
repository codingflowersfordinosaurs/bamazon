# bamazon
- Creating an Amazon-like storefront with MySQL

## Functions
- App will take in orders from customers and deplete stock from the store's inventory

## Contents of App/What was Done
- Create a MySQL Databse
- create a table inside of teh database
- -  have columns: item, product, department, price, stock
- Populate the database with 10 different products (mock data)
- Then.... create a Node application.
- - running the application will first display all of the items available for sale (include the ids, names, and prices of products for sale)
- app should prompt users with messages
- - id of product they'd like to buy
- - how many units of the product they'd like to buy
- Once order has been placed, the application should check if your store has enough of the product to meet the customer's request
- - not enough of the product = message "insufficient stock; try again
- - if there is enough quantity, customer's order will be fulfilled; this should update the SQL database to reflect the remaining quantity
- -  once the update goes through, it shows the customer the total cost of their purchase