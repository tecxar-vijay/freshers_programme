//1
//  Write a function called tenMostFrequentWords which get the ten most frequent word from a string?


let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
let tenMostFrequentWords = (text, range = 10) => {
    let pattern = /[a-z|A-Z]*/g;
    return Object.entries(text.match(pattern).reduce((dict, word) => {
        dict[word] = (dict[word] || 0) + 1;
        return dict;
    }, {})).sort((a, b) => b[1] - a[1]).slice(0, range);
}
// tenMostFrequentWords(paragraph).forEach(x => console.log(x));

////====> or
var obj = {}
var repeats = [];
let str = "my name is vijay prajapati"

for (x = 0, length = str.length; x < length; x++) {
    let l = str.charAt(x)
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
}

console.log(obj)

////==> or

const countChares = (str) => {
    const arr = str.split("")
    return arr.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? (acc[curr] + 1) : 1
        return acc
    }, {})
}

console.log(countChares(str));

const s = "this is string to check the num of char in it"

const check = (s) => {
    const arr = s.split("")
    return arr.reduce((acc,curr) => {
         acc[curr] = acc[curr] ? (acc[curr] + 1) : 1
         return acc
    },{})
}

console.log(check(s)); 