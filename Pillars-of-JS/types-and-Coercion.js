// Types and Coercion
// In Javascript variables don't have types, values do 
/*
-Converting Types
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