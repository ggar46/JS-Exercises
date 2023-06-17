// Week 3 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt..

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive)..word

let i = 1;
while (i<=5){
  console.log(i);
  i++;
}

//To create a space
console.log(" ");

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let j = 1;
do {
  console.log(j);
  j++
} while (j<=5);

console.log(" "); //To create a space

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let k=1; k<=5; k++){
  console.log(k);
}

//To create a space
console.log(" ");

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//while loop

  let l = 10;
  while (l>=1){
    console.log(l);
    l--;
  }
  
console.log(" "); //To create a space
  
//do while loop
  let m = 10;
  do {
    console.log(m);
    m--;
  } while (m>=1);
  
console.log(" ")//To create a space
  
//for loop
  for (let n=10; n>=1; n--){
    console.log(n);
  }

console.log(" ");//To create a space

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//while loop
//Exclusive because the problem did not specify.

let o = 8;
while (o<27){ 
  console.log(o);
  o++;
}

console.log(" "); //To create a space

//do while loop
let p = 8;
do {
  console.log(p);
  p++
} while (p<27);

console.log(" "); //To create a space

//for loop
for (let q=8; q<27; q++){
  console.log(q);
}

console.log(" "); //To create a space

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//while loop
//Started range in loop at 10 because the instructions did not specify it was inclusive.

let r = 10
while (r<100){
  console.log(r);
  
  //Added 10 to r, because the next loop can now begin at r=20, and then continue adding 10 so the loop only has an output every 10th loop.
  
  r+=10;
}

console.log(" "); //To create a space

//do while loop
let s = 10;
do {
  console.log(s);
  s+=10;
} while (s<100);

console.log(" "); //To create a space

//for loop
for (let t=10; t<100; t+=10){
  console.log(t);
}

console.log(" ");//To create a space

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
    //answer: It is an infinite loop, because 1 is always going to be less than 2. Therefore, the loop's condition will be true and continue to loop.

//let counterFour = 1;
// while (counterFour < 2) {
//   console.log("HELP ME!");
//   counterFour--;
// }
//The starting point is 2, because we want the loop to stop when counterFour is equal to -100. As long as counterFour is greater than -100, it will go down in decrements from 2.

let counterFour = 2;
while (counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

const myFave = 7;
for (let i=0; i<=myFave; i++) {
  console.log(i);
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

//Chose a different faveInt, and created a for loop to account for every number between 0 and 100. The if statement specifies that if the loop outputs 5 (hence why strictly equals is being used rather than assignment operator), then it will console.log the number and the string. The other condition stated by else if says that if the iteration is not 5, it will output accordingly.

const faveInt = 5;
for (let i=0; i<=100; i++){
  if (i === 5) {
    console.log(i + " my favorite number!");
  } else if( i !== 5){
    console.log(i + " not my favorite number");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//The do while loop will loop at least once. This is useful if the goal is to have the loop print once even if it does not suit the loop's condition.
//The for loop is useful if the range is specified. All loops work with a range, but the for loop places all conditions on one line, which means that they must all be true for the loop to run.
//The while loop is helpful when we do not have a specific terminal condition in mind. That way, the loop will break when the condition is false.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/


//The visual was helpful for nested loops. The first loop sets the range from 0 to 3 (inclusive), and goes up in increments. For 0 to 3, it will output "counting down from" and the number from 0 to 3.

 for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
   console.log("counting down from", outsideCounter);
   
   //The inner loop is referencing the outer loop to know when to begin. When the outer loop begins aat 0, the inner loop creates a new variable with a different terminal condition. The 0 would fail the terminal condition because 0 is not greater than or equal to one, and would exit the loop. Now, it will go to the console.log with the stars and return to the outer loop for the next number.
   
   for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
     console.log("inside", insideCounter);
   }
   console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//This was difficult towards the end because I was not too confident about all loops other than for loops. Now, I feel much better about their use. I used W3 schools to review the loop functions.

// Email your file to us or commit your file to GitHub and email us a link.


