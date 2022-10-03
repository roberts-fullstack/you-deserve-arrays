const prompt = require('prompt-sync')
({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let thirdItem = userArray[2]
// console.log(thirdItem);

if (typeof thirdItem === "string"){ 
  console.log("Your third array item IS a string, and the 2nd character in that item is: " + thirdItem[1]);
}

else {
  console.log("Your third array item is NOT a string." );
}