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
    { name: "Eiffel Tower", weight: 7300, size: "huge" },
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

/**
 * Run game after DOM is loaded
 * Add Event listeners for clicking guess-boxes
 */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("operand1").addEventListener("click", function(){}); 
    document.getElementById("operand2").addEventListener("click", function(){});    
    displayQuestion();
})

/**
 * Displays the question in operand1 and operand2
 * uses getRandomObject function to display random questions
 */
function displayQuestion(){
    let operand1 = document.getElementById("operand1");
    let operand2 = document.getElementById("operand2");
    operand1.textContent = "Gorilla";
    operand2.textContent = "Pizza";
    console.log("displayquestion");
    getRandomObjectFromRandomCategory();
}


/**
 * Picks a random category
 * picks a random object inside that category
 */
function getRandomObjectFromRandomCategory(){
    console.log("getrandomobject1");
    const category1 = categories[Math.floor(Math.random() * categories.length)]; //random category 1
    const category2 = categories[Math.floor(Math.random() * categories.length)]; //random category 2
    const object1 = category1[Math.floor(Math.random() * categories.length)]; //random object 1
    const object2 = category2[Math.floor(Math.random() * categories.length)]; //random object 2
    console.log(object1);
    console.log(object2);

}

