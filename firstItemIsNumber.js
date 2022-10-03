const prompt = require('prompt-sync')
({sigint: true});


const userList = JSON.parse(prompt("Please enter a list of items for your array: "));

let firstItem = userList[0];
console.log(firstItem);

        if (typeof firstItem === Number)
        
        {
        console.log("The first item in your list is a number.");
        }

    else 
        {
        console.log("The first item in your list is not a number.");
        }
