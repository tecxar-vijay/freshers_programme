

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



// reverse the array without using the inbuild methods
const ar = [5,6,3,4,2,10]

const reverseFunc = (arr) =>{
    const otput = []
    while (arr.length) {
        otput.push(arr.pop())
    }
    return otput
}
// console.log( reverseFunc(ar));   

const addOdds = (arr) => {
  const res = arr.filter(elem => elem % 2 == 0)                                                                             
  return res
}
console.log(addOdds([5,10,2,8,12,3])); 

// random id generator
const generateId = (yourNum) =>{
    const possible = "abcdefghijklmnopqrsuvwxyz"
     let text  =""
     for(var i = 0 ;i < yourNum ; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length))
     }
   return text
}
// console.log(generateId(15)); 


const ar2 =[1,2,3,4,5,6,7]
const modifyArray  = (arr) =>{
     arr.splice(4,1,"fifth")
    console.log(ar2);
}
// console.log(modifyArray(ar2));

const getAverage = (arr) =>{
    const avg = arr.reduce((a,b) => a + b,0) / arr.length
    return avg
}
// console.log(getAverage([1,2,3,4,5,6,7]));

const getArryOfSeven = () =>{
    const nums = [1,2,3,4,5,6,7,8,9,0]
    const num = Math.floor(Math.random() * nums.length)
    return num
}
// console.log( getArryOfSeven());


/// how can we get the id number from the route on the browser addressbar

const str = "locallhost:posts/id/1"
const r = str.split("/")[2]
console.log(r);