const piggyBank = {
    quarters: 15,
    nickels: 40,
    dimes: 52,
    pennies: 234
};

console.log(Object.keys(piggyBank)); //logging the keys in the console in an array

for (key in piggyBank){
    console.log(key);
} //returning in the console the key names as strings


for(key in piggyBank){
    console.log(key + ": " + piggyBank[key]);
}

let dollarAmount = 0;

// look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

let valueQuarters = piggyBank.quarters * .25;
let valueNickels = piggyBank.nickels * .05;
let valueDimes = piggyBank.dimes * .10;
let valuePennies = piggyBank.pennies * .01;

dollarAmount += valueQuarters;
dollarAmount += valueNickels;
dollarAmount += valueDimes;
dollarAmount += valuePennies;

console.log(dollarAmount); //total should be 13.29