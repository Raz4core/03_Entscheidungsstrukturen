"use strict";

// Entscheidungsstrukturen | control flow

// //Deklaration + Assigment
// const ageJohn = 30;
// const ageMark = 30;

// //Deklaration
// let isJohnOlder, isJohnEqual;

// //Test Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// //Ausgabe
// console.log("ageJohn:" + ageJohn);
// console.log("ageMark:" + ageMark);
// console.log("isJohnOlder:" + isJohnOlder);
// console.log("isJohnEqual:" + isJohnEqual);
// console.log("--------------------");

/** IF **/
// TINA --> There is no alternative
// entweder ja oder nix... alternativlos

//if (true)
//if(false)
//if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist Älter.")
// }

/****** IF - ELSE ******/
// mit Alternative
// entweder ja oder nein

// if (isJohnOlder) {
//  //Ja-Zweig / true 
//  console.log("John ist Älter.");  
// } else {
//  //Nein-Zweig / false 
//  console.log("John ist Jünger.");
// }
/**Ternäre schreibweise****/
//console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/*****IF - Else IF */

// if (isJohnOlder)
//  {
//       //Ja-Zweig / true 
//       console.log("John ist Älter.");  
//  }
//    //1.Alternative
//    else if(isJohnEqual)  
//    {
//        console.log("John ist Älter.");
//    }
//      //evtl. weitere Alternativen
//       else
     
//      {

//       //Nein-Zweig / false 
//       console.log("John ist Jünger.");
//      }

/**Fallunterwscheidung /Case switch 1 */

const firstName = "Jane";
let job;

job = "driver";  //.. fährt TAXI!/ UBER
job = "diver";   //.. taucht im Rhein!
job = "artist";  //.. malt ein Bild!
job = "pilot" ;  //.. macht etwas anderes! --> default
job = "teacher"; //.. unterrichtet!
job = "instructor"; //.. unterrichtet!

switch (job) {
    case "driver":  // Test auf ==
        console.log(firstName +" fährt TAXI!");
        break;
    case "diver":   // Test auf ==
        console.log(firstName +" taucht im Rhein!");
        break;
    case "artist":  // Test auf ==
        console.log(firstName +" malt ein Bild!");
        break;
    case "teacher": // Test auf ==
        console.log(firstName +" unterrichtet!");
        break;
    case "instructor": // Test auf ==
        console.log(firstName +" unterrichtet!");
        break;

    
    
    
    default: // Black Swan !!!
        console.log(firstName + "macht etwas anderes!");
        break;
}