// ======== Game objects ======== //

const animals = [
    { name: "Elephant", weight: 5000, size: "big" },
    { name: "Giraffe", weight: 1800, size: "big" },
    { name: "Lion", weight: 190, size: "small" },
    { name: "Tiger", weight: 250, size: "small" },
    { name: "Gorilla", weight: 180, size: "small" }
];

const foods = [
    { name: "Apple", weight: 0.15, size: "tiny" },
    { name: "Chicken Breast", weight: 0.2, size: "tiny" },
    { name: "Broccoli", weight: 0.1, size: "tiny" },
    { name: "Salmon Fillet", weight: 0.18, size: "tiny" },
    { name: "Pizza", weight: 0.3, size: "tiny" }
];

const culturalObjects = [
    { name: "Eiffel Tower", weight: 9162565, size: "huge" },
    { name: "Mona Lisa", weight: 0.8, size: "tiny" },
    { name: "Great Wall of China", weight: 70000000, size: "huge" },
    { name: "Rosetta Stone", weight: 0.762, size: "tiny" },
    { name: "Taj Mahal", weight: 16340000, size: "huge" }
];

const cars = [
    { name: "Fiat 500", weight: 900, size: "big" },
    { name: "Hummer H1", weight: 3900, size: "big" },
    { name: "Smart Fortwo", weight: 750, size: "big" },
    { name: "Ford F-150", weight: 2300, size: "big" },
    { name: "Bugatti Chiron", weight: 1995, size: "big" }
];

const categories = [animals, foods, culturalObjects, cars];
// ======== Game Windows and Objects======== //
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const multiplier1 = document.getElementById("multiplier1");
const multiplier2 = document.getElementById("multiplier2");
let object1;
let object2;
let lowestWeightObject;
let selectedAnswer;
/**
 * Run game after DOM is loaded
 * Add Event listeners for clicking guess-boxes
 */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("operand1").addEventListener("click", function(){
        checkAnswer1(selectedAnswer);
    }); 
    document.getElementById("operand2").addEventListener("click", function(){
        checkAnswer2(selectedAnswer);
    });    
    displayQuestion();
})

/**
 * Displays the question in operand1 and operand2
 * uses getRandomObject function to display random questions
 */
function displayQuestion(){
    object1 = randomObject(); //Gets random object1
    object2; 
    do {
        object2 = randomObject();  //Gets random object2
    } while (object2 === object1); //Makes sure it's not the same as object1
    lowestWeightObject = lowestWeight(object1, object2); // Finds the lowest weight object
    multiplier = Multiplier(lowestWeightObject.size); // Finds the multiplier of the lowestweightobject, multiplier depends on its size
    if (object1 === lowestWeightObject) { //Displays the multiplier with the lowest weight object
        operand1.textContent = object1.name;
        multiplier1.textContent = multiplier;
        operand2.textContent = object2.name;
    } else if (object2 === lowestWeightObject) { 
        operand1.textContent = object1.name; 
        operand2.textContent = object2.name;
        multiplier2.textContent = multiplier;
    }
    console.log("displayquestion");
    console.log("lowest", lowestWeightObject);

}
/**
 * Checks the lowest weight of object1 and object2
 * returns the lowestWeightObject
 */
function lowestWeight (object1, object2) {
    if (object1.weight <= object2.weight){ 
        return object1;
    } else {
        return object2;
    }
}
/**
 * 
 * Pick a multiplier for the smaller of the 2 objects
 */
function Multiplier(size) {
    switch (size) {
        case "tiny":
            return Math.floor(Math.random() * 500) + 1;
        case "small":
            return Math.floor(Math.random() * 500) + 1;
        case "big":
            return Math.floor(Math.random() * 1500) + 1;
        default:
            return 1; // No multiplier for huge items
    }
}
/**
 * Creates a random category
 * makes sure the categories aren't the same
 */
let previousCategory = -1; //First previousCategory is invalid
function randomCategory(){
    let newCategory;
    do {
        newCategory = categories[Math.floor(Math.random() * categories.length)]; //Create a new category 
    } while (newCategory === previousCategory); // untill it's not the same as the previous category
    previousCategory = newCategory; //update previous category
    return newCategory;
}
/**
 * Creates a random Object from the random category
 * since the categories can't be the same twice, the objects will never be the same twice
 */
function randomObject(){
    const category = randomCategory();
    const object = category[Math.floor(Math.random() * categories.length)];
    return object;
}

/**
function checkAnswer1(){ 
    let sum1 = (calculateCorrectAnswer(sum1, sum2))

    if (sum1 >= sum2){
        console.log("correct");
    } else {
        console.log("incorrect");
    }

}
function checkAnswer2(){ 
    let sum2 = (calculateCorrectAnswer(sum1, sum2))

    if (sum2 >= sum1){
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

function calculateCorrectAnswer(){
    let sum1;
    let sum2;
    if (object1 === lowestWeightObject){
        sum1 = object1.value * multiplier
        sum 2 =object2.value
    } else {
        sum1 = object1.value 
        sum 2 = object2.value * multiplier
    }
}
 */


 //------------------   Try 2 ------------------
 function checkAnswer1(selectedAnswer) {
    let { sum1, sum2 } = calculateCorrectAnswer();

    if (sum1 >= sum2) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

function checkAnswer2(selectedAnswer) {
    let { sum1, sum2 } = calculateCorrectAnswer();

    if (sum2 >= sum1) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

function calculateCorrectAnswer() {
    console.log("object1:", object1);
    console.log("object2:", object2);
    let sum1, sum2;
    if (object1 === lowestWeightObject) {
        sum1 = object1.weight * multiplier1.textContent;
        sum2 = object2.weight;
    } else {
        sum1 = object1.weight;
        sum2 = object2.weight * multiplier2.textContent;
    }
    return { sum1: sum1, sum2: sum2 };
}
 
