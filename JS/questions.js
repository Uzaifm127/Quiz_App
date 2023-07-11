const questions = [
  {
    question: `Which of the following statements about JavaScript is true?`,
    options: [
      `JavaScript is a compiled language.`,
      `JavaScript is an interpreted language.`,
      `JavaScript can be used for both front-end and back-end development.`,
      `JavaScript is a statically typed language.`,
    ],
    correct: [1, 2],
  },
  {
    question: `What will be the output of the following code?\n\nconst a = [1, 2, 3];\na[5] = 6;\nconsole.log(a.length);`,
    options: ["3", "6", "5", "undefined"],
    correct: [1],
  },
  {
    question: `Which of the following correctly creates a new object in JavaScript?`,
    options: [
      `const obj = new Object();`,
      `const obj = {};`,
      `const obj = Object.create(null);`,
      `const obj = Object.prototype;`,
    ],
    correct: [0, 1, 2],
  },
  {
    question: `Which of the following are valid ways to access the value of the property "name" in the object "person"?`,
    options: [
      `person.name`,
      `person["name"]`,
      `person.getName()`,
      `person[name]`,
    ],
    correct: [0, 1],
  },
  {
    question: `What is the difference between null and undefined in JavaScript?`,
    options: [
      `null represents the intentional absence of any object value.`,
      `undefined represents the absence of a declared variable.`,
      `null is a primitive value, while undefined is an object.`,
      `null is automatically assigned to uninitialized variables.`,
    ],
    correct: [0, 1],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log(1 + "2" - 1);`,
    options: [`"12"`, `"21"`, `2`, `NaN`],
    correct: [3],
  },
  {
    question: `Which of the following are valid ways to define a function in JavaScript?`,
    options: [
      `function myFunction() { }`,
      `const myFunction = function() { };`,
      `const myFunction = () => { };`,
      `const myFunction = new Function();`,
    ],
    correct: [0, 1, 2],
  },
  {
    question: `What is the purpose of the let keyword in JavaScript?`,
    options: [
      `To declare a block-scoped variable.`,
      `To declare a globally scoped variable.`,
      `To declare a constant variable.`,
      `To declare a variable with function scope.`,
    ],
    correct: [0],
  },
  {
    question: `What will be the output of the following code?\n\nconst x = 10;\nfunction foo() {\n  console.log(x);\n  const x = 20;\n}\nfoo();`,
    options: [`10`, `20`, `undefined`, `ReferenceError: x is not defined`],
    correct: [3],
  },
  {
    question: `Which of the following methods can be used to add an element to the beginning of an array?`,
    options: [
      `arr.push(1);`,
      `arr.unshift(1);`,
      `arr.splice(0, 0, 1);`,
      `arr.concat(1);`,
    ],
    correct: [1],
  },
  {
    question: `Which of the following is not a valid method for iterating over an array in JavaScript?`,
    options: [`for...of`, `forEach`, `for...in`, `map`],
    correct: [2],
  },
  {
    question: `What is the value of .this inside an arrow function in JavaScript?`,
    options: [
      `It refers to the enclosing function.`,
      `It refers to the global object.`,
      `It refers to the object on which the arrow function is called.`,
      `It does not have its own this value.`,
    ],
    correct: [3],
  },
  {
    question: `What will be the output of the following code?\n\nconst x = 10;\nfunction outer() {\n  const x = 2;\n  function inner() {\n    console.log(x);\n  }\n  inner();\n}\nouter();`,
    options: [`10`, `2`, `undefined`, `ReferenceError: x is not defined`],
    correct: [3],
  },
  {
    question: `What does the reduce method do in JavaScript?`,
    options: [
      `It applies a function against an accumulator and each element in an array, reducing it to a single value.`,
      `It creates a new array by applying a function to every element in an existing array.`,
      `It removes elements from an array based on a specified condition.`,
      `It sorts the elements of an array in ascending order.`,
    ],
    correct: [0],
  },
  {
    question: `Which of the following are valid ways to create a new array by filtering elements from an existing array?`,
    options: [
      `const filteredArray = array.filter(item => item > 5);`,
      `const filteredArray = array.reduce((acc, item) => { if (item > 5) acc.push(item); return acc; }, []);`,
      `const filteredArray = array.map(item => item > 5);`,
      `const filteredArray = array.slice().filter(item => item > 5);`,
    ],
    correct: [0, 3],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log(2 + 3 + "4");`,
    options: [`"54"`, `"234"`, `"5"`, `NaN`],
    correct: [1],
  },
  {
    question: `What is the purpose of the fetch function in JavaScript?`,
    options: [
      `To retrieve and send data over HTTP.`,
      `To manipulate the DOM.`,
      `To add event listeners to elements.`,
      `To create animations on a web page.`,
    ],
    correct: [0],
  },
  {
    question: `Which of the following are valid methods to handle asynchronous operations in JavaScript?`,
    options: [`Promises`, `Callbacks`, `Async/await`, `Observables`],
    correct: [0, 1, 2],
  },
  {
    question: `What is the purpose of the event.target property in JavaScript?`,
    options: [
      `It refers to the parent element of the current event target.`,
      `It refers to the first child element of the current event target.`,
      `It refers to the element on which the event was originally triggered.`,
      `It refers to the document object.`,
    ],
    correct: [2],
  },
  {
    question: `What is the purpose of the localStorage object in JavaScript?`,
    options: [
      `To store data on the server.`,
      `To store data in the browser's local storage.`,
      `To handle network requests.`,
      `To store data in cookies.`,
    ],
    correct: [1],
  },
  {
    question: `Which of the following methods are used to manipulate the DOM in JavaScript?`,
    options: [`getElementById`, `createElement`, `appendChild`, `console.log`],
    correct: [0, 1, 2],
  },
  {
    question: `What is the purpose of the window.addEventListener method in JavaScript?`,
    options: [
      `To listen for events triggered on the entire window object.`,
      `To add event listeners to individual elements in the DOM.`,
      `To manipulate the size and position of the browser window.`,
      `To change the URL of the current window.`,
    ],
    correct: [0],
  },
  {
    question: `Which of the following methods can be used to remove an event listener in JavaScript?`,
    options: [
      `element.removeEventListener(eventName, handler);`,
      `element.off(eventName, handler);`,
      `element.detachEvent(eventName, handler);`,
      `element.removeEvent(eventName, handler);`,
    ],
    correct: [0],
  },
  {
    question: `What will be the output of the following code?\n\nconst x = 1;\nfunction outer() {\n  const x = 2;\n  function inner() {\n    console.log(x);\n  }\n  inner();\n}\nouter();`,
    options: [`1`, `2`, `undefined`, `ReferenceError: x is not defined`],
    correct: [0],
  },
  {
    question: `Which of the following methods are used to convert a string to a number in JavaScript?`,
    options: [
      `Number("42")`,
      `parseInt("42")`,
      `parseFloat("42.5")`,
      `Math.parse("42")`,
    ],
    correct: [0, 1, 2],
  },
  {
    question: `What is the purpose of the Symbol data type in JavaScript?`,
    options: [
      `To represent unique values and prevent property name collisions.`,
      `To create immutable strings.`,
      `To generate random numbers.`,
      `To handle mathematical calculations.`,
    ],
    correct: [0],
  },
  {
    question: `Which of the following are valid JavaScript design patterns?`,
    options: [`Singleton`, `Observer`, `Facade`, `Switch`],
    correct: [0, 1, 2],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log(typeof typeof 42);`,
    options: [`"number"`, `"string"`, `"object"`, `"undefined"`],
    correct: [1],
  },
  {
    question: `Which of the following are valid array methods in JavaScript?`,
    options: [`map`, `reduce`, `filter`, `sort`],
    correct: [0, 1, 2],
  },
  {
    question: `What is the purpose of the setTimeout function in JavaScript?`,
    options: [
      `To pause the execution of a script for a specified time.`,
      `To execute a function after a specified delay.`,
      `To check if a value is null or undefined.`,
      `To bind a function to a specific context.`,
    ],
    correct: [1],
  },
  {
    question: `Which of the following are valid ways to create a new array by mapping elements from an existing array?`,
    options: [
      `const newArray = array.map(item => item * 2);`,
      `const newArray = array.reduce((acc, item) => { acc.push(item * 2); return acc; }, []);`,
      `const newArray = array.filter(item => item * 2);`,
      `const newArray = array.slice().map(item => item * 2);`,
    ],
    correct: [0, 3],
  },
  {
    question: `What is the purpose of the Symbol.iterator method in JavaScript?`,
    options: [
      `To convert an object to a string representation.`,
      `To iterate over the properties of an object.`,
      `To generate random numbers.`,
      `To make an object iterable and able to be used in a for...of loop.`,
    ],
    correct: [3],
  },
  {
    question: `Which of the following are valid ways to create a copy of an array in JavaScript?`,
    options: [
      `const copy = array.slice();`,
      `const copy = [...array];`,
      `const copy = Array.from(array);`,
      `const copy = array.copy();`,
    ],
    correct: [0, 1, 2],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log([] + {});`,
    options: [`"[object Object]"`, `"{}"`, `"[]"`, `"undefined"`],
    correct: [0],
  },
  {
    question: `What is the purpose of the Array.isArray function in JavaScript?`,
    options: [
      `To check if a value is an array.`,
      `To convert an array to a string.`,
      `To remove elements from an array.`,
      `To reverse the order of elements in an array.`,
    ],
    correct: [0],
  },
  {
    question: `Which of the following methods can be used to clone an object in JavaScript?`,
    options: [
      `const clone = Object.assign({}, original);`,
      `const clone = { ...original };`,
      `const clone = JSON.parse(JSON.stringify(original));`,
      `const clone = Object.create(original);`,
    ],
    correct: [0, 1, 2],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log(typeof null);`,
    options: [`"object"`, `"null"`, `"undefined"`, `"number"`],
    correct: [0],
  },
  {
    question: `Which of the following are valid ways to convert a number to a string in JavaScript?`,
    options: [`String(42)`, `42.toString()`, `"" + 42`, `Number.toString(42)`],
    correct: [0, 1, 2],
  },
  {
    question: `What is the purpose of the startsWith method in JavaScript?`,
    options: [
      `To check if a string starts with a specified character or substring.`,
      `To remove leading whitespace from a string.`,
      `To convert a string to uppercase.`,
      `To split a string into an array of substrings.`,
    ],
    correct: [0],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log(2 ** 3);`,
    options: [`2`, `3`, `8`, `6`],
    correct: [2],
  },
  {
    question: `Which of the following are valid ways to iterate over the keys of an object in JavaScript?`,
    options: [`for...in`, `Object.keys`, `Object.entries`, `Object.values`],
    correct: [0, 1],
  },
  {
    question: `What is the purpose of the event.stopPropagation method in JavaScript?`,
    options: [
      `To prevent the default behavior of an event.`,
      `Tostop the propagation of an event to parent elements.`,
      `To attach an event listener to an element.`,
      `To remove an event listener from an element.`,
    ],
    correct: [1],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log([1, 2, 3, 4].reduce((acc, val) => acc + val, 10));`,
    options: [`10`, `20`, `30`, `40`],
    correct: [2],
  },
  {
    question: `Which of the following methods can be used to remove an element from an array in JavaScript?`,
    options: [
      `array.splice(index, 1);`,
      `array.pop();`,
      `array.shift();`,
      `array.remove(index);`,
    ],
    correct: [0, 1],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log(+"42");`,
    options: [`"42"`, `42`, `NaN`, `TypeError`],
    correct: [1],
  },
  {
    question: `What is the purpose of the Array.from function in JavaScript?`,
    options: [
      `To convert an array-like object or iterable into an array.`,
      `To filter the elements of an array based on a condition.`,
      `To add elements to the beginning of an array.`,
      `To sort the elements of an array in descending order.`,
    ],
    correct: [0],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log([] == ![]);`,
    options: [`true`, `false`, `TypeError`, `undefined`],
    correct: [0],
  },
  {
    question: `What is the purpose of the Object.entries method in JavaScript?`,
    options: [
      `To iterate over the keys of an object.`,
      `To iterate over the values of an object.`,
      `To convert an object to an array of key-value pairs.`,
      `To check if an object has a specific property.`,
    ],
    correct: [2],
  },
  {
    question: `What will be the output of the following code?\n\nconsole.log(typeof (() => {}));`,
    options: [`"object"`, `"function"`, `"undefined"`, `"symbol"`],
    correct: [1],
  },
  {
    question: `Which of the following methods can be used to merge two or more arrays in JavaScript?`,
    options: [
      `array.concat(otherArray)`,
      `array.push(...otherArray)`,
      `array.splice(array.length, 0, ...otherArray)`,
      `All of the above`,
    ],
    correct: [3],
  },
];

export default questions;

