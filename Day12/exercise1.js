//---> \  it will escape the char
//==> The Math.abs() static method returns the absolute value of a number. mainly use to get the difference oif two values


 //1
 let sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

 let pattern = /\d+/g;
 let income = sentence.match(pattern);
 console.log("income" , income);
 let parsing = income.map((p) => Number(p));
 console.log(parsing);
 let annualIncome = parsing.reduce((a, b) => a + b);
 console.log(annualIncome);

 //2
 points = ['201', '2', '-4', '-3', '-10', '0', '4', '8']
 let numPattern = new RegExp(/\-?[0-9]+/, 'g');
 let extractedPoints = points.map(x => parseFloat(x.match(numPattern)[0])).sort((a, b) => a - b);
 let distance = Math.abs(extractedPoints[extractedPoints.length - 1] - extractedPoints[0]);
 console.log(distance);

//  points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']

 //3
 let is_valid_variable = (varName) => {
     let pattern = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/
     console.log(pattern.test(varName));
 }
 is_valid_variable('nameOfStud');
