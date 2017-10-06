# Bamazon is an appliation that simulates a simple online storefront

The Bamazon app connects a node js file with a local mySQL database to provide a virtual storefront in the command line and track stock of simulated products.


## Instructions:

to use Bamazon, launch the 'bamazonCustomer.js' file using node in the command line:

![nodeLaunch](/images/nodeLaunch.png) 

This brings the user to an Inquirer prompt:

![firstPrompt](/images/firstPrompt.png)

* Selecting "See Product List" will show the user the items stored in the mySQL database, their IDs, and their prices before bringing the user back to the first prompt:

![seeProducts](/images/seeProducts.png)

* Selecting "Purchace Items" will bring the user through two more Inquirer promps. First asking for the desired product's ID, and then asking for the desired quanitiy (defaulted to 1).  It will then display the item's name and the total cost to the user:

![buyScreen](/images/buyScreen.png)

* Selecting "End Program" will end the connection, and deliver a goodbye message in the command line:

![endConnection](/images/endConnection.png)