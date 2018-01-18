const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */

    switch(true) {
        case scores[i] > 90:
            console.log('You made an A!');
            break;
        case scores[i] > 80:
            console.log('You made an B!');
            break;     
        case scores[i] > 70:
            console.log('You made an C!');
            break;                    
        case scores[i] > 60:
            console.log('You made an D!');
            break; 
        case scores[i] <= 60:
            console.log('You made an F!');
            break; 
        default:
            console.log('This works.')
    } 
}