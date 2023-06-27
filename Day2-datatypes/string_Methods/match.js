
// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// syntax = string.match(substring)

const str5 = "I love JavaScript. If you do not love JavaScript what else can you love."
const pattern  = /love/g
console.log(str5.match(pattern));
