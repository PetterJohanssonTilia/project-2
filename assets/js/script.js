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
const bubbles = document.querySelectorAll('.bubble');
let object1;
let object2;
let lowestWeightObject;

/**
 * Run game after DOM is loaded
 * Add Event listeners after DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("operand1").addEventListener("click", function(){
        checkAnswer('clickedOn1'); //Click on guess-box1
    });
    document.getElementById("object-image1").addEventListener("click", function(){
        checkAnswer('clickedOn1'); //Click on image 1
    });  
    document.getElementById("operand2").addEventListener("click", function(){
        checkAnswer('clickedOn2'); //Click on guess-box2
    });
    document.getElementById("object-image2").addEventListener("click", function(){
        checkAnswer('clickedOn2'); //Click on image 2
    });
    bubbles.forEach(ele => {
        ele.addEventListener("mouseover", function(e) {
            if (e.target.tagName === 'IMG' && e.target.parentElement.classList.contains('bubble')) {
                hideThisScoreStar(e.target);
            }
        });
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
    do {
        object2 = randomObject();  //Gets random object2
    } while (object2 === object1); //Makes sure it's not the same as object1
    lowestWeightObject = lowestWeight(object1, object2); // Finds the lowest weight object
    let multiplier;
    multiplier = Multiplier(lowestWeightObject.size); // Finds the multiplier of the lowestweightobject, multiplier depends on its size
    if (object1 === lowestWeightObject) { 
        multiplier1.textContent = multiplier; //Storess the multiplier with the lowest weight object
        plural1 = "s"; //Displays the "S" with the multiple object

    } else if (object2 === lowestWeightObject) { 
        multiplier2.textContent = multiplier;  //stores the multiplier with the lowest weight object
        plural2 = "s"; //Displays the "S" with the multiple object
    }
    displayImage(object1Image, object1); //Displays the objects images
    displayImage(object2Image, object2);
    operand1.textContent = multiplier1.textContent + " " + object1.name + plural1; //Displays the objects names
    operand2.textContent = multiplier2.textContent + " " + object2.name + plural2;
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

function displayImage(operand, object) {
    operand.innerHTML = `<img src="${object.image}" alt="${object.name}" width="100%" height="100%">`;
}

/**
 * Checks what's being clicked
 * If what's clicked weighs more than what is not clicked
 * increment score
 * increment attempts
 */
 function checkAnswer(clickedOn) {
    let { sum1, sum2 } = calculateCorrectAnswer();
    if (clickedOn === 'clickedOn1' && sum1 >= sum2) {
        incrementScore();
        incrementAttempts();
    } else if (clickedOn === 'clickedOn2' && sum2 >= sum1){
        incrementScore();
        incrementAttempts();
    } else {
        decrementScore();
        incrementAttempts();
    }
}

/**
 * Checks which objects has the lowest weight
 * Adds multiplier to the lowest weight object
 * Checks which objects weighs more after multiplier
 */ 
function calculateCorrectAnswer() {
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
 * The function IncrementScore and DecrementScore are 2 seperate functions 
 * because I've added 2 different animations on each, this could be turned into 1 function later
 * 
 * 
 * Gets the current score from the DOM and increments it by 1
 * Resets the multiplier
 * 
 * 
 * Uses 2 functions to first animate the score green and then unhides a scorestar
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score-section").innerText);
    document.getElementById("score-section").innerText = ++oldScore;
    if (oldScore >= 10){
        let Attempt = parseInt(document.getElementById("attempts-section").innerText); //Creates the attempt value from "attempts-section"
        sessionStorage.setItem('attempt', Attempt); // Store the Attempt value to be reached from the playagain page
        window.location.href = "playagain.html"; //This line takes you to a new page but is to be updated into a pop-up on the same page
        // These 2 lines are briefly shown before the playagain page is loaded
        document.getElementById("attempts-section").innerText = "-1"; // Resets the attempts, -1 to make it start at 0 after this function
        document.getElementById("score-section").innerText = "0"; // Resets the score
    } else{
    multiplier1.textContent = "";
    multiplier2.textContent = "";
    scoreboxCorrect();  // Animates the scorebox green
    unhideRandomScoreStar(); //Turns the scorestars into .hidden
    }
}

function incrementAttempts(){
    let oldAttempt = parseInt(document.getElementById("attempts-section").innerText);
    document.getElementById("attempts-section").innerText = ++oldAttempt;
}

/**
 * The function IncrementScore and DecrementScore are 2 seperate functions 
 * because I've added 2 different animations on each, this could be turned into 1 function later
 * 
 * Gets the current score from the DOM and decrements it by 1
 * Resets the multiplier
 * 
 * Uses 2 functions to first animate the score red and then hides a scorestar
 */
function decrementScore(){
    let oldScore = parseInt(document.getElementById("score-section").innerText);
    document.getElementById("score-section").innerText = --oldScore;
    multiplier1.textContent = "";
    multiplier2.textContent = "";
    scoreboxIncorrect();
    hideRandomScoreStar();
}

/**
 * Adds a class to animate the score going up
 * removes class after animation is done
 */
function scoreboxCorrect(){
    let scorebox = document.getElementById("score-section");
    scorebox.classList.add("score-box-correct");
    setTimeout(() => {
        scorebox.classList.remove("score-box-correct");
    }, 300);
}

/**
 * Adds a class to animate the score going down
 * removes class after animation is done
 */
function scoreboxIncorrect(){
    let scorebox = document.getElementById("score-section");
    scorebox.classList.add("score-box-incorrect");
    setTimeout(() => {
        scorebox.classList.remove("score-box-incorrect");
    }, 300);
}

/**
 * Adds class .shown and removes .hidden to the spans
 */
function unhideRandomScoreStar() {
    let spans = document.querySelectorAll(".hidden"); // Selects all spans with the hidden class
    let randomIndex = Math.floor(Math.random() * spans.length); // Picks random number from the spans
    spans[randomIndex].classList.remove("hidden"); // Removes the hidden class
    spans[randomIndex].classList.add("shown"); // Adds shown class
    displayQuestion();
}

/**
 * Adds class .hidden and removes .shown to the spans
 */
function hideRandomScoreStar() {
    let spans = document.querySelectorAll(".shown"); // Selects all spans with the shown class
    let randomIndex = Math.floor(Math.random() * spans.length); //Picks random number of all the shown spans
    spans[randomIndex].classList.remove("shown"); // Removes the shown class
    spans[randomIndex].classList.add("hidden"); // Adds the hidden class
    displayQuestion();
}

function hideThisScoreStar(element){
    element.parentElement.classList.remove("shown"); // Removes the shown class
    setTimeout(() => {
        element.parentElement.classList.add("hidden");
    }, 100);
}