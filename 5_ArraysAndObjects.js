// Week 5 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js. question help
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals

const animals = [];

// Exercise 2. Add the string "frog" to the array

animals.push("frog");

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals.push("giraffe", "rabbit", "chicken", "turtle");

// Exercise 4. Update the first item in the array to be "gorilla"

animals.unshift("gorilla");

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

console.log(animals.length);

// Exercise 6. Print the first item in the array

console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
//Subtracted 1 from .length to ensure that the indexing is accurate through the end of the array, since it will use 0-based indexing.

console.log(animals[animals.length-1]);

// Exercise 8. Remove the last item from the array

animals.pop();

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

const assortedThings = ["pink", "purple", "maroon", 1, 7, 10];

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World question help
// ...

for (let i=0; i<=assortedThings.length-1; i++){
  console.log("Item #" + i + " is " + assortedThings[i]);
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
// Then write 

//Used a for loop to make sure every item in the array from 1 to 0 is accounted for. The if statement within the loop is to identify which numbers are greater than or less than 100.

function sizeOfNumbers (arr){
  for (let i=0; i< arr.length; i++){
  //If the number at array index i is greater than 100 (exclusive), then the output will print the number at the array index i, along with the string " BIG". There is a space accounted for before the word.
    if (arr[i] > 100) {
      console.log(arr[i] + " BIG");
    //If the first condition is false, the else if condition will try to run. If the array at index i is greater than 0 and less than 100 (exclusive), it will do the same action as prior but instead print " small".
    } else if (arr[i] > 0 && arr[i] < 100) {
      console.log(arr[i] + " small");
    //If both conditions fail, the else condition will apply, and the number at array index i will print along with the string " negative"
    } else {
      console.log(arr[i] + " negative");
    }
  }
}

console.log(sizeOfNumbers ([-2, 200, 50, 7]));

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

const me = {name: "Gisselle", favoriteAnimal:"giraffe", favoriteNumber:7};

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me.mood = "happy";
me.meal = "breakfast";

// Exercise 14. Update the favoriteAnimal value to something different

me.favoriteAnimal = "elephant";

// Exercise 15. Print the value of favoriteAnimal.

console.log(me.favoriteAnimal);
console.log(me['favoriteAnimal']);

// Note: there are at least 2 ways to get the value of a key, try to write both.

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I found these to be medium, because I found myself making mistaked. Now, I feel much more confident in arrays. I do find objects to be much easier.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.