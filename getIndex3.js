const prompt = require('prompt-sync')
({sigint: true});


let userArray = JSON.parse(prompt("Enter an array (the item in the 3rd INDEX position will be returned): "));

if (userArray.length < 4){
    console.log(userArray [userArray - 1])
}

else {
    console.log(userArray[3])
}