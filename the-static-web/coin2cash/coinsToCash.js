//// Define an object and store it in a variable named piggyBank. The object should have the following keys defined.

//// quarters
//// nickels
//// dimes
//// pennies
//// For each coin type, give yourself as many as you like. 

const piggyBank = {
    quarters: 15,
    nickels: 40,
    dimes: 52,
    pennies: 234
};

const coinValue = {
    quarters: .25,
    dimes: .10,
    nickels: .05,
    pennies: .01
}

console.log(Object.keys(piggyBank)); //logging the keys in the console in an array

for (key in piggyBank){
    console.log(key);
} //returning in the console the key names as strings


for(key in piggyBank){
    console.log(key + ": " + piggyBank[key]);
}

let dollarAmount = 0;

//// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

let valueQuarters = piggyBank.quarters * coinValue.quarters;
let valueNickels = piggyBank.nickels * coinValue.nickels;
let valueDimes = piggyBank.dimes * coinValue.dimes;
let valuePennies = piggyBank.pennies * coinValue.pennies;

dollarAmount += valueQuarters;
dollarAmount += valueNickels;
dollarAmount += valueDimes;
dollarAmount += valuePennies;


//// When done, output the value to the browser console.
console.log(dollarAmount); //total should be 13.29
