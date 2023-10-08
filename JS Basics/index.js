// JS is an interpreted language, 
// so it usually does not have a compiler. 
// JS is interpreted by the browsers which have their own
//  'JavaScript Engines'. However, in the recent times, 
//  JS engines have become compilers. For example, 
// Google's V8 engine(the JS engine on which server-side JavaScript - NODE.

let name = "Shadab";
let myStatement = `my name is ${name}`;
console.log(`Here is my statment : ${myStatement}`);

// ___________________________
// String

let s = "My name is Shadab";
console.log(s);
console.log(s[0]);
console.log(s[3]);
console.log(s.indexOf("S"));
console.log(s.indexOf("Shadab"));
console.log(s.length);
console.log(s.charAt(13));
console.log(s.endsWith("ab"));
console.log(s.endsWith("z"));
console.log(s.includes("Shadab"));
console.log(s.includes("Khan"));
console.log(s.substring(3,11));
console.log(s.slice(0,4));
console.log(s.split(" "));  
console.log(s.replace("Shadab","Khan"));
console.log(s);
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(3,4));
console.log(s.substr(3,4)); //start from 3 and gives length 4


//DOM
var str = document.getElementById("myHeading").innerText=s;
//or
var str  = document.getElementById("myHeading");
str.style.backgroundColor="red";
str.style.color="white";
str.innerText = s ;




//____________________
// if / else if

let icecream=Number(prompt("Enter a Number"));
console.log(typeof icecream);
if(icecream===30){
   console.log("Ice-Cream is Blue, Lagoon");
}else{
    console.log("Ice-Cream is Cone");
}

let ans  = prompt("Type a Number")
console.log(ans);
console.log("12"==ans);
console.log("12"===ans);





//____________________
// Increment 
let i =10;
console.log(i++); // post increment
console.log(i);
console.log(++i); // pre increment






//____________________
// Switch

//  icecream=Number(prompt("Enter a Number"));
switch (icecream) {
    case 10:
        console.log("Ice-Cream is Blue, Lagoon");
        break;

    case 30:
        console.log("Ice-Cream is Cone");
        break;

    default:
        console.log("Ice-Cream is Random");
        break;
}
//without break it will print all three console,
//so always use break in Switch





//  _____LOOP____________________




//____________________
// for Loop

for(let i=0; i<10; i=i+1){
    console.log(Math.random());
    console.log("Hi");
    console.log("I subscribed")
}


//____________________
// while Loop
let j=0;
while(j<10){
    console.log("Hello");
    j++;
}





// ____________________________________________________________________
// ARRAY

let arr0 = [12, ,33,44,10];
let arr1 = [12,"Khan"];
let arr2 = ["Shadab", "Khan"];

console.log(arr0);
console.log(arr1);
console.log(arr2);

console.log(arr0[3]);
console.log(arr1[1]);
console.log(arr2[0]);


// new Array
let arr3=new Array(4);
console.log(arr3);
arr3=new Array(2,4,6,7);
console.log(arr3);
arr3[7]=2;
console.log(arr3[7]);



// push and pop in array
// push : add at the end
// pop : remove at the end

arr3.push(99);
arr3.push(99);
console.log(arr3.pop());
console.log(arr3);

// Shift : remove from the first
console.log(arr3.shift());
console.log(arr3);

// Unshift : add in the beigining
arr3.unshift(44);
console.log(arr3);


// //To Array type Case
// const arr = Array.from(arr);


// splice : spit out a part of the array and update the same array

let arr4 = [1,2,3,4,5,6,7,8,9,11];
console.log(arr4);
arr4.splice(2,3);  //  ( start index , number of element to delete)
console.log(arr4);
arr4.splice(2,3, "deleted"); 
console.log(arr4);

// reverse : reverse the array
arr4.reverse();
console.log(arr4);
arr4[0]=1000;
console.log(arr4);





