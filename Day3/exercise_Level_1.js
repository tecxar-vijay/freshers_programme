
const length = 10
const width = 20
const perimOfRectangle = () =>{
   return 2 * (length + width)
}
// console.log(perimOfRectangle()); 


const distence = 50
const time = 2
const getSpeed = () =>{
   return distence / time
}
// console.log(getSpeed());


const oc = 33
const convertCelsiusToFahrenheit = (oc) =>{
     const of = oc * 9 /5 + 32
     return of
}
// console.log(convertCelsiusToFahrenheit(oc)); 


const weight = 20
const hight = 150
const checkBMI = () =>{
    const chackedBmi = weight / hight * hight
    console.log(chackedBmi);
    if (chackedBmi < 18.5) {
        alert("underWeight")
    }else if (chackedBmi > 18.5 || chackedBmi < 24.9) {
        alert("Normal weigth")
    }else if (chackedBmi > 25 || chackedBmi <29.9) {
        alert("over weight")
    }else {
        alert("obese")
    }
}
// checkBMI()
// console.log(checkBMI());

const arr = [5,2,3,4,8,1]
const findMax = (arr) =>{
   const sorted = arr.sort((a,b)=>a-b)
//    console.log(sorted);
   const max = sorted[sorted.length - 1]
//    console.log(max);
}
// console.log(findMax(arr))

const arr2 = [5,9,7,0,10]
const sorted2 = arr2.sort((a,b) => a - b)
// console.log(sorted2);
// console.log(sorted2[sorted2.length - 1] );