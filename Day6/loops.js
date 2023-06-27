
let sumE = 0
let sumO = 0
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? (sumE += i) : (sumO += 1)
}
console.log(sumE,sumO);


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const reverseArray = (arr) => {
    const output = []
    for(let i = 0 ; i <= arr.length ; i++){
        output.push(arr.pop())
    }
    return output
}
console.log(reverseArray(webTechs)); 
// console.log(webTechs);

const longestChar  = webTechs.sort((a,b) => b.length - a.length)[0]
// console.log(longestChar);

const arrOfArr = webTechs.map((item) =>  Array(item,item.length) )
// console.log([arrOfArr]);
