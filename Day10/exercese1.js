
const set = new Set()
// console.log(set);

const a=  [...Array(11).keys()]
// console.log(a);

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
//   console.log(setOfLanguages)

for (const lang of setOfLanguages) {
    // console.log(lang);
}

const langSet = new Set(languages)

const counts = []
const count = {}

for (const lan of langSet) {
    const filteredLang = languages.filter((l) => l === lan)
    // console.log(filteredLang);
    counts.push({lang : lan , count : filteredLang.length})
}
// console.log(counts);



// const componies = new Set()

// componies.add("google")
// console.log(componies);

const componies = ["google","facebook"]
const setOfComponies = new Set()
for (const compony of componies) {
    setOfComponies.add(compony)
}
// console.log(".......", setOfComponies);

 setOfComponies.delete("google")
// console.log(setOfComponies); // only facebook


//===> making unian of two Sets

// const x = [1,2,3,5,4,5]
// const y = [5,1,8,9,7]
// const z = [...x,...y]

// const X = new Set(x)
// const Y = new Set(y)
// const Z = new Set(z)
// console.log(Z);


//===> finding intersaction of set

// const x = [1,2,3,5,4,5]
// const y = [5,1,8,9,7]

// const X = new Set(x)
// const Y = new Set(y)

// const c = x.filter((elem) => Y.has(elem))
// const C = new Set(c)
// console.log(C);


// ===> finding the different elements from two sets

const x = [1,2,3,5,4,5]
const y = [5,1,8,9,7]

const X = new Set(x)
const Y = new Set(y)

const z = x.filter((elem) => !Y.has(elem))
const Z = new Set(z)
console.log(Z);