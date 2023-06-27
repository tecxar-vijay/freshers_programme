// (1)  ==>
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer



// (2) ===>
// Check if a day is weekend day or a working day. Your script will take day as an input.

// const inp = prompt("What is the day today ?")
// const checkDay = (inp) =>{
//     let day = inp
//     if (inp === "saturday" || inp === "sunday") {
//         alert(`${day} is a weakend`)
//     }else{
//         alert(`${day} is working day`)
//     }
// }
// checkDay(inp)


// (3) ===>
// Write a program which tells the number of days in a month.

// const month = prompt("Enter the month to check the days")
// const checkMonthDays = () =>{
//    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     alert( `${month} has 31 days`)
//    }else{
//     alert( `${month} has 30 days`)
//    }
// }
// checkMonthDays(month)

const array = [5,2,2,,5,1,6,8,7,9,10]
const ar = []
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
        if (i == j) {
            continue;
        }else{
            ar.push(i)
        }
    }
}
console.log(ar );