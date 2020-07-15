/*
var declarations are globally scoped or function scoped while let and const are block scoped. 
var variables can be updated and re-declared within its scope. 
let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
*/

// Var
// String
var name = "Subhrasish"; 
// Number
var age = 29;
// Boolean
var canFly = false;
// Array
var languages = ['Hindi','English','Bengali'];
// Objects
var friends = {
    name:"Ayan",
    hobby:"Cooking",
}

var a = 10;
console.log(a);


var a = null;
console.log(a);

// Let 
{
   let city;
   let name = "Roy"; 
   name = "Subhra";
   console.log("Using Let: ", name);
}
console.log(name)

// const - Constant

const country = "India";
console.log(country);

// country = "UK";

const _fruits = ["mango", "apple"]
console.log(_fruits)
_fruits.push('banana');
console.log(_fruits)