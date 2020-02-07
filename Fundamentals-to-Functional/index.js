// Arrow Functions
// No need to wrap parameters in parantheses if there is only 1 parameter

let nameImprover = (name, adj) => {
  return `Captain ${name} Mc ${adj} pants`;
};

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