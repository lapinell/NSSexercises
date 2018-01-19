// Paste the code below into your HTML file.
////Done

// Take the contents of the sonnet div and place it in a variable.
var sonnetContent = document.getElementById("sonnet").innerHTML;

console.log(sonnetContent);

// Find and output the starting position of the word "orphans".
var startPosition = sonnetContent.search("orphans");

console.log(startPosition);

// Output the number of characters in the sonnet.
var sonnetLength = sonnetContent.length;

console.log(sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide".
var replaceWinter = sonnetContent.replace("winter", "yuletide");

console.log(replaceWinter);

// Replace all occurances of the string "the" with "a large".

var lowerSonnet = sonnetContent.toLowerCase(); //converting sonnet to lowercase alphabet

console.log(lowerSonnet);

var replaceThe = lowerSonnet.replace(/the/g, "a large"); //replace all instances of the including in thee and their, etc.

console.log(replaceThe);

// Set the content of the sonnet div with the new string.

document.getElementById("sonnet").innerHTML = "Replace the sonnet with a boring sentence."