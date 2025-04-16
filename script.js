// // alert("JavaScript is cool !");

// // declaring variables 
// var firstItem = 50; // depricated, old
// let secondItem = 60; // use this if you plan to modify the value later
// const thirdItem = 70; // use this if the value is unchangable!!

// // array data
// let myArr = new Array();
// // adding new values to empty array
// myArr.push('HTML is cool', 'CSS is cool', 'JS is cool', 102);
// // console.log(myArr);

// let myArr2 = [1, 2, 'hello']; // 3 elements listed

// // get array value
// let val = myArr2[2]; // get third value by index position
// // console.log(val); // console is highly utilized to debug coding problems in js

// // objects
// let myObj = new Object(); // declared new obj
// // adding new values to empty object
// myObj['name'] = 'Peter';
// myObj['age'] = 54;
// console.log(myObj.name); 

// let myObj2 = {
//     'name': 'Bini',
//     'age': 29,
//     'email': 'myem@gmail.com'
// }; // key value paired data

// // get object item
// // let myAge = myObj2['age']; // by passing the key
// // // console.log(myAge); 
// // let myEmail = myObj2.email;
// // console.log(myEmail); 


// DOM - Document object model 
// js representation of our index.html file
// can be referenced by key word - document

// 1. search for specific element from html by ID
// let myEl = document.getElementById('title-2');
// console.log(myEl); 

// 2. search for specific element from html by Class
// let myHTMLc = document.getElementsByClassName('title-text') // returns html collection
// // let myELArr = Array.prototype.slice.call(myHTMLc); // converts to array of elements
// // console.log(myELArr); 
// let myELArr = [...myHTMLc]; // converts to array of elements
// console.log(myELArr); 


// control directives
// if...else statements, for loops, forEach loop, while loop etc

// functions - reusable codes
// function fnName(params) { your code .... }

// arrow functions - same thing but different syntax
// (params) => function {}

// async requests - if we dont know wheter the request could fail or when it is returning
// async function fnName() { val = await fn2Name() } // pauses the program until response is received

