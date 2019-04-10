var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  // MY PORT
  port: 3306,
  // MY USERNAME
  user: "root",
  // MY PASSWORD
  password: "",
  database: "bamazon_db"
});

connection.connect(err => {
  if (err) throw err;
  // start();
  listProducts();
  start();
});

function start() {
  //listProducts = start
  connection.query(
    // "SELECT item_id, product_name, price FROM products",
    "SELECT * FROM products", //less code to write
    (err, res) => {
      // MAYBE ADD IN AFTER ASKING CUSTOMER WHAT THEY WANT...
      if (err) throw err;
      // console.log("PRODUCTS FOR SALE");
      // console.log(res);
      // buyProducts();
      inquirer
        .prompt([
          {
            type: "input",
            name: "idpick",
            message: "Type in the ID of the product you want to purchase?"
          },
          {
            type: "input",
            name: "quantity",
            message: "How many of this product do you want?"
          }
        ])
        .then(results => {
          stockCheck(results);
        });
    }
  );
}

function listProducts() {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    // dont use. too many
    // for (var i = 0; i < res.length; i++) {
    //   console.log(res[i].products);
    // }
    res.forEach(product => {
      console.log(
        // TEMPLATE LITERALS: using back tick; from the inclass exercise we did
        `ITEM ID: ${product.item_id}, PRODUCT NAME: ${
          product.product_name
        }, PRICE: ${product.price}`
      );
      console.log("*******************************************");
    });
  });
}

// stock check
function stockCheck(res) {
  let itemsID = res.idpick;
  let purchasedQuant = parseInt(res.quantity);

  connection.query(
    // using back tick; from the inclass exercise we did during lab time
    `SELECT stock_quantity, price FROM products WHERE item_id = "${itemsID}"`,
    (err, res) => {
      if (err) throw err;
      var oldStock = res[0].stock_quantity;
      var price = res[0].price;
      if (purchasedQuant > oldStock) {
        console.log(
          "stock is too low. change your requested quantity or pick a new item"
        );
        start();
      } else {
        buyProducts(); //itemsID, purchasedQuant, oldStock, price
      }
    }
  );
}

function buyProducts() { //product, quantity, presentStock, price
  // let id = parseInt(data.item_id);
  connection.query(
    `UPDATE products SET ? WHERE ?`,
    [
      {
        stock_quantity: presentStock - quantity
      },
      {
        item_id: product
      }
    ],
    console.log(`Total: ${price * quantity}`),
    (err, res) => {
      if (err) throw err;
    }
  );
  start();
}
