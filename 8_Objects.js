// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
let obj3 = {};
// keys(obj3); // []

//Solution
function keys(obj){
  //Created an empty array to use for the final array of keys
  let finalArray = [];
  //Made a "for..in" loop to loop through the object
  for(let item in obj){
    //Since this loop references keys, made the loop push every key into the outside array named finalArray
    finalArray.push(item);
  }
  //Now, the loop is identifying the keys using the variable item. Called the finalArray so the function returns the output as the final array.
  return finalArray;
}

//Test Keys
console.log("~ Exercise 1 ~");
console.log(keys(obj));
console.log(keys(obj2));
console.log(keys(obj3));


// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
let obj4 = { a: 1, b: 2, c: 3 };
// values(obj4); // [1,2,3]
let obj5 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj5); // ["Matt", "Lane", true]
let obj6 = {};
// values(obj6); // []

//Solution
function values(obj){
  //Created an empty array to push values onto later
  let arrayOfValues = [];
  //Created a for in loop to iterate through the object items
  for(let item in obj){
    //Within the loop, pushed only the object values into the empty array (values shown as obj[item])
    arrayOfValues.push(obj[item]);
  }
  //Returned the array that now should contain the object values
  return arrayOfValues;
}

//Test Cases
console.log("~ Exercise 2 ~");
console.log(values(obj4));
console.log(values(obj5));
console.log(values(obj6));

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []

//Solution
function entries(obj){
  //Created an empty array to use as the final answer containing the key value pairs as individual arrays within the empty array
  let answer = [];
  //Used the "for...in" loop to iterate through the object, and pushed the item and value (value shown as obj[item]) within brackets to be pushed together as an array into the answer array
  for(let item in obj){
    answer.push([item, obj[item]]);
  }
  //Returned the answer array that now contains arrays
  return answer;
}

//Test Cases
console.log("~ Exercise 3 ~");
console.log(entries(obj));
console.log(entries(obj5));
console.log(entries(obj6));

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

//Learned that it is best to use brackets when accessing objects using a variable. Dot notation translates keys as strings, and brackets keep the variable intact.

//Solution
function pluck(array, key1){
  //First created an empty array to push the array of values that match the argument key1
  let finalArray = [];
  //Created a "for" loop to iterate through each object in the array of objects
  for (let i = 0; i<array.length; i++){
    //Created an "if" statement to check if the array at index i has the property of the argument key1 using .hasOwnProperty()
    if(array[i].hasOwnProperty(key1) === true){
      //If the condition is true, then the code will push the the value of the key onto the empty array finalArray
      finalArray.push(array[i][key1]);
    } else {
      //If the condition is false, then the code will push "undefined" as a value inside the empty array
      finalArray.push("undefined");
    }
  }
  //Finally, we returned the final array outside of the loop that is now containing all the matching key values
  return finalArray;
}

//Test Cases
console.log("~ Exercise 4 ~");
console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'));

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

//Solution
function stringFromObject(object){
  //Created an empty array to use later
  let newArr = [];
  //Made a "for" loop to iterate through the object and push the item, "=", and value shown as object[item] into the new array
  for(let item in object){
    //Since values are being concatenated together, they will become strings as they are pushed into the new array. Now the new array has all the object key value pairs separated by equal signs
    newArr.push(item + " = " + object[item]);
  } 
  //Returned the new array using .join to change it into a string where the values should be separated by a comma and a space instead of the default value that is just a comma. This way, the key value pairs are separated by commas and the string does not end in a comma.
  return newArr.join(", ");
}

//Test Cases
console.log("~ Exercise 5 ~")
console.log(stringFromObject({ a: 1, b: '2' }));
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
console.log(stringFromObject({}));

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

//Solution 1
function minMaxKeyInObject(objectWithNum){
  //Made empty array to later push array of numbers from object keys
  let numberArray = [];
  //made empty array for just the min and max from number array
  let minAndMax = [];
  //made a for loop to iterate through object numeric keys
  for (let item in objectWithNum){
    //made if statement inside loop checking if keys are numbers, (if they are numeric)
    if(isNaN(item) === false){
      //Push the numeric keys into the empty array
      numberArray.push(item*1);
    }  
  }
  //Sort the array of numbers to be ascending
  numberArray.sort((a,b) => {return a - b});
  //Push the first and last numbers from the sorted array onto the answer empty array
  minAndMax.push(numberArray[0], numberArray[numberArray.length-1]);
  //return answer array
  return minAndMax;
}

//Test Cases
console.log("~ Exercise 6 ~")
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'}));
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
//Note: object keys are assumed strings

//Explanation for 2nd Method: Created empty initial array and final array to use later. Used the "for...in" loop to iterate through the object keys. Used the loop to push each key into the initial array. Used Math.min and Math.max to find the min and max of the array. Used the spread operator to be able to include the entire array within the parameters of Math.min/Math.max. Now the final array is left with the minimum value and the maximum value. Returned the finalArray.

// function minMaxKeyInObject(obj){
//   let initialArray= [];
//   let finalArray= [];
//   for (let keys6 in obj){
//      initialArray.push(keys6);
//   }
//   finalArray.push(Math.min(...initialArray));
//   finalArray.push(Math.max(...initialArray));
//   return finalArray;
// }

// console.log("~ Exercise 6.2 ~")
// console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'}));
// console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));