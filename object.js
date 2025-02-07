console.log("============================================================")
console.log("THE OUT BUT THE OUT BUT THE OUT BUT THE OUT BUT THE OUT BUT")
console.log("============================================================")
// const myArray = [];
// const family = ['fady','wagdy','atta'];
// console.log(family);
// console.log(family[0])
// console.log(family[1])
// console.log(family[2])
// console.log(myArray)


// const book = {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     published: 1960
// };
// console.log(book['title']); // Logs: To Kill a Mockingbird


// const menu ={
//     name : "Salted Caramel Ice Cream",
//     price : 2.95,
//     ingredients : ["butter", "ice cream", "salt", "sugar"]
// };
////////////////////////////////////////////
// function alertThenReturn() {
//     console.log('Message 1!'); // Use console.log instead of alert
  
//     return function () {
//       console.log('Message 2!'); // Use console.log instead of alert
//     };
//   }
  
// const innerFunction = alertThenReturn();
// innerFunction();
// alertThenReturn();
// alertThenReturn()();
///////////////////////////////////////////
// function createGreeter(timeOfDay) {
//     return function (name) {
//       console.log(`Good ${timeOfDay}, ${name}!`);
//     };
//   }
  
//   const morningGreeter = createGreeter('morning');
//   morningGreeter('Ali'); // الناتج: Good morning, Ali!
  
//   const eveningGreeter = createGreeter('evening');
//   eveningGreeter('Sara'); // الناتج: Good evening, Sara!
/////////////////////////////////////////
// function each(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i])) {
//         console.log(array[i]);
//       }
//     }
//   }
// function isPositive(n) {
//     return n = 0;
//   };
// each([-2, 7, 11, -4, -10],isPositive );
/////////////////////////////////////////////
// function logOdd(n) {
//     if (n % 2 !== 0) {
//       console.log(n);
//     }
//   }
  
//   logOdd(2);
//   // (nothing is logged)
  
//   logOdd(3);
//////////////////////////////////////////////
// function logEven(n) {
//     if (n % 2 == 0) {
//       console.log(n);
//     }
//   }
  
//   logEven(2);

  
  // logEven(3);

///////////////////////////////////////////////

// const the_number=[1, 5, 2, 4, 6, 3]
// the_number.forEach(function logIfOdd(n) {
//     if (n % 2 !== 0) {
//       console.log(n);
//     }
//   });
///////////////////////////////////////////////
// [1,2,3].forEach(console.log);
////////////////////////////////////////////// 
// function outerFunction() {
//     let num1 = 5;
  
//     return function(num2) {
//       console.log(num1 + num2);
//     };
//   }
  
//   let result = outerFunction();
  
//   result(10); 
//   console.log("negga")
   
  // ???
//   const menu ={
//     name : "Salted Caramel Ice Cream",
//     price : 2.95,
//     ingredients : ["butter", "ice cream", "salt", "sugar"]
// };
// console.log(menu.name);            // "Salted Caramel Ice Cream"
// console.log(menu.price);           // 2.95
// console.log(menu.ingredients[1]);  // "ice cream"
// console.log(menu.ingredients[0]);
/////////////////////////////////////////////
// console.log("from here")
// ////////////////////////////////////////////
// const cat = {
//   age: 2,
//   name: 'Bailey',
//   meow: function () {
//     console.log('Meow!');
//   },
//   greet: function (name) {
//     console.log(`Hello ${name}`);
//   }
// };
// console.log(cat.name)
// console.log(cat)
// cat.age += 1;
// console.log(cat)
// cat.age;
// console.log(cat)
// 3


// cat.name = 'Bambi';

// cat.name;
// 'Bambi'
// const parrot = {
//   group: 'bird',
//   feathers: true,
//   chirp: function () {
//     console.log('Chirp chirp!');
//   }
// };

// const pigeon = {
//   group: 'bird',
//   feathers: true,
//   chirp: function () {
//     console.log('Chirp chirp!');
//   }
// };
////////////////////////////////////////////////////////////////////////////
// function sayHello () {
//   console.log('Hi there!');
// }
// const developer = {
//   name: 'Andrew'
// };
// developer.sayHello = function () {
//   console.log('Hi there!');
// };
//////////////////////////////////////////////////////
// function sayHello () {
//   console.log('Hi there!');
// };
/////////////////////////////////////////////////////
// const developer = {
//   name: 'Andrew'
// };
// developer.sayHello = function () {
//   console.log('fafy');
// };
// developer.sayHello();
//////////////////////////////////////////////////////4 
// function sayHello () {
//   console.log('Hi there!');
// }
// sayHello();
////////////////////////////////////////////////////
// ///////////////////////////////////////#1#
// const developer = {
//   name: 'Andrew'
// };
// developer.sayHello = function () {
//   console.log('Hi there!');
// };
// developer.sayHello();
// console.log(developer);
// console.log(developer.name); 
// ///////////////////////////////////////#1#
// ///////////////////////////////////////#2#
// const developer_cobey={
//   name: 'Andrew',
//   sayHello: function () {
//     console.log('Hi there22!');
//   }
// }
// developer_cobey.sayHello();
// console.log(developer_cobey.name);
// ///////////////////////////////////////#2#
///////////////////////////////////////
// const developer = {
//   name: 'Andrew',
//   sayHello: function () {
//     console.log('Hi there!');
//   }
// };
// developer.sayHello();
// // 'Hi there!'
// developer['sayHello']();
// // 'Hi there!'
///////////////////////////////////////
// const developer = {
//   name: 'Andrew',
//   sayHello: function () {
//     console.log('Hi there!');
//   },
//   favoriteLanguage: function (language) {
//     console.log(`My favorite programming language is ${language}`);
//   },
//   Name: function (Name) {
//     console.log("my name is :"+Name+"and hello");
//   }
// };


