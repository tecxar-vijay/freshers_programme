const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const res = JSON.stringify(skills)
console.log(res);


const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

  const r = JSON.stringify(student)
  console.log(r);
  const p = JSON.parse(r)
  console.log(p);
  