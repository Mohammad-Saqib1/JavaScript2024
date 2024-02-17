console.log("Special # loops");


// 1. For In -> It gives only Index of each value in array

const colors=['Red','Green','Blue','White','Yellow'];

for(let color in colors){
    console.log(color)
}



// 2. For Of -> It gives only value of each index in array
for(let color of colors){
    console.log(color)
}


// 3 . ForEach -> It gives both index and value

colors.forEach((element,index)=>{
    console.log(`The ValueOf ${element} is IndexOf ${index}`)
});


const numbers=[10,20,30,40,50];

numbers.forEach((element,index)=>{
    console.log(element,index);
})