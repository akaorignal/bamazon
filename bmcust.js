//NPM
var inquirer = require("inquirer"); 
var mysql = require('mysql');
var inquirer = require('inquirer');

/* connects with db */
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "shad",
  database: "bamazon_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId); // verifies connection
 
//displays products table when app is ran
  queryProducts();

  //prompt user to choose productID and how many they want



  
})



// });


//    * conjunctionFUNCTIONs */
   // Input - {type: 'input'}

//looks at products table and lists all data
function queryProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].productName + " | " + res[i].departmentName + " | " + res[i].price, res[i].stock_q);
    }
    console.log("-----------------------------------");

  });
}

function chooseProduct(){

  inquirer.prompt([/* Pass your questions in here */
     {
      name: "product",
      message: "Which Item Id?"
     
    }, { 
      name: "qauntity",
      message: "How Many Would You Like?"
    }
     

    ]).then(function (answers) {
    var productWanted = answers.product -1
    var chosenProduct = res[productWanted]
    var quan = answers.quantity
    if (quan < res[productWanted].stock_q){

                console.log("Your total for " + "(" + answers.quantity + ")" + " - " + res[product].products + quan);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    StockQuantity: res[productWanted].stock_q - quan
                }, {
                    id: res[productWanted].id
                }], function(err, res) {
                    //console.log(err);
                    
                });
    }
 connection.end();
      product(); 
});

}

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

function product (){
  this.name ="product";
  this.qauntity ="qauntity";

  this.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.qauntity);
  };
}