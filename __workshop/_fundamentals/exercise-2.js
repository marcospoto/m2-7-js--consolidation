// Exercise 2
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  ellicia: "panda express",
  fertrude: "gummy bears",
  glinda: "pie",
  hethel: "not applicable",
  irsula: "rum cake",
  judas: "revenge (served cold)",
  khloe: "pie",
  lyndon: "easter eggs",
  minda: "dessert",
};

// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

// Your function should work with both objects and any other objects of the same shape.

function sortByPopularity(obj) {
  // Create an object to hold the count of the appearances of the desserts
  let dessertCountObj = {};

  // Adding the desserts with their count to the dessertCountObj
  Object.values(obj).forEach((dessert) => {
    // Check if that dessert exists in dessertCountObj, if yes add to the count.
    // if not then make it equal to 1 since it is the first time
    if (dessertCountObj[dessert]) {
      dessertCountObj[dessert]++;
    } else {
      dessertCountObj[dessert] = 1;
    }
  });
  // console.log(dessertCountObj);

  // getting the names of the desserts since there is no duplicate names anymore
  let keyArray = Object.keys(dessertCountObj);

  keyArray.sort(function (keyA, keyB) {
    // keyA and keyB are names from the keyArray

    // dessertCountObj[keyA or KeyB] returns the count associated with that key.
    // For example dessertCountObj["pie"] would give you 3
    return dessertCountObj[keyB] - dessertCountObj[keyA];
  });
  // console.log(keyArray);

  // This is returning the sorted array
  return keyArray;
}

// Verification via console.log()
console.log(
  "Popular desserts in Group A:",
  sortByPopularity(favoriteDessertsGroupA)
);
console.log(
  "Popular desserts in Group B:",
  sortByPopularity(favoriteDessertsGroupB)
);

// Test your code: "yarn test exercise-2"

module.exports = sortByPopularity;
