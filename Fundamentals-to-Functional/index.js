// Arrow Functions
// No need to wrap parameters in parantheses if there is only 1 parameter

let nameImprover = (name, adj) => {
  return `Captain ${name} Mc ${adj} pants`;
};

//functions examples

function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed;
}

let left = timeRemaining(49,421)

let favoriteBooks = []

function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName)
  }
  else {
    console.log("error")
  }
}

function printFavoriteBooks(){
  for (let i = 0; i < favoriteBooks.length; i++) {
    console.log(`Favorite Books: ${favoriteBooks[i]}`)
  }
}

/*
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
printFavoriteBooks();

*/


// If & Else (Examples)

let age = 39;

if (age >= 18) {
  goVote();
}

// Ex # 2
let isEnrolled = true;

if (isEnrolled) {
  console.log("Take the class!")
}
else {
  console.log("Enroll first!")
}

// Loop Examples

let students = [/*....*/]

for (let i = 0; i < students.length; i++) {
  greetStudent(students[i]);
}

for (let students of students) {
  greetStudent( student );
}

while (students.length > 0) {
  let student = students.pop();
  greetStudent(student)
}