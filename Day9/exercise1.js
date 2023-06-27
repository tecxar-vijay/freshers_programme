
const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
// console.log(users)


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
    }
]


const res = countries.findIndex((item) => item.name == "Belize")
// console.log(res);


//====> Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const categorizeCountries = (countries) => {
    const names = countries.map((item) => item.name)
    const re = names.filter((item) => item.endsWith("ia"))
    console.log(re);
}
//    categorizeCountries(countries)


//====>    Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const names = countries.reduce((v1, v2) => {
    // console.log(v2.name[0]);
    const startLetter = v2.name[0];
    v1[startLetter] = (v1[startLetter] || 0) + 1;
    return v1;
}, {})

// console.log(names)

//====> Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

const getLastTenCountries = () => {
    // arr.slice(-10) 
    const res = countries.slice(-10)
    console.log(res);
}
getLastTenCountries()

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const r = products.map((item) => item.price).reduce((a, b) => (+a) + (+b), 0)
// console.log(r);
