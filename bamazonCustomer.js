var mysql = require("mysql");
//var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "pass",
  database: "bamazon"
});

var choiceID = process.argv[2];
var choiceNum = process.argv[3];
var found = false;



function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    displayProducts(err, res);
    connection.end();
  });
};

function displayProducts(err,res) {
	for (i=0; i<res.length;i++) {
		console.log(res[i].product_name+" -- Price: $"+res[i].price+".00 -- ID: "+res[i].item_id);
		console.log("----------------");
	};
};

function purchace(err,res){
	connection.query("SELECT * FROM products", function(err, res) {
		for (i=0; i<res.length;i++) {
			if(res[i].item_id == choiceID){
				console.log(res[i].product_name);
				var purchacePrice = res[i].price;
				var purchaceQuantity = res[i].stock_quantity;
				updateQuantity(purchacePrice, purchaceQuantity);
				found = true;
			};
		};
	if (found === false){
				console.log("I don't recognize that product");
	};
	connection.end();
	});
};

function updateQuantity(pD, pQ){
	newQuantity = pQ - choiceNum;
	totalCost = pD * choiceNum;
	if (newQuantity >= 0){
		connection.query("UPDATE products SET ? WHERE ?",
			[
				{stock_quantity:newQuantity},
				{item_id:choiceID}
			],function(err){
				if (err) throw err;
				console.log("Purchace made!\nYour total: $"+totalCost+".00");
			}
		);
	} else {
		console.log("Not enough stock");
	}
};


if (choiceID === undefined){
	console.log("Type 'list' after the js call to see products, type the product ID and qualtity (default is 1) to purchace");
} else if (choiceID === "list") { 
	afterConnection();
} else {
	if (choiceNum === undefined || isNaN(choiceNum)){
	choiceNum = 1;
	};
	purchace();
};