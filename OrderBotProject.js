/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function getUserInput(){
	let yourName = READLINE.question("Enter your name:")
console.log("my name is" + yourName)

let theirName = READLINE.question("Enter your friend's name:")
console.log("my name is" + theirName)

let anotherName = READLINE.question("Enter your other friend's name:")
console.log("my name is" + anotherName)

let yourMealPrice = READLINE.question("Enter the price of your meal:")
console.log("the price is" + yourMealPrice)

let theirMealPrice = READLINE.question("Enter the price of their meal:")
console.log("the price is" + theirMealPrice)

let anotherMealPrice = READLINE.question("Enter the price of the other meal:")

let yourDrinkPrice = READLINE.question("Enter the price of your drink:")
console.log("the price is" + yourDrinkPrice)

let theirDrinkPrice = READLINE.question("Enter the price of their drink:")
console.log("the price is" + theirDrinkPrice)

let anotherDrinkPrice = READLINE.question("Enter the price of the other drink:")
console.log("the price is" + anotherDrinkPrice)

console.log(addNumber( yourMealPrice, yourDrinkPrice, theirMealPrice, theirDrinkPrice, anotherMealPrice, anotherDrinkPrice))
}

function addNumber(yourMealPrice, yourDrinkPrice, theirMealPrice, theirDrinkPrice , anotherMealPrice, anotherDrinkPrice){
var cost = parseInt(yourMealPrice) + parseInt(yourDrinkPrice) + parseInt(theirMealPrice) + parseInt(theirDrinkPrice) + parseInt(anotherMealPrice) + parseInt(anotherDrinkPrice)
return cost 
}
getUserInput()


/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function getUserInput(){
	let tip1 = READLINE.question("How much do you want to tip?")
console.log("I am going to give" + tip1)

let tip2 = READLINE.question("How much do they want to tip?")
console.log("I am going to give" + tip2)

let tip3 = READLINE.question("How much does the other one want to tip?")
console.log("I am going to give" + tip3)

console.log(addNumber(yourMealPrice, yourDrinkPrice, tip1, theirMealPrice, theirDrinkPrice, tip2, anotherMealPrice, anotherDrinkPrice, tip3))
}

function addNumber(yourMealPrice, yourDrinkPrice, tip1, theirMealPrice, theirDrinkPrice, tip2, anotherMealPrice, tip3, anotherDrinkPrice){
var totalCost = (parseInt(yourMealPrice) + parseInt(yourDrinkPrice) + parseInt(tip1) + parseInt(theirMealPrice) + parseInt(theirDrinkPrice) + parseInt(tip2) + parseInt(anotherMealPrice) + parseInt(anotherDrinkPrice) + parseInt(tip3)) * parseInt(.0925)
return totalCost 
}
getUserInput()






/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */










/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */


