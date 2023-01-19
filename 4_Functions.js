
// Week 4 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting(){
  console.log("Hello");
}

logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName(){
  return "Gisselle";
}
console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2() {
  console.log("Hello! My name is " + getName());
}
logGreeting2();

//Once again, did not use console.log() to print the function because the console.log() is already in the function.

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function exercise4(numA, numB, numC){
  const sum = numA + numB + numC;
  return sum;
}
console.log(exercise4(1,2,3));
console.log(exercise4(5,3,8));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

//Created the function and used age as a parameter. If the argument is less than or equal to 14 OR greater than or equal to 65, the codition will be true and return true (inclusive because 14 and 65 are mentioned as "14 OR under", "64 OR older". Otherwise, it will return false.

function discountOrNot(age){
  if (age <= 14 || age >= 65) {
    return true;
  } else {
    return false;
  }
}

console.log(discountOrNot(14));
console.log(discountOrNot(25));
console.log(discountOrNot(66));

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function printInput(numB, str1){
  //Used a for loop to ensure the numB argument is repeated 'i' number of times. The range is from 1 to less than or equal to numB. This is important because we want the loop to print 1 time, and increasing until the argument is the terminal condition.
  //It is increasing by increments, and creating an output of str through console.log every time the condition is true
  for (i=1; i<= numB; i++){
    console.log(str1);
  } 
  }

console.log(printInput(3, "Hello"));
console.log(printInput(2, "Good-bye"));

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
   return p1 * 2; //function muliplies p1 and 2, doubles it.
 }
 const y = 4; 
 const z = mysteryFunction1(y); // Z is the function with this input (y=4)
 console.log("The value of y is " + y); 
 console.log("The value of z is " + z); 

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
//      answer: The function doubles the input.
// 2. What prints out for the value of y
//      answer: Y would be const so it would output 4.
// 3. What prints out for the value of z?
//      answer: Z would print out the function after inputting const y, so 8. 
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
//Yes,, it was a matter of plugging in the right input and paying attention to the initialized variables to get an accurate answer.

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4); // If inputted, p1-p2 would be 10-4, answer x=6
const b = mysteryFunction2(a, 1); //p1-p2 would be x=a-2, answer would be a-2
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
//    answer = The function assigns the difference between p1 and p2 to variable x
// 2. What prints out for the value of a
//    answer is 6
// 3. What prints out for the value of b
//    answer is 5 because const a was 6, so 6-1 =5
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
//Yes, but I learned that I can make a function with a predetermined input equal to a variable, so that the output is assigned to that variable.

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items

const groceryList = "eggs,carrots,orange juice";
//Used .split() and specified that the array will be separated where the commas are in the string
const array1 = groceryList.split(",");
console.log(array1);

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
//Within .split(), I specified that the array will be separated where the arrows are in the string
const array2 = mySchedule.split("--->");
//The question said to only use the split() function, so I used indexing to return the first and second values in the array.
console.log(array2[0]);
console.log(array2[1]);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I found these to be easier, because the functions were not complex.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
