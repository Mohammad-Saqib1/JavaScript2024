console.log("Array Destructuring");


let biodata=['Saqib',23,'Male'];

let name1=biodata[0];
let age1=biodata[1];
let  gender1=biodata[2];

console.log(name1); // Saqib
console.log(age1);
console.log(gender1);

console.log(biodata);

let  [name,age,gender,country="India"]=biodata;
console.log(name); // Saqib
console.log(age);// 23
console.log(gender) // Male
console.log(country) // Male

console.log(biodata);