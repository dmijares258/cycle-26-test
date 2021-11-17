// ==============  CONDITIONALS =================
// Definition: perform different operations based on the given condition

// task: define whether a number is positive or negative
let interger = -1

// inside the pernthesis in an if statement, we weite a logical statement checking wheter it's true or false

if (interger < 0) {
    // inside the curly brackets is oir code block that runs IF we meet our condition
    console.log("negative: " + interger)
} else {
    // if we didn't meet our logical statement, else code block will execute
    console.log("positive: " + interger)
}

let age = 17


if (age < 18) {
    console.log("Access Denied " + age)
}
if (age >= 18) {
    console.log("Access Granted " + age)
}

let num = '100'

// & is called ampersand
// && equals to AND
if (num > 100) {
    console.log(num + " is positive and greater than 100")
} else if (num < 100) {
    if (num > 0) {
        console.log(num + " is positive and less than 100")
    }
} else if (num < 0) {
    console.log(num + " is less than 0 AKA negative.")
} else {
    if (num === 100) {
        console.log("WE GOT A HUNDRED!!!")
    } else {
        console.log("error NaN " + num + " is a " + typeof (num))
    }
}


// TASK Letter Grade
/* 
  If student gets 90 or higher: log A
  If 80 or above: log B
  if 70 or above: log C
  if 55 or above: log D
  if below 55: log F
*/

let grade = 54

// JavaScript runs Top to Down approach
if (grade >= 90) {
    console.log('A')
} else if (grade >= 80) {
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
} else if (grade >= 55) {
    console.log('D')
} else {
    console.log('F')
}


// Definition: A sequence of instructions that are repeated for either certain number of times or until a condition is met

// Syntax:
// for(statement 1; statement 2; statement 3) {
// code block to be executed
//}

// Statement 1: executed before the loop - this is where code block starts
// Statement 2: condition for running the loop (the code block)
// Statement 3: Executed each time AFTER the loop (the code block) has been executed

// Task: loop that iterates from 0 to9

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

for (let i = 1; i < 10; i += 2) {
    console.log(i)
}