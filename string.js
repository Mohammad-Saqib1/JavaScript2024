const str = "Hello,    World!";
console.log(str.length);

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

let text = "My name is 'Thapa Technical' & I am a Full Stack Developer. ";
let text1 =
  "My name is ' Thapa Technical ' & \\ I am a \"Full Stack \" Developer. ";
let text2 = 'My name is " Thapa Technical " & I am a Full Stack Developer. ';
console.log(text);

// * String Search Methods
let text3 = "Vinod Thapa";
console.log(text.indexOf("thapa"));
// The indexOf() method is case sensitive.
console.log(text.indexOf("Thapa"));

let strArr = Array.from(text);
console.log(strArr);
let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
console.log(strMap);

let text5= "Hello JavaScript, welcome to our world best JavaScript course";
let index = text.indexOf("JavaScript");
let index2 = text.lastIndexOf("JavaScript");
let index3= text.lastIndexOf("JavaScript", 40);
console.log(index);

let text6 = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.search(/Javascript/i);
console.log(result);


//? match() : Returns an array of the matched values or null if no match is found.

let text7 = "Hello JavaScript, welcome to our world best JavaScript course";
let result1 = text.match("Javascript");
let result2 = text.match("JavaScript");
//todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
let result3 = text.match(/Javascript/gi);

// console.log(result);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = text.matchAll("javascript");
// let matchResult = text.matchAll("JavaScript");
//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end


//? includes(): Returns true if the string contains the specified value, and false otherwise.
let text8 = "Hello JavaScript, welcome to our world best JavaScript course";
let includeResult = text.includes(/java/i);
let includeResult1 = text.includes("J");
console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:

/*
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.startsWith("Helcome");
let result = text.startsWith("Hello");
console.log(result);

*/

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);
// subString() substring()

// substring(indexStart, indexEnd)
//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// console.log(result);

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "Vinod");
// let result = text.replaceAll("JavaScript", "Vinod");

// console.log(result);

/*
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.charAt(6);
let result = text.charAt(-6);
console.log(result);
*/

/*
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.charCodeAt(6);
console.log(result);
*/


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "vinod");
// console.log(replacedString);

/*
//! Other Useful Methods:
? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
const str = "JavaScript";
console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
const str = "   Hello, World!   ";
console.log(str.length);

// let trimStr = str.trim();
console.log(trimStr);
console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter.
const str = "apple,orange,banana";
let strArr = str.split(",").reverse().join();
console.log(strArr);
*/