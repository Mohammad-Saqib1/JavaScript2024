console.log("Fat Arrow Function")

/*
const sum=()=>{
    let a=5;
    let b=10;
    return a+b;
}


console.log(sum());


const mul=()=> `The multiply of two number is ${(a=4)*(b=3)}`;

console.log(mul());



const sum1=(a,b)=>{
    return a+b;
}

console.log(sum1(3,2));


*/



// Spread operator (...ArrayName)


const Colors=['Red','Blue','Green'];
const ColorsAdd=['Red','Blue','Green','White','Yellow'];
const ColorsAddSpread=[...Colors,'White','Yellow'];

console.log(Colors)
console.log(ColorsAdd)
console.log(ColorsAddSpread)



const person = { name: 'Fred', age: 87, degree : "mcs" };
const sPerson = {...person };

console.log(person);
console.log(sPerson);