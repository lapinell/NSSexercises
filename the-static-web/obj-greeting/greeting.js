//////Minimum Requirements //////

// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

const CardMaker = {

    makeFrontMessage: function(string) {
      return `<h2>${string}</h2>`
    },
    
    makeInsideMessage: function(string) {
        return `<h3>${string}</h3>`
    }
  }
  
  /// Instructions: Refactor this to link this object to cardMaker

//   const BirthdayCard = Object.create();
  

function Card (frontMessage, insideMessage) {
    this.frontMessage = CardMaker.makeFrontMessage( frontMessage );
    this.insideMessage = CardMaker.makeFrontMessage( insideMessage );
}

let BirthdayCard1 = new Card( "Happy Birthday!", "Stupid.");

let ValentinesCard1 = new Card ( "Happy Valentine's Day", "Said  no one ever.");




////// Challenges //////

// Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.

// Output the HTML strings with classes to the DOM that you can style with CSS.

// Refactor "makeFrontMessage" to return something more elaborate.



////// Attempts //////

////// #1
// function card (type, frontMessage, insideMessage) {
    //     this.type = CardMake.type;
    //     this.frontMessage =  CardMaker.makeFrontMessage;
    //     this.insideMessage = CardMaker.makeInsideMessage;
    //   }
    
    //     return new card(birthday, "Happy Birthday", "...to you!");
