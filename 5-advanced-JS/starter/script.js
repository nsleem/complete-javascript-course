// Function Constructor
/*
var john = {
    name: "john",
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor variables are capitalized.
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

var john = new Person('John', 1990, 'teacher');

Person.prototype.calculateAge =
function() {
	console.log(2020 - this.yearOfBirth);
};
// We can also attach properties to the prototype
Person.prototype.lastName = "Smith";


var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Jane', 1948, 'retired');
john.calculateAge() // 30
jane.calculateAge() // 51
mark.calculateAge() // 72



//  ES6 Class Delcaration, which is the same as the Function Constructor method
//     used above:

// class Person {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
// }


// Prototype Chain
// Using the JavaScript console, we can inspect our instance variables,
// and find their Prototype Chain, all the way up to the Object object.
john.hasOwnProperty('job'); // This function is inherited from the Object object.

john instanceof Person; // This will return True because:
john.__proto__ === Person.prototype // this is true.
*/


// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = '1999';
john.job = 'teacher';


var jane = Object.create(personProto,{
    name: { value: 'Jane' },
    yearOfBirth: {value: 1999 },
    job: {value: 'designer' }
});
*/


// Primitives vs Objects

// var a = 23;
// var b = a;
// a = 46;
// console.log(a); // 46
// console.log(b); // 23


// var obj1 = {
//     name: "Bob",
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 44;
// console.log(obj1.age);
// console.log(obj2.age);



/////////////////////////////////////
// Passing Functions as Arguments

// var years = [1990, 1966, 1982, 2005, 1999];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2020 - el;
// }




/////////////////////////////////////
// Returning Functions from Functions


// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is");
//         }
//     }else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ", what subject do you teach?");
//         }
//     } else {
//         return function(name) {
//             console.log("Hello " + name + " what do you do?");
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Foo');
// interviewQuestion('teacher')('Baz');





/////////////////////////////////////
// IIFE


// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();


// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);



/////////////////////////////////////
// Closures




