const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}

const skills = person.skills
// console.log(skills);

const formetedSkills = skills.slice(0, -1).join(', ')
// console.log(formetedSkills);
const languages = person.languages

const formattedLanguages = person.languages.slice(0, -1).join(', ')

personInfo = `${person.firstName} ${person.lastName} lives in ${person.country}. He is  ${person.age
    } years old. He is an ${person.job}. He teaches ${formetedSkills} and ${skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
//   console.log(personInfo);


const rect = {
    width: 20,
    height: 10
}

const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
}
//  console.log(calculatePerimeter(rect)); 


// Destructuring object during iteration

const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    //    console.log("task :" , task, "time :" ,time,"completed :", completed);
}

for (const key in todoList) {
    // console.log(todoList[key]);
}

const funcSum = (...arr) => {
    let sum = 0
    for (const num of arr) {
        sum += num
    }
    // console.log(sum);
    return sum
}
// console.log(funcSum(5, 4, 5, 6, 8, 2));

// ====> (1)
const constants = [2.72, 3.14, 9.81, 37, 100]
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
// console.log(constants);

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

const { w, h, a, p } = rectangle
// console.log(rectangle);