//slice : returns a new copy , (DO NOT update the same array);

let arr5 = [10,20,30,40,50,60,70,80,90,110];
let newArr = arr5.slice(1,4); 
console.log(arr5); // no change in the actual array i.e., arr5
console.log(newArr);


// includes method , similar to string , it checks for some 
// value present in array or not return true/false accordinly

console.log(newArr.includes(60));
console.log(newArr.includes(20));


// Update array using for loop
let arr6=[];
for(let i=0; i<15 ; i++){
    arr6[i]=i+5;
}
arr6[3]="Ahmad"
console.log(arr6);


// Array using Const variable
const arr7=[];
arr7[0]=10;
arr7[1]=20;
arr7[2]=30;
arr7[3]=40;
arr7[2]=0;
console.log(arr7 + " it is not giving error on changing the const arr value");
console.log( "Because we are not changing the array we are changing its value only")

//if we do like this
//  arr7=new Array();

// // or
//  arr7= 10;
 // // or
//  arr7 ="Hello";
 // it will give error
//  index.js:234 Uncaught TypeError: Assignment to constant variable.
//     at index.js:234:6





// // ____________________________________________________________________
// // OBJECTS

const obj = {
 // Key : "value",
    Name : "Shadab",
    sur_Name: "Khan",
    age : 23,
    male : true
}
console.log(obj);
// to access value of some key
console.log(obj.Name);
console.log(obj.male);
console.log(obj.age);

// we can add new keys and value and update the object
obj.newData = "Beta";
obj.address = "nakko malum"
console.log(obj);


// Array is also a type of Object, in array we just need to take care of
// Key / index
const obj_Arr = {
    0 : "Shadab",
    1: "Khan",
    2 : 23,
    3 : true
}

console.log(obj_Arr[0]);





// ____________________________________________________________________
// Functions

function printTheValue(){
    let result =(23*10 + 23*10 + 23*10)/10;
    console.log(result);
    result = result * 2 * 10;
    console.log(result);
    result = result / 2;
    console.log(result);
}

printTheValue(); //fun invoke


// ___passing paramenter to the funciton___

function printTheValue1(a,b,c){
    let result =(a*10 + b*10 + c*10)/10;
    console.log(result);
    result = result * 2 * 10;
    console.log(result);
    result = result / 2;
    console.log(result);
}

printTheValue1(2,4,5); //fun invoke


//___passing paramenter to the funciton___
//____________DEFAULT Parameter____________
function printTheValue2(a,b,c=0){    // c = 0 is a default paramenter
    let result =(a*10 + b*10 + c*10)/10;
    console.log(result);
}

printTheValue2(2,4); // Here No parameter is passed so c will be 0


//Defualt parameter
// here all a , b and c has default parameter 1
function printTheValue3(a=1,b=1,c=1){  
    let result =(a*10 + b*10 + c*10)/10;
    console.log(result);
}

printTheValue3(); // Here No parameter is passed so c will be 0


let x = 20;
let y = 20;
let z = 20;
function printTheValue4(){
    let result = (x * 10 + y * 20 + z * 30)/10;
    console.log(result);
}
printTheValue4();          
printTheValue4(40,50,90);  
// Both of these line will result the same , 
// becasue the  printTheValue4() is taking no paramenter from the fun, so 
// it will take a , b and c from the top


//________Anonymus fucntion : __________
//Anonymus fucntion : removing function name makes Anonymus function
//we can store Anonymus fucntion is some varible
 let func1  = function(a=10,b=15,c=12){  
    let result =(a*10 + b*10 + c*10)/10;
    console.log(result);
}
func1(10,45,45);


 //  __________ Return Funciton __________
let func  = function(a=10,b=15,c=12){  
    let result =(a*10 + b*10 + c*10)/10;
    // console.log(result);
    return result;
}
let ans1  = func(10,45,45);
// console.log(ans1);



