// Function Constructor

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



/* ES6 Class Delcaration, which is the same as the Function Constructor method
    used above:

class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
}*/


// Prototype Chain
// Using the JavaScript console, we can inspect our instance variables,
// and find their Prototype Chain, all the way up to the Object object.
john.hasOwnProperty('job'); // This function is inherited from the Object object.

john instanceof Person; // This will return True because:
john.__proto__ === Person.prototype // this is true.
