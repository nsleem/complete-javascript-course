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
