var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "pass",
  database: "bamazon"
});

// var choiceID = process.argv[2];
// var choiceNum = process.argv[3];
var found = false;



// function afterConnection() {

//     displayProducts(err, res);
//     connection.end();
//   });
// };

function displayProducts() {
	console.log("----------------");
	connection.query("SELECT * FROM products", function(err, res) {
    	if (err) throw err;
		for (i=0; i<res.length;i++) {
			console.log(res[i].product_name+" -- Price: $"+res[i].price+".00 -- ID: "+res[i].item_id);
			console.log("----------------");
		};
		startPrompt();
	});
};

function purchace(pID, pNum){
	connection.query("SELECT * FROM products", function(err, res) {
		for (i=0; i<res.length;i++) {
			if(res[i].item_id == pID){
				console.log(res[i].product_name);
				console.log(pID);
				var purchacePrice = res[i].price;
				var purchaceQuantity = res[i].stock_quantity;
				updateQuantity(purchacePrice, purchaceQuantity, pID, pNum);
				found = true;
			};
		};
	if (found === false){
				console.log("----------------\nI don't recognize that product\n----------------");
				startPrompt();
	};
	//connection.end();
	});
};

function updateQuantity(pD, pQ, pID, pNum){
	newQuantity = pQ - pNum;
	totalCost = pD * pNum;
	if (newQuantity >= 0){
		connection.query("UPDATE products SET ? WHERE ?",
			[
				{stock_quantity:newQuantity},
				{item_id:pID}
			],function(err){
				if (err) throw err;
				console.log("Purchace made!\nYour total: $"+totalCost+".00");
			}
		);
	} else {
		console.log("Not enough stock");
	}
	connection.end();
};


// if (choiceID === undefined){
// 	console.log("----------------\nType 'list' after the js call to see avilable products, \nType the product ID and qualtity (default is 1) to purchace\n----------------");
// } else if (choiceID === "list") { 
// 	afterConnection();
// } else {
// 	if (choiceNum === undefined || isNaN(choiceNum)){
// 	choiceNum = 1;
// 	};
// 	purchace();
// };


function startPrompt(){
	inquirer.prompt([
		{
		type: "list",
	      message: "Welcome to Bamazon!\nWHat would you like to do?",
	      choices: ["See Product List", "Purchace Items", "End Program"],
	      name: "cardType"
	  	}
		]) .then(function(inquirerResponse) {
	    if (inquirerResponse.cardType === "See Product List") {
	    	displayProducts();
	    } else if (inquirerResponse.cardType === "Purchace Items"){
	     	purchacePrompt();
	    } else {
	    	console.log ("See you later!")
	    	connection.end();
	    }
	  });
};

function purchacePrompt (){
	inquirer.prompt([
		{
		type: "input",
		name: "answerID",
		message: "Enter product ID"
		},
		{
		type: "input",
		name: "answerNum",
		message: "How many would you like to buy?",
		default: 1
		},

	]).then(function(inquirerResponse) {
		purchace(inquirerResponse.answerID, inquirerResponse.answerNum);
	});
};

startPrompt();





















