

console.log("functions");

/*
// function definition
function sum(){
    var a=5;
    var b=10;

    console.log(a+b);
}

// function call
sum();


function returnvalueOfSum(){
    var a=10;
    var b=30;
    return a+b;
}


console.log(returnvalueOfSum());
console.log(returnvalueOfSum);// Print only function name


function passParameterOfSum(a,b){// a and b are parameters
    console.log(a+b);
}

passParameterOfSum(100,50);//these are actual arguments
passParameterOfSum(100,20);


function passParameterAndReturnValueOfSum(a,b){
    return a+b;
}

var ans=passParameterAndReturnValueOfSum(30,20);
console.log(ans);




// Anonymous Function

var exp=function(a,b){
    return a+b;
}

console.log("Anonymous Function "+exp(30,20));


*/

//  let ,var and const

/*
var name="Saqib";
console.log(name);

name="Ansari";
console.log(name);
*/

/*
const name1="Sonu";
console.log(name1);

name1="Alam";
console.log(name1);
*/

/*
let name2="faizan";
console.log(name2);

name2="Ansari";
console.log(name2);


var age=20;
var valueChange=function(){
    age=30;
    
}

valueChange();
console.log(age);

var someFunc=function(){
    {

    const value=50;
    var some=123;
    let number=20;

        
    if(number>=10){
        number=30;
        console.log(number);
    }else{
        number=200;
        console.log(number);
    }

    console.log(value);
    console.log(number);
    console.log(some);
}

console.log(some);
// console.log(value);let and const are block elements we can access them only in the own block
// console.log(number)
}


someFunc();
*/



// Default Parameters


function addDefault(a=2,b=5){
    return a+b;
}

console.log(addDefault(5));

