// var variable
var x = 10;
console.log(x)

//let: Introduced in ECMAScript 6 (ES6), 
//let allows you to declare variables with block scope.
let y = 20;
if (true){
    let y = 23;
    console.log(y);
}
console.log(y);

//const - the value of a const variable cannot be changed.
const u = 35;
console.log("U equals " + u)


let length = 25; // number
let width = 30;
let square = length*width
console.log("Square: "+square)
let studentName = 'John'; // string
let studentSurname = 'Doe'
console.log(studentName+' '+studentSurname)

let isStudent = false; // boolean
if (isStudent === false){
    console.log("Student is not in class today")
}

let something = null; // null
if (something == null) {
    console.log("something is null or undefined");
  }
let notDefined; // undefined
console.log(notDefined)
