// ======== Game objects ======== //

const animals = [
    { name: "Elephant", weight: 5000, size: "big", image: "assets/images/elephant.png" },
    { name: "Giraffe", weight: 1800, size: "big", image: "assets/images/giraffe.png" },
    { name: "Lion", weight: 190, size: "small", image: "assets/images/lion.png" },
    { name: "Tiger", weight: 250, size: "small", image: "assets/images/tiger.png" },
    { name: "Gorilla", weight: 180, size: "small", image: "assets/images/gorilla.png" }
];

const foods = [
    { name: "Apple", weight: 0.15, size: "tiny", image: "assets/images/apple.png" },
    { name: "Chicken Breast", weight: 0.2, size: "tiny", image: "assets/images/chickenbreast.png" },
    { name: "Broccoli", weight: 0.1, size: "tiny", image: "assets/images/broccoli.png" },
    { name: "Salmon Fillet", weight: 0.18, size: "tiny", image: "assets/images/salmonfillet.png" },
    { name: "Pizza", weight: 0.3, size: "tiny", image: "assets/images/pizza.png" }
];

const culturalObjects = [
    { name: "Eiffel Tower", weight: 9162565, size: "huge", image: "assets/images/eiffeltower.png" },
    { name: "Mona Lisa", weight: 0.8, size: "tiny", image: "assets/images/monalisa.png" },
    { name: "Great Wall of China", weight: 70000000, size: "huge", image: "assets/images/greatwallofchina.png" },
    { name: "Rosetta Stone", weight: 762, size: "tiny", image: "assets/images/rosettastone.png" },
    { name: "Taj Mahal", weight: 16340000, size: "huge", image: "assets/images/tajmahal.png" }
];

const cars = [
    { name: "Fiat 500", weight: 900, size: "big", image: "assets/images/fiat500.png" },
    { name: "Hummer H1", weight: 3900, size: "big", image: "assets/images/hummerh1.png" },
    { name: "Smart Fortwo", weight: 750, size: "big", image: "assets/images/smartfortwo.png" },
    { name: "Ford F-150", weight: 2300, size: "big", image: "assets/images/fordf150.png" },
    { name: "Bugatti Chiron", weight: 1995, size: "big", image: "assets/images/bugattichiron.png" }
];

const categories = [animals, foods, culturalObjects, cars];
// ======== Game Windows and Objects======== //
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const multiplier1 = document.getElementById("multiplier1");
const multiplier2 = document.getElementById("multiplier2");
const object1Image = document.getElementById("object-image1");
const object2Image = document.getElementById("object-image2");
let object1;
let object2;
let lowestWeightObject;
let selectedAnswer;

/**
 * Run game after DOM is loaded
 * Add Event listeners after DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("operand1").addEventListener("click", function(){
        checkAnswer1(selectedAnswer); //Click on guess-box1
    });
    document.getElementById("object-image1").addEventListener("click", function(){
        checkAnswer1(selectedAnswer); //Click on image 1
    });  
    document.getElementById("operand2").addEventListener("click", function(){
        checkAnswer2(selectedAnswer); //Click on guess-box2
    });
    document.getElementById("object-image2").addEventListener("click", function(){
        checkAnswer2(selectedAnswer); //Click on image 2
    });
    document.getElementById("score-star").addEventListener("click", function(bubblepop){ //parent div of all the score-stars
        if (bubblepop.target.classList.contains("shown")){ //checks for Shown score-stars
            console.log("clicking on shown");
        } else {
            console.log("clicking on nothing");
        }
        });
    displayQuestion();
});



/**
 * Displays the question in operand1 and operand2
 * uses getRandomObject function to display random questions
 */
function displayQuestion(){
    let plural1 = ""; //variable to display "s" at the end of object name
    let plural2 = "";
    object1 = randomObject(); //Gets random object1
    object2; 
    do {
        object2 = randomObject();  //Gets random object2
    } while (object2 === object1); //Makes sure it's not the same as object1
    lowestWeightObject = lowestWeight(object1, object2); // Finds the lowest weight object
    multiplier = Multiplier(lowestWeightObject.size); // Finds the multiplier of the lowestweightobject, multiplier depends on its size
    if (object1 === lowestWeightObject) { 
        multiplier1.textContent = multiplier; //Displays the multiplier with the lowest weight object
        plural1 = "s"; //Displays the "S" with the multiple object

    } else if (object2 === lowestWeightObject) { 
        multiplier2.textContent = multiplier;  //Displays the multiplier with the lowest weight object
        plural2 = "s"; //Displays the "S" with the multiple object
    }
    displayImage1(object1); //Displays the objects images
    displayImage2(object2);
    operand1.textContent = multiplier1.textContent + " " + object1.name + plural1; //Displays the objects names
    operand2.textContent = multiplier2.textContent + " " + object2.name + plural2;
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
    const object = category[Math.floor(Math.random() * category.length)];
    return object;
}

function displayImage1(object1) {
    object1Image.innerHTML = `<img src="${object1.image}" alt="${object1.name}" width="100%" height="100%">`;
}

function displayImage2(object2) {
    object2Image.innerHTML = `<img src="${object2.image}" alt="${object2.name}" width="100%" height="100%">`;
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
        incrementScore();
    } else {
        decrementScore();
    }
}

function checkAnswer2(selectedAnswer) {
    let { sum1, sum2 } = calculateCorrectAnswer();

    if (sum2 >= sum1) {
        incrementScore();
    } else {
        decrementScore();
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
 
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score-section").innerText);
    document.getElementById("score-section").innerText = ++oldScore;
    multiplier1.textContent = "";
    multiplier2.textContent = "";
    unhideRandomScoreStar();
   
}
/**
 * Gets the current score from the DOM and decrements it by 1
 */
function decrementScore(){
    let oldScore = parseInt(document.getElementById("score-section").innerText);
    document.getElementById("score-section").innerText = --oldScore;
    multiplier1.textContent = "";
    multiplier2.textContent = "";
    hideRandomScoreStar()
}

function unhideRandomScoreStar() {
    let spans = document.querySelectorAll(".hidden"); // Selects all spans with the hidden class
    let randomIndex = Math.floor(Math.random() * spans.length); // Picks random number from the spans
    spans[randomIndex].classList.remove("hidden"); // Removes the hidden class
    spans[randomIndex].classList.add("shown"); // Adds shown class
   
  
    displayQuestion();
}

function hideRandomScoreStar() {
    let spans = document.querySelectorAll(".shown"); // Selects all spans with the shown class
    let randomIndex = Math.floor(Math.random() * spans.length); //Picks random number of all the shown spans
    spans[randomIndex].classList.remove("shown"); // Removes the shown class
    spans[randomIndex].classList.add("hidden"); // Adds the hidden class
    displayQuestion();
}