// developer.favoriteLanguage('JavaScript');
// developer.Name("Fady ")
// My favorite programming language is JavaScript'
///////////////////////////////////////
// const triangle = {
//   type: 'scalene',
//   identify: function () {
//     console.log(`This is a ${this.type} triangle.`);
//   }
// };
// triangle.identify();
///////////////////////////////////////
// const tree = {
//   type: 'redwood',
//   leaves: 'green',
//   height: 80,
//   age: 15,
//   growOneFoot: function () {
//     this.height += 1;
//   }
// };
///////////////////////////////////////
// const chameleon = {
//   color: 'green', // Initial color set to 'green'
//   changeColor: function () {
//     // Change color logic
//     this.color = this.color === 'green' ? 'pink' : 'green';
//     // this.color = this.color === 'green' ? 'pink' : this.color === 'blue' ? 'green' : 'red';

//   }
// };

// // Example usage:
// console.log(chameleon.color); // Output: green
// chameleon.changeColor();
// console.log(chameleon.color); // Output: pink
// chameleon.changeColor();
// console.log(chameleon.color); // Output: green
// chameleon.changeColor();
// // console.log(chameleon.color); // Output: green
// // chameleon.changeColor();
// // console.log(chameleon.color); // Output: green
// // chameleon.changeColor();
// // console.log(chameleon.color); // Output: green
///////////////////////////////////////
// const chameleon = {
//   eyes: 2,
//   lookAround: function () {
//      console.log(`I see you with my ${this.eyes} eyes!`);
//   }
// };

// chameleon.lookAround();
// 'I see you with my 2 eyes!'
///////////////////////////////////////
// const chameleon = {
//   eyes: 2,
//   lookAround: function () {
//      console.log(`I see you with my ${this.eyes} eyes!`);
//   },
//   Around: function () {
//     console.log(`I see you with my ${this.eyes} eyes!`);
//   }
// };
// chameleon.Around();

// chameleon.lookAround();
///////////////////////////////////////
// function whoThis () {
//   this.trickyish = true
// }

// whoThis();
///////////////////////////////////////
// const chameleon = {
//   eyes: 2,
//   lookAround: function () {
//      console.log(`I see you with my ${this.eyes} eyes!`);
//   }
// };
// chameleon.lookAround();
///////////////////////////////////////
// const car = {
//   numberOfDoors: 4,
//   drive: function () {
//      console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
//   }
// };

// const letsRoll = car.drive;

// letsRoll();
//////////////////////////////////////
// const car = {
//   numberOfDoors: 4,
//   drive: () => {
//     console.log(`Get in one of the ${car.numberOfDoors} doors, and let's go!`);
//   }
// };

// const letsRoll = car.drive;
// letsRoll(); // Output: "Get in one of the 4 doors, and let's go
///////////////////////////////////////////
// let counter = 1;

// function addDivToHeader () {
//   const newDiv = document.createElement('div');
//   newDiv.textContent = 'div number ' + counter;

//   counter = counter + 1;

//   const headerSection = document.querySelector('header');
//   headerSection.appendChild(newDiv)
// }

// function addDivToFooter() {
//   const newDiv = document.createElement('div');
//   newDiv.textContent = 'div number ' + counter;

//   counter = counter + 1;

//   const headerSection = document.querySelector('footer');
//   headerSection.appendChild(newDiv)
// }
//////////////////////////////////////////
// function greet() {
//   console.log('Functions are cool!');
// }
// greet();
///////////////////////////////////////////////////////////
// function alertThenReturn(the_number_of_the_massage1) {
//   alert(`its the ${the_number_of_the_massage1}`);

//   return function (the_number_of_the_massage2) {
//     alert(`its the ${the_number_of_the_massage2}`);
//   };
// }
// const innerFunction = alertThenReturn("in the big one");
// innerFunction("in the small one");
// alertThenReturn("fady")("wagdy");
//////////////////////////////////////////////////////////
// function fady(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array)
//     if (callback(array[i])) {
//       console.log(array[i]);
//     }
//   }
// }
// function isPositive(n) {
//   return n > 0;
// };
// fady([-2, 7, 11, -4, -10], isPositive);
///////////////////////////////////////////////////////////
// console.log((2).length); // Outputs: 4
// console.log([-2, 7, 11, -4, -10].length)












console.log("============================================================")
console.log("THE OUT BUT THE OUT BUT THE OUT BUT THE OUT BUT THE OUT BUT")
console.log("============================================================")