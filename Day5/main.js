
// console.log(countries);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const chachMedian = arr =>{
    const nums = [...arr].sort((a,b) => a-b)
    const mid = Math.floor(arr.length / 2)
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
} 
console.log(chachMedian(ages)); 

const txt3 = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const withoutPanc = txt3.split("").join("").replace(","," ")
console.log(withoutPanc);


/// 
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const newCart = shoppingCart.splice(2,1,"Green tea")
console.log(shoppingCart);

///
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = [...frontEnd,...backEnd]
// console.log(fullStack);
