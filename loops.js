console.log("Loops");



// 1. for loop

//Jab hume pata ho rukna kaha hai
var num;

for(num=1;num<=10;num++){
    console.log(num);
   
}


// 2. while loop
// jab hume pata nahi ho rukna kaha hai
var number=11;
while(number<=20){
    console.log(number);
    number++;
}



// 3 . do-while loop

// jab hume atleast one time false condition chalana ho
var doWhileNumber=21;

do{
    console.log(doWhileNumber);
    doWhileNumber++;
}while(doWhileNumber<=30);




// print table of 5
var tableOf=5;
for(var num=1;num<=10;num++){
    console.log(tableOf+" * "+num+" = "+tableOf*num);
}