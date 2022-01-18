"use strict";

// Entscheidungsstrukturen | control flow

//Deklaration + Assigment
const ageJohn = 22;
const ageMark = 30;

//Deklaration
let isJohnOlder, isJohnEqual;

//Test Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

//Ausgabe
console.log("ageJohn:" + ageJohn);
console.log("ageMark:" + ageMark);
console.log("isJohnOlder:" + isJohnOlder);
console.log("isJohnEqual:" + isJohnEqual);
console.log("--------------------");

/** IF **/
// TINA --> There is no alternative
// entweder ja oder nix... alternativlos

//if (true)
//if(false)
//if(isJohnOlder)
if(ageJohn > ageMark)
{
    console.log("John ist Älter.")
}