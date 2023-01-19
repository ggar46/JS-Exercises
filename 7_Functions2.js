// Week 2 - Functions --

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Tfhen, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'

//(1) Explanation: Concatenated the 2nd string without spaces so they are prepended to the 1st string. 
function prependToString(str1, str2){
  const prependedStr = str2 + str1;
  console.log(prependedStr);
}

prependToString('awesome', 'very') // --> 'veryawesome'
prependToString('world', 'hello ') // --> 'hello world'
prependToString('nothing', '') // --> 'nothing'

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false

//(2) Explanation: Used a for loop to iterate through the string, then nested an if statement to ensure that the loop will only return true if the string at index i is strictly equal to the given character. Otherwise, the loop will exit and return false. The false is outside the loop because if "return false" were inside the loop, the for loop would not work and would exit and return false each iteration instead of ever printing true.
function stringIncludes(str3, letter1){
  for (let i=0; i< str3.length; i++){
    if (str3[i] === letter1) {
      return true;
    }   
  } 
 return false; 
}

console.log(stringIncludes("awesome","e"));
console.log(stringIncludes("awesome","z")); 

console.log("Exercise 3");

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1
//loop
//find last index character exists

//(3) Explanation: Created a for loop to iterate through the string, then an if loop to only print if the condition is satisfied. The loop starts at str4.length-1 to ensure make the range from the last string index to index 0. Then it will loop in decrements. Every time the string at index i is equal to the character, the index will print. Otherwise, the function will return -1. Once again, the else statement return is outside of the loop to prevent the loop exiting every iteration and printing -1 every time.

function stringLastIndexOf(str4, letter2){
  for(let i=str4.length-1; i>=0; i--){
    if (str4[i] === letter2){
      return i;
    }
  }
return -1;
}

console.log(stringLastIndexOf('awesome', 'e')); // --> 6
console.log(stringLastIndexOf('awesome', 'z')); // --> -1

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '

// (4) Explanation: Created a new string because the question asked for a unique string. Created a for loop that iterates through the string. Within the for loop, the if statement condition says that if the iteration i is less than the start index in the string, or it is greater than the end index (created by adding the number of characters removed to the start index, subtracting 1 for 0-based indexing), it will be printed within the new string newString. This way, we only print the characters that are not excluded by the condition. The loop prints the characters at index i that come before the startIndex, and the characters that come after the endIndex so the unwanted characters are excluded.

function removeFromString(str5, startIndex, numRemove){
  let newString = "";
  for(i=0; i<str5.length; i++){
    if(i< startIndex || i > (startIndex+numRemove-1)){
      newString = newString+=str5[i]; 
    }
  }
  return newString;
}

console.log(removeFromString('Elie', 2, 2)) // --> 'El'
console.log(removeFromString('Elie', 0, 1)) // --> 'lie'
console.log(removeFromString('Hello School', 0, 6)) // --> 'School'
console.log(removeFromString('Hello School', 2, 4)) // --> 'HeSchool'
console.log(removeFromString('Hello School', 6, 400)) // --> 'Hello '

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1

//(5) Explanation: Created a for loop to iterate through the array. The if statement helps search for the value number1 within the array. If the condition is true and the array at index i is strictly equal to the number, it will return the array's index. If false, the function will print -1 (placed outside of the loop to avoid -1 being printed for every iteration)

function indexOf(arr, number1){
  for(let i=0; i< arr.length; i++){
    if(arr[i] === number1){
      return i;
    } 
  }
  return -1;
}

let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // --> 3
let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // --> 1
let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // --> -1

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

//(6) Explanation: Began with an if statement to provide a value for startIndex2 if the 3rd parameter were to be missing.Then, created a different if statement that only is true if the first parameter is a string or an array (used Array.isArray because typeof types an array as an object, and we want to differentiate objects as well). If either are true, the for loop will run starting from the startIndex2 (which is 0 is parameter is not defined) all the way to less than the length of the string or array, exclusive. It will increment. If index i in the collection falls under this range, the if statement will run. The if statement will only return true if the value in collection index i is strictly equal to the value1 parameter. If it returns false, the else statement outside of the for loop will run next. The for loop within the statement iterates through the object collection by referencing the key. If the object value at a key is equal to value1, then it will return true. If both if and else statements are false, the function will return false.

function includes(collection, value1, startIndex2){
  if(startIndex2 === undefined){
    startIndex2 = 0; 
  }
  if (typeof collection === "string" || Array.isArray(collection)){
    for(let i=startIndex2; i < collection.length; i++){ // startIndex2 = 2
      // console.log(collection[i]); // collection[2] = "c"; collection[3] = "d"
      if(collection[i] === value1){ // if "c" === "a"
        return true; // c !=== a, skip 
      }
    }
  } else {
     for (let key in collection){
       if (collection[key] === value1){
         return true;
       }
     }
  }
 return false;
}


console.log(includes([1, 2, 3], 1, 2)) // --> false
console.log(includes([1, 2, 3], 6)) // --> false
console.log(includes({ 'a': 1, 'b': 2 }, 1)) // --> true
console.log(includes({ 'a': 1, 'b': 2 }, 'a')) // --> false
console.log(includes('abcd', 'b')) // --> true
console.log(includes('abcd', 'e')) // --> false
console.log(includes('abcd', 'a', 2)) // --> false