// "this" Keyword
/*
- A function's "this" references the execution context for that call, *! determined entirely by how the function was called !*

- What the "this" keyword is pointing at is determined by how you call the function

- A "this"-aware function can thus have a different context each time it's called, which makes it more flexible and reuseable.
*/

// example for implicit binding when using the "this" keyword
let workshop = {
  teacher: "kyle",
  ask(question) {
    console.log(this.teacher, question)
  },
};

workshop.ask("what is implicit binding?");
// Kyle what is implicit binding?

// example for explicit binding when using the "this" keyword the .call() method is used to determine which context to use for the "this" keyword
function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  let myContext = {
    teacher: "suzy"
  };
  ask.call(myContext, "why?"); //Suzy why?
}

otherClass();

//---------------------------------
// Prototypes

// example of prototypes as classes
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

let deepJS = new Workshop("Kyle");
let reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
// Kyle Is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
// Suzy Isn't 'prototype' ugly?  

//----------------------------------
// Class keyword and syntax 

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question)
  }
}

let deepJS = new Workshop("Kyle");
let reactJS = new Workshop("Suzy");

deepJS.ask("Is a 'class' a class?");
// Is a 'class' a class?

reactJS.ask("Is this class OK?");
// Is this class OK?