// Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.


const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 78]
const grades = {A:0, B:0, C:0, D:0, F:0} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */

    switch(true) {
        case scores[i] > 90: //compare score with grade range
            grades['A'] += 1; //record count into grades object
            break;
        case scores[i] > 80:
            grades['B'] += 1;
            break;     
        case scores[i] > 70:
            grades['C'] += 1;
            break;                    
        case scores[i] > 60:
            grades['D'] += 1;
            break; 
        case scores[i] <= 60:
            grades['F'] += 1;
            break; 
        default:
            console.log('This works.')
    } 

}

// Use console.log() to output the following criteria to the browser console. //

// How many of each grade? Accomplish this with a for..in loop.

for (var prop in grades) {
    console.log(`grades.${prop} = ${grades[prop]}`); 
}
////Result is:
// grades.A = 2
// grades.B = 3
// grades.C = 4
// grades.D = 3
// grades.F = 3

// What is the lowest score? Sort the array and find out.
var scoreLowToHigh = scores.sort(function(a,b){return a-b}); //sort array from lowest to highest value
var lowestScore = scoreLowToHigh[0]; //the value at the 0-index would be the lowest
console.log("The lowest score is " + lowestScore); //print it

// What is the highest score?
var scoreHighToLow = scores.sort(function(a,b){return b-a}); //reverse the above
var highestScore = scoreLowToHigh[0]; //then the value at the 0-index would be the highest
console.log("The highest score is " + highestScore); //pring it

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.




// Which grade had the fewest students achieve it?
