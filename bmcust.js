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

  chooseProduct();



   connection.end();
});



// });


//    * conjunctionFUNCTIONs */
   // Input - {type: 'input'}
// Take type, name, message[, default, filter, validate] properties. //


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
      type:
      name: "product",
      message: "Which Item Id?"
     
    }, { 
      type:
      name: "qauntity",
      message: "How Many Would You Like?"
    }
     

    ]).then(function (answers) {
    var yourProd = new product (answers.name, answers.quantity);

      yourProd.product(); 
});

}

funtion product (){
  this.name ="product";
  this.qauntity ="qauntity";

  this.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.qauntity);
  };
}