console.log("Date Object");

/*
var TodayDate=new Date();
var TodayDate=new Date(2021,10,11,12,12,12,12)
console.log(TodayDate)
console.log(new Date())


console.log(new Date().toLocaleDateString())//Give Actual Date Only
console.log(new Date().toString())// Give Actual date and time with timeZones
console.log(Date.now())

console.log(new Date(2021,0).toLocaleDateString())
console.log(new Date(2021,0,3).toLocaleDateString())
console.log(new Date(2021,0,3).toLocaleString())// Give Actual Date and Time

console.log(new Date("October 13 ,2023 02:30:14").toLocaleString())

console.log(new Date(86400).toLocaleString())
*/


// Date and Time Function

const curDate=new Date()
console.log(curDate.getDate())
console.log(curDate.getFullYear())
console.log(curDate.getMonth())
console.log(curDate.getDay())

console.log(curDate.getTime())
console.log(curDate.getHours())
console.log(curDate.getMinutes())
console.log(curDate.getSeconds())
console.log(curDate.getMilliseconds())


// Set Date and Time
/*
console.log(curDate.setDate(2010))
console.log(curDate.setFullYear(2011))
console.log(curDate.setMonth())

console.log(curDate.setTime(20))
console.log(curDate.setHours(13))
console.log(curDate.setMinutes(20))
console.log(curDate.setSeconds(25))
console.log(curDate.setMilliseconds(30))
*/


console.log(new Date().toLocaleTimeString())//Get Only Actual Time
console.log(new Date().toLocaleDateString())// Get Only Actual Date

console.log(new Date().toLocaleString())// Get Actual Date and Time Both
console.log(new Date().toString())// Get Actual Date and Time Both With TimeZone

// Challenge Time NOT yet decided
// setInterval(()=>{
//     console.log(new Date().toLocaleTimeString())
// },1000)


setTimeout(()=>[
    console.log(new Date().toLocaleTimeString()),
], 5000); // Run After 5 Seconds




