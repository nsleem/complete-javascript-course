///////////////////////////////////////
// Lecture: Hoisting

// Functions


// Function is already available for us to use even when it is called
// before the code that defines the function. This is due to the hoisting
// that occurs during the Creation Phase.
calculateAge(1966);

// This call will FAIL. Because hoisting does not work for function *expressions*
// The `retirement` variable will be `undefined` during the Creation phase of
// the Global Execution Context.
// retirement(1994);

// Function Defintion
function calculateAge(year) {
    console.log(2020 - year);
}

// Function Expression. Hoisting only works for Function Declarations.
var retirement = function(year) {
    console.log(65 - (2020 - year));
}


// Variables

// The first invocation of `age` will return `undefined`, because during the
// Creation Phase, all variable declarations are set to `undefined`

console.log(age); // `undefined`. JavaScript knows the variable is defined, but
// we did not get to the code that tells us what the value is, thus is the
// reason why the console displays `undefined`.

var age = 23; // If this line was removed when calling `age` then we would get
// a ReferenceError rather and `undefined` because the lack of a defintion
// would mean that `age` never gets added to the Variable Object.

console.log(age); // 23

function foo() {
    var age = 65;
    console.log(age); // 65. This logs 65 instead of 23, because the `age`
    // variable defined in `foo`'s Execution Context is different than the
    // `age` variable defined in the Global Execution Context.
}

foo();

console.log(age); // 23. We exited the function's execution context back to
// the global execution context so now we are referencing the `age` variable
// defined in the global execution context (the global object's `age` definiton)


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log(this); // Window Object
calcAge(1989);

function calcAge(year) {
    console.log(2020 - year);
    console.log(this); // Window Object, because this function is attached to
                       // the Global Object
}

var foo = {
    name: 'bob',
    yearOfBirth: 1999,
    calculateAge: function(year) {
        console.log(this); // Logs the `foo` object.

        function inner() {
            console.log(this); // Something strange happens here: the `this`
            // variable in this case is referring to the `global Window object`
            // even though we are within the scope of a method of an object.
            // But this actually makese sense: This is a regular function call,
            // not a call to a method that is attached to an object! `inner()`
            // is not a property of the `foo` object that we created, technically.
            // Even though the function is inside a method, it is still a regular
            // function.
        }
        inner();
    }
}
foo.calculateAge(2020);


var bar = {
    name: "baz",
    yearOfBirth: 1994,

}

bar.calculateAge = foo.calculateAge; // Method Borrowing. Instead of rewriting the
// function, we can just assign foo's definition of it to bar's.

bar.calculateAge(); // When `this` gets printed for `bar`, even though we assigned
// it the function as it was defined in `foo`, it will still print the `bar` object.

// This is because the `this` value does not get assigned until the object calls
// the method. Without this caveat, the function call would print the `foo` object
// even though it is being invoked from the `bar` object, which would defeat the
// purpose of the `this` keyword.
