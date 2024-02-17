console.log('Arrays Functions')

// 1. Includes

/*
const color=['Red','Green','Blue']
const IsPresent=color.includes('Blue')
console.log(IsPresent);
console.log((color.includes('White')));
*/

// 2. String Padding

/*
const message = "my name is vinod";
console.log(message);
console.log((message.padStart(18,"QI")));
console.log(message.padEnd(17,"S"));


let text = "51 21";
// text = text.padStart(6,"0");
text = text.padEnd(3,"3");
console.log(text)
*/



// #1: BigInt

let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
console.log( 9007199254740991n + 12n );
const newNum = 9007199254740991n + 12n;

console.log(newNum);
console.log(typeof(newNum));


const foo = null ?? 'default string';
console.log(foo);


console.log(2**3);