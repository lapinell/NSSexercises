////User inputs a sentence
let sentence = prompt("Provide a sentence."); 

document.getElementById("origSent").innerText = sentence;

////The program breaks it into individual words.
function stringToSplit(string, separator) {
    const strArray = string.split(separator);
    return strArray;
}

//Testing the above function.

let sentArray = stringToSplit(sentence, " ");

//Testing new variable
console.log(sentArray.length);

////The program outputs each word on a line in addition to the last in a new paragraph until the last word is reached

// For the length of the sentence array...
for( let i = 0; i < sentArray.length; i++) {

    // store the new word
    let storedWord = sentArray[i] + " ";

    //add the next word to the stored word(s)
    var newPar = "";

    newPar += storedWord;

    console.log(newPar);
}

