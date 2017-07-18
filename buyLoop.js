var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
//var n = prompt('How many more times? ');

var wallet = 1200;
var store = ["sword","food"];
var prices = [500, 100];
var ineventory = [];

while(wallet>0){
    var purchaseChoice = prompt("what're you buyin? Sword/Food?'");
    if (purchaseChoice = "sword"){
        wallet = wallet - prices[0]; &&wallet >= prices[0]{
        ineventory.push("sword");
    }
    else if (purchaseChoice == store[1]){
        wallet = wallet - prices[0];
        ineventory.push("food");
    }
    else if (purchaseChoice == "quit"){
        //process.exit
        wallet = 0
    }
    else{
        console.log("Game OVER!!");
    }

    console.log(ineventory);
}