console.log("Object DeStructutre");

const myBioData = {
  name: "Saqib",
  age: 23,
  country: "India",
  gender: "male",
};

console.log(myBioData);

console.log(myBioData.name);
console.log(myBioData.age);
console.log(myBioData.country);
console.log(myBioData.gender);

// let [name1,age1,country1]=myBioData; object does not iterable

/*
const myBio = {
        [myName] : "hello how are you?",
        [20 + 6] : "is my age"
      };
    
console.log(myBio[myName]); // output - hello how are you?
*/ //Not Working

// console.log(myBio);

let myName = "vinod thapa";
let myAge = 26;

const myBio = { myName, myAge };

console.log(myBio);
console.log(myBio.myAge);