function intro(college, name = "Crime Master Gogo "){
    console.log(`Helo my name is ${name} , and i am from ${college}`);
    console.log(func(10,10,10));
    console.log(`My income is $ ${func()}`) //can call funcion inside fun
}
intro("I.T.S Engineering College");




// Sum of Array
function sumArr(arr=[]){
    let sum=0;
    for(let i=0; i<arr.length ; i++){
        sum+=arr[i];
    }
    return sum;
}

let arrNew = [10,30,40,15];
console.log(sumArr(arrNew));



// _______ SCOPING __________
// var : gloabl sope
// let : block level / local scope ,  varible it is

let a = 20;
{ 
    // these parameters are limited to this scope only
    // outside the { } it will not be accesible
    let a =30;
    let b = 100; // this let will not be accesible outside this scope
    var c = 45; // it can be accessed outside this scope
    console.log(b);
    console.log(a);
}
// console.log(b); //it will give - Uncaught ReferenceError: b is not defined
console.log(a);
console.log(c);










//____________________________________________________________
// DOM Manipulation

// It is used to manipulate the HTML texts
// console.log(document.boyd); // to get the body of HTML
// console.log(document.head); // to get the head of HTML
// console.log(document.documentElement); // to get complete HTML

console.log(document.body.firstChild);         // #text
console.log(document.body.firstElementChild);  // <h1>Hi!</h1>
console.log(document.body.children); //LCollection(6) [h1, h1, h1, h1, script, script]

// TO get some tag by its id
// Two ways , both does the same job
console.log(how_id);                            //<h1 id="how_id">how</h1>
console.log(document.getElementById("how_id")); //<h1 id="how_id">how</h1>


//getElementsByClassName
console.log(document.getElementsByClassName("you_class")); //HTMLCollection [h1.you_class]

// if we pass two div same class 
// we will get two HTMLCollections(2)
// like  ::   HTMLCollection(2) [h1.you_class, h1.you_class]


//to get 1 out of them
const thisOne = document.getElementsByClassName("you_class");
console.log(thisOne[0]);  // <h1 class="you_class">you</h1>
console.log(thisOne[1]);  // <h1 class="you_class">doing</h1>

// getElementsByName
console.log(document.getElementsByName("email"));   //NodeList [input]
const temp = document.getElementsByName("email");
console.log(temp[0]);  //<input type="text" name="email"></input>

//getElementsByTagName
const this_one = document.getElementsByTagName("span");
console.log(this_one);
this_one[0].textContent="New_content"; // update the span content
console.log(this_one);
this_one[0].innerText="Again"; // update the span content

//innerHTML : to write HTML from JS using DOM
this_one[0].innerHTML=`<span class="myClass">Nice One </span>`; // update the span content


// style ::  TO APPLY STYLE or TO APPLY THE CSS TO THE HTML
this_one[0].style.backgroundColor="green"
this_one[0].style.font="100 1.5rem 'Roboto' "


const myBtn = document.getElementById("myBtn");
myBtn.style.background="blue";
myBtn.style.color="#fff";
myBtn.style.border="#none";
myBtn.style.padding="#2vmax 4vmax";
myBtn.style.cursor="pointer";


//getAttribute
console.log(myBtn.getAttribute("id"));
console.log(myBtn.getAttribute("class"));

//setAttribute
myBtn.setAttribute("class","newClass");

myBtn.onclick = bringMeHeading;

// //Create New Element like   <h1> Hii! </h1>   using DOM manipulation
// const h2 = document.createElement("h2");

// //append at the bottom 
// document.body.append(h2);

////prepend at the top 
// document.body.prepend(h2);
// h2.innerText="What is up? , ";

////createTextNode
// const myText = document.createTextNode(" Hey! this is a sample text");
// h2.append(myText);

 //Make the change when called , ONLY
//to run the DOM at an specific event only


