var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

for (i=0; i < reindeer.length; i++) {

    var colorfulReindeer =  colors[i] + " " + reindeer[i] + "<br>";

    var hohohoElement = document.getElementById("reindeer");

    hohohoElement.innerHTML += colorfulReindeer;

}

console.log("All is working");