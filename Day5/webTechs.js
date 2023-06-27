const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const newWebTeck = "sass"
const checkWebTecs = webTechs.map((w)=> {
    if (webTechs.includes("sass")) {
        console.log("It is in the list")
    }
    else{
        webTechs.push("sass")
    }
})
console.log(webTechs);

