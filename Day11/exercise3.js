const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400,
        flag: 'https://restcountries.eu/data/arg.svg',
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://restcountries.eu/data/abw.svg',
        currency: 'Aruban florin'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        languages: ['English'],
        population: 24117360,
        flag: 'https://restcountries.eu/data/aus.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Austria',
        capital: 'Vienna',
        languages: ['German'],
        population: 8725931,
        flag: 'https://restcountries.eu/data/aut.svg',
        currency: 'Euro'
    },
    {
        name: 'Azerbaijan',
        capital: 'Baku',
        languages: ['Azerbaijani'],
        population: 9730500,
        flag: 'https://restcountries.eu/data/aze.svg',
        currency: 'Azerbaijani manat'
    },
    {
        name: 'Bahamas',
        capital: 'Nassau',
        languages: ['English'],
        population: 378040,
        flag: 'https://restcountries.eu/data/bhs.svg',
        currency: 'Bahamian dollar'
    },
    {
        name: 'Bahrain',
        capital: 'Manama',
        languages: ['Arabic'],
        population: 1404900,
        flag: 'https://restcountries.eu/data/bhr.svg',
        currency: 'Bahraini dinar'
    },
    {
        name: 'Bangladesh',
        capital: 'Dhaka',
        languages: ['Bengali'],
        population: 161006790,
        flag: 'https://restcountries.eu/data/bgd.svg',
        currency: 'Bangladeshi taka'
    },
    {
        name: 'Barbados',
        capital: 'Bridgetown',
        languages: ['English'],
        population: 285000,
        flag: 'https://restcountries.eu/data/brb.svg',
        currency: 'Barbadian dollar'
    },
    {
        name: 'Belarus',
        capital: 'Minsk',
        languages: ['Belarusian', 'Russian'],
        population: 9498700,
        flag: 'https://restcountries.eu/data/blr.svg',
        currency: 'New Belarusian ruble'
    },
    {
        name: 'Belgium',
        capital: 'Brussels',
        languages: ['Dutch', 'French', 'German'],
        population: 11319511,
        flag: 'https://restcountries.eu/data/bel.svg',
        currency: 'Euro'
    },
    {
        name: 'Belize',
        capital: 'Belmopan',
        languages: ['English', 'Spanish'],
        population: 370300,
        flag: 'https://restcountries.eu/data/blz.svg',
        currency: 'Belize dollar'
    },
    {
        name: 'Benin',
        capital: 'Porto-Novo',
        languages: ['French'],
        population: 10653654,
        flag: 'https://restcountries.eu/data/ben.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Bermuda',
        capital: 'Hamilton',
        languages: ['English'],
        population: 61954,
        flag: 'https://restcountries.eu/data/bmu.svg',
        currency: 'Bermudian dollar'
    },
    {
        name: 'Bhutan',
        capital: 'Thimphu',
        languages: ['Dzongkha'],
        population: 775620,
        flag: 'https://restcountries.eu/data/btn.svg',
        currency: 'Bhutanese ngultrum'
    },
    {
        name: 'Bolivia (Plurinational State of)',
        capital: 'Sucre',
        languages: ['Spanish', 'Aymara', 'Quechua'],
        population: 10985059,
        flag: 'https://restcountries.eu/data/bol.svg',
        currency: 'Bolivian boliviano'
    },
    {
        name: 'Bonaire, Sint Eustatius and Saba',
        capital: 'Kralendijk',
        languages: ['Dutch'],
        population: 17408,
        flag: 'https://restcountries.eu/data/bes.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        languages: ['Bosnian', 'Croatian', 'Serbian'],
        population: 3531159,
        flag: 'https://restcountries.eu/data/bih.svg',
        currency: 'Bosnia and Herzegovina convertible mark'
    }]



// for (const {name,capital,languages,population,flag,currency} of countries) {
//     console.log(`name :"${name} \n capital : ${capital}`);
// }


// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// const [name, skill,[ , , jsScore, reactScore]] = student
// console.log("name",name);
// console.log("skills :", skill);
// console.log("js score : ", jsScore);
// console.log("react score : ", reactScore);


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

///=====> Write a function called convertArrayToObject which can convert the array to a structure object.

const convertArrayToObject = (arr) => {
    const test = [];
    for (const [name, skills, scores] of arr) {
        test.push({ name, skills, scores })
    }
    console.log(test);
}
// convertArrayToObject(students)



/// =====> Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets


const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}


const res = student.skills.frontEnd.push({skill : "bootstrap" ,level : 8})
student.skills.backEnd.push({skill : "Express" , level : 9})
student.skills.dataBase.push({skill :"SQL" ,level :8})
student.skills.dataScience.push({skill :" SQL"})
console.log(student);
