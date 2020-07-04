// Seperate different parts of the code into Modules (using Module pattern
// for JavaScript), to encapsulate our data. We do so with closures and IIFEs.
// A Module in JS is a IIFE that returns an object.



// BUGET CONTROLLER
var budgetController = (function() {

    

})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                // will be either inc or exp
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        // On button click
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // Global document listener
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        // 1. Get Field Input Data
        var input = UICtrl.getInput();
        // 2. Add item to buget controller
        // 3. Add the new item to the list UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

// Without this, nothing can happen.
controller.init();
