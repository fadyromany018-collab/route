//fady romany

//q1
 let x= "123";
console.log(Number(x)+7);
//q2

function checkValue(value) {
    if (!value) {
        return "Invalid";
    }
    return "Valid";
}

console.log(checkValue(0));          // Output: "Invalid"

//q3

for(let x=0; x<10; x++){
    if(x % 2 === 0) {
        continue;
    }else{
    console.log(x);
}
} 
//q4
let arrr=[1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log(arrr); 
//q5

let arr1=[1, 2, 3];
let arr2=[4, 5, 6];
let combinedArr=[...arr1, ...arr2];
console.log(combinedArr); 


//q6


let x1 = 1

switch(x1) {
case 1:
    console.log("sunday");
    break;
case 2:
    console.log("monday"); 
    break;
case 3:
    console.log("tuesday"); 
    break;
case 4:
    console.log("wedensday"); 
    break;
case 5:
    console.log("thursday"); 
    break;
case 6:
    console.log("friday"); 
    break;
case 7:
    console.log("saturday"); 
    break;
default:
    console.log("Other");
    break;}
//q7

let arr3=["a", "ab", "abc"].map((arr3)=>arr3.length);
console.log(arr3); 
//q8

function getdivisible(x){
    if(x % 3 === 0 && x % 5 === 0){
        return "Divisible by both 3 and 5";
    }    else if(x % 3 === 0){
        return "Divisible by 3";
    }   else if(x % 5 === 0){
        return "Divisible by 5";
    }    else{
        return "Not divisible by 3 or 5";
    }
}

console.log(getdivisible(15));
//q9
const square=(a)=>a*a;
console.log(square(5));
//q10

const sha5s1 = {
  name: "Alice",
  age: 25
};
console.log(sha5s1.name + " is " + sha5s1.age + " years old."); 

//q11

function addition(a,b,c,d,e){
    return a + b + c + d + e;
}

console.log(addition(1,2,3,4,5)); 
//q12
function Success() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000); 
  });
}

Success().then(message => {
  console.log(message);  
});
//q13
const arr4 =[1,3,7,2,4];

let largest =  arr4[0];

for (let i = 1; i <  arr4.length; i++) {
  if ( arr4[i] > largest) {
    largest =  arr4[i];
  }
}

console.log(largest); 
//q14
const sha5s = {
  name: "Alice",
  age: 25,
  city: "Wonderland"
};
console.log(Object.keys(sha5s));

//q15

let x3="the quick brown fox"
let arr6=x3.split(" ")
console.log(arr6) 


//PART 2: Essay questions :

//1-	What is the difference between forEach and for...of? When would you use each?

//For each : it’s perfect when you need to loop on an array using index and value together and also used when you don’t need to break the loop and it works on arrays only


/*For..of : it loops over  values not index and you can break and continue 
from the loop also used when you loop on an array that needs time to fetch its data from 
the database as it waits for the data till it arrives and then push it to the array for
 each can’t do that as it skips if the data is not there and it doesn’t wait for it */



 /*2-what is hoisting and what is the Temporal dead zone ? explain with examples .
Hoisting is when you  type a code and then run it , it goes to state of variable creation in which all the variables being created is going to be initialized FOR EXAMPLE : 
CONSOLE.LOG(X);
VAR X=10;

It does this :
Var x; hoisted
Console.log(x); undefined
X=10;
And this is in the case of using var but if we used let or const it doesn’t do the hoisting effect to them so if and variable that is being initialized using let and const is being used before there initialization it will give you and reference error and this is what we call a temporal dead zone as any thing being called there will give you an error as let and const will never be hoisted 
*/

/* 3 – what are the main difference between == and === ? 
The double equal is used to compare the value between numbers for example while the triple equal is used to compare data type 
*/

/*
4- explain how try-catch works and why it’s important in async operations ?
Try..catch is a way  to handle errors safely in javascript 
Structure:
Try{}catch(error){}
What happens:
1-	Javascript tries to run the code inside try
2-	If everything is fine  nothing happens
3-	If an error occurs , it jumps directly to catch 
4-	Code after catch continues normally 
Try-catch is important in async operations as javascript async operations can fail in many ways 
Like api rejects ,file doesn’t exist, server returns error and without error handling , your async code my : 
Crash 
*/

/*
Q5) What’s the difference between type conversion and coercion? Provide examples of each.
In type conversion you intentionally convert a value from one type to another you do it yourself 
For example when you convert from string to number :
Number(“123”) -> 123
But in type coercion javascript automatically converts the type behind the scenes you don’t explicitly ask for it – javascript does it because of an operator
 For example:
“5”-1 so the answer will be 4 as the string “5” is coerced into number 
Another example:
let age = "20";
let realAge = age * 1;   // "20" is coerced into 20
*/