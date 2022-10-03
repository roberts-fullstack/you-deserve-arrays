const prompt = require('prompt-sync')
({sigint: true});

let userList = JSON.parse(prompt("Enter an array: ")); 

if (userList.length >= 10){
    console.log("Your list length is at least 10 items.");
}

else {
    console.log("Your list length is NOT at least 10 items.");
}