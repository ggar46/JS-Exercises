//JS FUNDAMENTALS - 4 EXERCISES

// 1. HELLO, OBJECT___________________________________________________________
//Write the code, one line for each action:
console.log( "~ EXERCISE 1 ~");
//SOLUTION
let emptyObj = {}; // Create an empty object user.
console.log(emptyObj);
emptyObj.name = "John"; // Add the property name with the value John.
console.log(emptyObj);
emptyObj.surname = "Smith"; // Add the property surname with the value Smith.
console.log(emptyObj);
emptyObj.name = "Pete"; // Change the value of the name to Pete.
console.log(emptyObj);
delete emptyObj.name; // Remove the property name from the object.
console.log(emptyObj);


// 2. CHECK FOR EMPTINESS____________________________________________________
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
//alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
console.log( "~ EXERCISE 2 ~");

let schedule = {};
schedule["8:30"] = "get up";

//SOLUTION
function isEmpty(obj){
  //If statement checks for object values: Returns true if the object keys have a length of 0
  if(Object.keys(obj).length === 0){
    //If true, then the object is empty.
    return true;
  } else {
    //Else statement returns false in case the object contains a value.
    return false;
  }
}
//Learned that alert is used to create a pop-up window in browsers (or just print to console).
alert(isEmpty(schedule));


// 3. SUM OBJECT PROPERTIES___________________________________________________
// We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
console.log( "~ EXERCISE 3 ~");

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

//SOLUTION
function sumSalaries(obj){
  //Created a variable that can be updated outside the for-in loop we will use later
  let sum= 0;
  //Created an "if" statement that returns 0 if the object is empty. Placed the if statement before the loop because it can return the "sum" variable before the loop can change its value
  if (Object.keys(obj).length === 0){
    return sum;
  }else{
    //Created a "for...in" loop that iterated through the keys
    for (let key in obj){
      //For each key, the sum will be added to the value of the key. The "sum" variable will continue to be updated
      sum += obj[key];
    }
  }
  //Returned the total sum after every value has been added
  return sum;
}

console.log(sumSalaries(salaries));


// 4. MULTIPLY NUMERIC PROPERTY VALUES BY 2________________________________________
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:
//         // before the call
      // let menu = { 
      //   width: 200,
      //   height: 300,
      //   title: "My menu"
      //   };
      
//         multiplyNumeric(menu);

//         // after the call
        // let menu = {
        //    width: 400,
        //    height: 600,
        //    title: "My menu"
        //  };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.

console.log( "~ EXERCISE 4 ~");

//Object
let menu = { 
        width: 200,
        height: 300,
        title: "My menu"
        };

//SOLUTION
function multiplyNumeric(obj){
  //Used the "for...in" loop to iterate through every key
  for (let key in obj){
    //Conditionally check that the datatype of every key in the object outputs as a "number" to ensure we only change keys with number values 
    if (typeof obj[key] === "number"){
      //If the value is a number, then the key/value pair is updated so the value is multiplied by 2
      obj[key] *= 2;
    }
  }
  //Returned the changed object
  return obj;
}

console.log(multiplyNumeric(menu));
