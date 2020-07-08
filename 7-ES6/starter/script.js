///////////////////////
// What's New in ES6 //
///////////////////////


/*
Variable Declarations with let and const
*/

// //ES5: Old way
// var name5 = 'Jane Smith';
// var age = 23;
// name5 = 'Jane Miller';


// // ES6: let and const
// const name6 = 'Jane Smith';
// let age2 = 23;
// //name6 = 'Jane Miller'; //TypeError: Assignment to constant variable
// //console.log(name6);




// let and const are blocked scoped

// //ES5 version
// function driversLicense5(passedTest) {
//     if (passedTest) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ' ' + yearOfBirth);
// }

// driversLicense5(true);

// //ES6 version
// function driversLicense6(passedTest) {
//     if (passedTest) {
//         let firstName = 'John';
//         const yearOfBirth = 1990;
//     }
//     // Referenced the variables outside the block. So there will be a reference error
//     console.log(firstName + ' ' + yearOfBirth);
// }

// driversLicense6(true);


// // Practical Example
// let i = 23;

// for (let i = 0; i < 5; i++) {
// 	console.log(i) // Prints 0,1,2,3,4. This `i` only corresponds to the `i` defined in the for block!
// }

// console.log(i) // Prints 23. This `i` corresponds to the `i` defined outside the for loop block.
// // Both variables have the same name, but they are distinct from one another because of block scoping.



/*
 Blocks and IIFEs
*/

// // Use blocks instead of IIFEs
// {
//     const a = 1;
//     let b = 2;
// }





/*
 Strings
*/

// let firstName = 'john';
// let lastName = 'smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2020 - year;
// }


// // Template Literals

// // ES5
// console.log('This is ' + firstName + ' ' + lastName);

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.`);
// console.log(`Today he is ${calcAge(yearOfBirth)} years old.`);


// // New String Methods
// const n = `${firstName} ${lastName}`;

// n.startsWith('J'); // Returns true if the string starts with the given characters.
// n.endsWith('th'); // Same as above, but tests if it ends with something.
// n.includes('oh'); // Same as above, but checks the middle of the string.

// console.log(`${firstName} `.repeat(5)); // Repeat the same string x amount of times.





/*
 Arrow Functions
*/

// const years = [1990, 1994, 1965, 2001, 1945];

// // ES5

// var ages5 = years.map(function(element) {
//     return 2020 - element;
// });
// console.log(ages5);

// // ES6. Arrow Function
// let ages6 = years.map(el => 2020 - el); //Exactly the same as the above version.
// console.log(ages6);

// // Two arguments require parentheses
// ages6 = years.map((el, index) => `Age element ${index + 1} is ${2020 - el}`);
// console.log(ages6);

// // If our function needs more than one line, the arrow function must use curly braces
// // and explicitly call `return`
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     // Must write out `return` explicitly, with multiple lines.
//     return `Age element ${index + 1} is ${2020 - el}`;
// });


// The biggest advantage of arrow functions is that they share the `this`
// keyword with the surrounding scope.

// ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', function() {
//             // this won't work in ES5. The `this` object points to the global object
//             // in this function. We would need it to point to the object it is defined in.
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// //box5.clickMe();


// // ES6
// // ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() { // <- We cannot change this to an arrow. Otherwise it would have the lexical
// 				// this of the global scope (which is usually the Window object).
//         document.querySelector('.green').addEventListener('click', () => {
//             // Now the `this` refers to the box6 object, thanks to the arrow function.
// 						// It shares the lexical this keyword of the surrounding code.
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();





/*
 Destructuring
*/


// ES 5
// var john = ['john', 26];
// var name5 = john[0];
// var age5 = john[1];


// ES6 - Using Destructuring

// Array
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// // Object
// const obj = {
// 	firstName: 'Nader',
// 	lastName: 'Sleem'
// };

// const {firstName, lastName} = obj;

// // Or, if we want different key names:
// const {firstName: fname, lastName: lname} = obj;
// console.log(fname);
// console.log(lname);


// // We can use Destructuring to return multiple values from a function
// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1994);
// console.log(age);
// console.log(retirement);





/*
 Arrays
*/

const boxes = document.querySelectorAll('.box');
// Transform the NodeList into an Array

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// })


// ES6

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach((el) => el.style.backgroundColor = 'dodgerblue');



// ES5
// for (var index = 0; index < boxesArr5.length; index++) {
//     if (boxesArr5[index].clasName === 'box blue') {
//         continue;
//     } else {
//         boxesArr5[index].textContent = 'I changed!';
//     }
// }


// ES6

// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     } else {
//         cur.textContent = 'I changed';
//     }
// }



// ES6 findIndex and find

// const ages = [12, 17, 8, 21, 14, 11];
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));






/*
 Spread Operator
*/

// function addFourAges(a, b, c, d) {
//     return a + b + c + d;
// }

// // ES5
// var ages5 = [18, 30, 12, 21];
// var sum5 = addFourAges.apply(null, ages5);

// // ES6 - Better way
// const sum6 = addFourAges(...ages);


// const smithFamily = ['John', 'Jane', 'Mark'];
// const millerFamily = ['Mary', 'Bob', 'Anne'];

// // Join arrays with Spread Operator
// const bigFamily = [...smithFamily, 'random element' ,...millerFamily];

// // Spread Operator also works on other data structures like NodeLists
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('box');
// const all = [h, ...boxes];





/*
 Rest Parameters
*/

/*
function isFullAge(...years) {
    console.log(years);

    years.forEach(cur => console.log((2020-cur) >= 18));
}
isFullAge(1900, 1994, 1999, 2016);
*/


// function isFullAge(limit, ...years) {
//     console.log(years);

//     years.forEach(cur => console.log((2020-cur) >= 18));
// }
// isFullAge(16, 1900, 1994, 1999, 2016);


/*
 Default Parameters
*/


// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {

// }




/*
 Map
*/

// // New empty map
// const question = new Map();

// // Assign a new key, value pair
// question.set('question', 'What is the offical name of the latest major JavaScript version');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer.');
// question.set(false, 'Wrong answer. Try again');

// // Get value of a key
// console.log(question.get('question'));

// // Get the length
// console.log(question.size);

// // Delete data
// question.delete(4); // Pass in the key to delete

// // Check if map has a key
// if(question.has(4)) {
// 	console.log('It has a key == 4');
// }

// // We can loop through maps
// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// // Using .entries() and destructuring to loop over keys and values
// for (let [key, value] of question.entries()) {
//     if (typeof(key) === 'number') {
// 			console.log(`Answer ${key}: ${value}`);
// }
// }

// // Clear our entire map
// question.clear();



/*
 Classes
*/

// ES5

// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }
// var john5 = new Person5('Jon', 1990, 'teacher');


// ES6

// class Person6 {
//     // Constructure is required in all JS class declarations
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     // Note the lack of the function keyword and assignment to the prototype
//     calculateAge() {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     // Static Method
//     static greeting() {
//         console.log('Hi');
//     }
// }


/*
 Classes with Subclasses
*/


// ES 5 version

// Superclass
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('Jon', 1990, 'teacher');


// Subclass

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {

    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}
// We need to create the correct prototype chain.
// In otherwords, now Athlete's prototype points to the methods in the parent's
// prototype. We are essentially connecting the parent-child class relationship.
Athlete5.prototype = Object.create(Person5.prototype);

var JohnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);



// ES6

// Superclass
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

// Subclass

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames,medals) {
        super(name, yearOfBirth, job);
        this.olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }

}

const johnAthlete6 = new Athlete6('jon', 1994, 'swimmer', 3, 10);
