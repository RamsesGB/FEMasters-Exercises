// Scope : where the JS engine is told to look for variables, the rules it follows for where to look are called scope(in laymans terms)

// undefined VS. undeclared
// undefined = "a variable that has been declared but doesn't have a value";
// undeclared = " a variable that has not been declared"

// Function Expressions = " a function that has been assigned as a value somewhere"

// Anonymous Function Expression
let clickHandler = function(){
}

// Named Function Expression
let keyHandler = function keyHandler(){
}

// IIFE aka Immediately Invoked Function Expression.
var teacher = "Kyle"

( function anotherTeacher(){
  var teacher = "suzy";
  console.log(teacher); // suzy
})();

console.log(teacher); // Kyle

// Closure = Closure is when a function "remembers" the variables outside of it, even if you pass that function elsewhere

//Interview answer
// Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.

//- Closure is not "capturing a value" it is perserving access to a variable 

//----------- Modules -----------------------
// Modules encapsulate data and behavior (methods) together. The state (data) of a module is held by its methods via closure