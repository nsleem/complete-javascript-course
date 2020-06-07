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

var now = 2020;
var yearNader = 1994;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;

// Grouping
var ageFoo = now - yearJohn;
var ageBar = 35;
// Note the neccessity of the (...), since the division operator has higher precedence, but we want the
// addition to execute first. So we can force the '+' to parse first
var average = (ageFoo + ageBar) / 2;

// Multiple Assignments
var x, y;
// x ends up NOT being 'undefined' because the `=` operator executes from right-to-left
x = y = (3 + 5) * 4 - 6;


// More operators
x *= 2;
x += 10;
x -= 22;
x /= 1;

// Pre and Postfix Increment and Decrements
++x;
--x;
x++;
x--;
