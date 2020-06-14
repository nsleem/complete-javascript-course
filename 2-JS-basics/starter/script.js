/*************************
 * Variables and Data Types
 **************************/

// var firstName = 'Nader';
// console.log(firstName);

// var lastName = "Sleem";
// var age = 25;
// var fullAge = true;
// console.log(fullAge);

// var job
// // Logs 'undefined' to the console
// console.log(job)

// job = 'Teacher'
// console.log(job)

/**************************************
 * Variable mutation and type coercion
 *************************************/

// var firstName = 'Nader';
// var age = 25;
// // Type Coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable Mutation

// age = 'twenty five'
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName)

/**************************************
 * Basic Operators
 *************************************/

// var year, yearBorn, yearOther;
// year = 2020

// // Math Operators
// yearBorn = year - 25;
// yearOther = year - 33;
// console.log(yearBorn);
// console.log(yearOther);
// console.log(year + 2);
// console.log(year * 2);
// console.log(year / 2);

// // Logical Operators
// var ageNader, ageOther;
// ageNader = 25;
// ageOther = 33;
// var isOlder = ageNader > ageOther;
// var isOlderAlt = ageNader < ageOther;
// console.log(isOlder);

// // typeof Operator
// console.log(typeof ageNader);
// console.log(typeof 'string');
// var x;
// console.log(typeof x);

/**************************************
 * Operator Precedence
 *************************************/

// var now = 2020;
// var yearNader = 1994;
// var fullAge = 18;

// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;

// // Grouping
// var ageFoo = now - yearJohn;
// var ageBar = 35;
// // Note the neccessity of the (...), since the division operator has higher precedence, but we want the
// // addition to execute first. So we can force the '+' to parse first
// var average = (ageFoo + ageBar) / 2;

// // Multiple Assignments
// var x, y;
// // x ends up NOT being 'undefined' because the `=` operator executes from right-to-left
// x = y = (3 + 5) * 4 - 6;

// // More operators
// x *= 2;
// x += 10;
// x -= 22;
// x /= 1;

// // Pre and Postfix Increment and Decrements
// ++x;
// --x;
// x++;
// x--;

/**************************************
 * If/Else Statements
 *************************************/

// var firstName = "Nader";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " is not married");
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " is not married");

// }

/**************************************
 * Boolean Logic
 *************************************/

//  var age = 21;

//  if (age < 13) {
//   console.log(firstName + ' is a boy');
//  } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager');
//  } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young adult');
//  } else {
//    console.log(firstName + ' is an adult');
//  }

/**************************************
 * Ternary Operator and Switch Statements
**************************************/

// var firstName = 'Nader';
// var age = 25;

// age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

// var drink = age > 25 ? 'beer' : 'juice';

// var job = 'teacher';

// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log('this is a teacher!');
//     break;
//   case 'driver':
//     console.log('this is a driver');
//     break;
//   case 'designer':
//     console.log('this is a designer');
//     break;
//   default:
//     console.log('default case');
//     break;
// }

// switch (true) {
//     case age < 13:
//         console.log('kid');
//         break;
//     case age >= 13 && age < 20:
//         console.log('teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log('young man');
//     default:
//         console.log('adult');
// }

/**************************************
 * Truthy and Falsy Values and Equality Operators
**************************************/

// var height;

// if (height) {
// 	console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined'); // This would be logged
// }

// height = 23;

// if (height == '23') {
// 	console.log('The == operator does type coercion!') // This will print!
// }


/**************************************
 * Functions
**************************************/

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// var ageNader = calculateAge(1994);
// var age2 = calculateAge(1987);
// var age3 = calculateAge(1967);
// console.log(ageNader, age2, age3);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
// }

// yearsUntilRetirement(1994, 'Nader');

/**************************************
 * Function Statements and Expressions
**************************************/

// Function Expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids';
//         case 'driver':
//             return firstName + ' drives cars';
//         case 'designer':
//             return firstName + ' designs websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));


/**************************************
 * Arrays
**************************************/

// var names = ['Nader', 'Bob', 'Foo', 'Bar'];
// var years = new Array(1999, 1985, 1977);

// console.log(names[0]);
// console.log(names);
// console.log(names.length);

// // Mutate Array Data
// names[1] = 'Baz';

// // Notice we indexed out of bounds, but the entry got added.
// // And the "skipped" entries have a value of `empty`
// names[5] = 'Fish';
// names[names.length] = 'Blah';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// // Array Methods
// john.push('blue');
// john.unshift('Mr');
// console.log(john);
// john.pop();
// console.log(john);
// john.pop();
// console.log(john);
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));
// console.log(john.indexOf('not_in_array')); // Returns -1 if value not in array
