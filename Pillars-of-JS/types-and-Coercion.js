/*
Types and Coercion
In Javascript variables don't have types, values do 

-Checking Equality
*/

/*
-Primitive Types
  1. undefined
  2. string
  3. boolean
  4. number
  5. object
  6. symbol
  7. ! Null (has some quirks to be aware of)
*/
var v;
typeof v; // "undefined"

v = "1";
typeof v; // "string"

v = 2;
typeof v; // "number"

v = true;
typeof v; // "boolean"

v = {};
typeof v; // "object"

v = Symbol();
typeof v; // "symbol"

var v = null;
typeof v; // "object" 

v = [1,2,3];
typeof v; //"object" 

//-------------------------------------------
// Fundamental Objects
/* Use the "new" keyword:
   - Object()
   - Array()
   - Function()
   - Date()
   - RegExp()
   - Error()
*/ // Use "new" Keyword when you want to create object representations

let yesterday = new Date("February 11, 2020");
yesterday.toUTCString();
// "Tue, 11 Feb 2020 4:10:00 EST"

/* DONT use "new" keyword :
   - String()
   - Number()
   - Boolean()
*/
// skip the "new" Keyword when you are calling a fundamental object to convert a type

let myGPA = String(transcript.gpa)
// "3.23"

//--------------------------------------------
// -Converting Types

// Boolean "falsy" values become false when converted into boolean
/*
Falsy values:
"" <- empty string
0, -0
null
NaN
false
undefined
 */