function bringMeHeading(){
    const h2 = document.createElement("h2");
    h2.innerText="What is up? ,  this is a sample text ";
    document.body.prepend(h2);    
}
// bringMeHeading(); 


















//_____________________________________________________

//#7 ADVANCE array methods in javascript, JavaScript

// Arrow Function


// it is similar to the anonymus function
// like

let func_ = function(a,b){
    console.log(a+b);
}
func_(5,4);  //9

// removing funcion and adding => changes the anonymys function to 
//arrow Function
let func_1 = (a,b) => {
    console.log(a+b);
}
func_1(5,4); //9

//Arrays default syntex has Arrow funcion, so we will use 
// arrow function only

const arr = [2, 4, 6, 8, 10];
console.log(arr);


//1st ways
const myFunc2=(value,index)=>{
    if(value==6){
        console.log("Yes! 6 exists")
    }
};
arr.find(myFunc2);


// arrow funcitons cannot be accessed before declear 
// means first create the func and then call it in the later lines
// at the same time , anonymus funciton can call it

// it can also be writen as 

// or
// Find Method
//2nd ways
arr.find((value,index)=>{
    if(value==6){
        console.log("Yes! 6 exists")
    }
});



// To print all the vlaues of the array
arr.find((value,index)=>{
  console.log(value);
});

//check value
arr.find((value,index)=>{
    if(value===8){
        console.log(value + " its Eight");
    } 
});


//print all the values greater the 4
console.log(" Print all the values Greater then 4")
arr.find((value,index)=>{
    if(value>4){
        console.log(value);
    } 
});


// const returns just first and only value
const result = arr.find((value,index)=>{
    if(value>4){
        // console.log(value);
        return value;
    } 
});
console.log(result); // 6

// filter : to get all the values we use filter
const result_filter = arr.filter((value, index)=>{
    if(value>4){
        return value;
    }
});

console.log(result_filter);  //(3) [6, 8, 10]


//arr.find // find returns single values  : used to get single value
//arr.filter // filter returs the value as array  : use to get the multiple value from the array

console.log("array.every Method");
// every Method :: arr.every
// it returns the boolean value
// it checks on all/every element
const result_every = arr.every((value,index)=>{
    // return value<4; // false
    return value<20 // true : if all the values are smalelr then 20 in arr
});

console.log(result_every);



console.log("array.some Method");
// some Method :: arr.some
// it returns the boolean value
// it checks  if anyelement satify the coditon
const result_some = arr.some((value,index)=>{
    // return value<4; // false
    return value<4 // true : if all the values are smalelr then 20 in arr
});

console.log(result_some);


// For of loop 
// for each does not return any thing
// it does not change the actual array
console.log("_______For of loop_______");
for(const element of arr){
    console.log(element);
}


console.log("_______update the value fo the array and print_______");
for(let value of arr){
    value+=3;
    console.log(value);
}


console.log("For Each loop");
arr.forEach((value,index)=>{
    console.log(value);
    console.log(index);
})

console.log("Total Sum using For each loop");
let totalSum_1=0;
arr.forEach((value,index)=>{
    totalSum_1+=value;
});
console.log(totalSum_1);


// let totalSum_2=0;
// arr.forEach((value,index)=>{
//     value+=20;
//     console.group(value);
// });
// console.log(totalSum_2);


const val1 = arr.forEach((value,index)=>{
    return value;
});
console.log(val1);



console.log("arr.map funcion");
// it will return the new array
// it also do not change anything in actual array

const ress = arr.map((value,index)=>{
     return value+30;
});
console.log(ress);  //  (5) [32, 34, 36, 38, 40]
console.log(arr);   //  (5) [2, 4, 6, 8, 10]


console.log("arr.reduce :: Method");
// reduce sum up all the value of the array
// total = zero index value
// value = first index value
// index start from 1
const resul_t = arr.reduce((total,value,index,newArr)=>{
    console.log(value);
    console.log(index);
   return total;
})
console.log(resul_t);