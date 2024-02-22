console.log("CallBack Function and HOF ");

//HOF -> When a function takes a function as an parameter called HOF

// CallBack Function-> When a function pass  to another function as a parameter, it is known as callback function 

const sum=(a,b)=>{
    return a+b;
}

const subs=(a,b)=>{
    return a-b;
}
const mul=(a,b)=>{
    return a*b;
}

const divi=(a,b)=>{
    return a/b;
}


const calculator=(num1,num2,operator)=>{
    return operator(num1,num2)
}

//Here calculotor is a HOF and Sum,Subs,mul and divi are callback function

console.log(calculator(5,3,sum))
console.log(calculator(5,3,subs))
console.log(calculator(5,3,mul))
console.log(calculator(5,3,divi))