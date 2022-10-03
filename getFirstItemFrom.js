const prompt = require('prompt-sync')
({sigint: true});

let userArray = JSON.parse(prompt("Please input an array of strings or numbers: "));

console.log(userArray[0]);
