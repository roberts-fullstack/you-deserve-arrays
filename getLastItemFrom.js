const prompt = require('prompt-sync')
({sigint: true});


let userArray  = JSON.parse(prompt("Enter an array to see what the last item is: "));

let lastItem = userArray[userArray.length -1];

console.log(lastItem);