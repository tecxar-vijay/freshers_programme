
// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const  sent = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanText = (sentence) => {
    const matches = sentence.replace(/%|@|&|#|/g, '')
    console.log(matches);
}
cleanText(sent)


// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

const words = " I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher"
