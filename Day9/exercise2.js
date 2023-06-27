
const nCountries = [
    {
        name: 'Brazil',
        capital: 'Brasília',
        languages: ['Portuguese'],
        population: 206135893,
        flag: 'https://restcountries.eu/data/bra.svg',
        currency: 'Brazilian real'
    },
    {
        name: 'British Indian Ocean Territory',
        capital: 'Diego Garcia',
        languages: ['English'],
        population: 3000,
        flag: 'https://restcountries.eu/data/iot.svg',
        currency: 'United States dollar'
    },
    {
        name: 'United States Minor Outlying Islands',
        capital: '',
        languages: ['English'],
        population: 300,
        flag: 'https://restcountries.eu/data/umi.svg',
        currency: 'United States Dollar'
    },
    {
        name: 'Virgin Islands (British)',
        capital: 'Road Town',
        languages: ['English'],
        population: 28514,
        flag: 'https://restcountries.eu/data/vgb.svg',
        currency: '[D]'
    },
    {
        name: 'Virgin Islands (U.S.)',
        capital: 'Charlotte Amalie',
        languages: ['English'],
        population: 114743,
        flag: 'https://restcountries.eu/data/vir.svg',
        currency: 'United States dollar'
    },
    {
        name: 'Brunei Darussalam',
        capital: 'Bandar Seri Begawan',
        languages: ['Malay'],
        population: 411900,
        flag: 'https://restcountries.eu/data/brn.svg',
        currency: 'Brunei dollar'
    },
    {
        name: 'Bulgaria',
        capital: 'Sofia',
        languages: ['Bulgarian'],
        population: 7153784,
        flag: 'https://restcountries.eu/data/bgr.svg',
        currency: 'Bulgarian lev'
    },
    {
        name: 'Burkina Faso',
        capital: 'Ouagadougou',
        languages: ['French', 'Fula'],
        population: 19034397,
        flag: 'https://restcountries.eu/data/bfa.svg',
        currency: 'West African CFA franc'
    },
    {
        name: 'Burundi',
        capital: 'Bujumbura',
        languages: ['French', 'Kirundi'],
        population: 10114505,
        flag: 'https://restcountries.eu/data/bdi.svg',
        currency: 'Burundian franc'
    },
    {
        name: 'Cambodia',
        capital: 'Phnom Penh',
        languages: ['Khmer'],
        population: 15626444,
        flag: 'https://restcountries.eu/data/khm.svg',
        currency: 'Cambodian riel'
    },
    {
        name: 'Cameroon',
        capital: 'Yaoundé',
        languages: ['English', 'French'],
        population: 22709892,
        flag: 'https://restcountries.eu/data/cmr.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        languages: ['English', 'French'],
        population: 36155487,
        flag: 'https://restcountries.eu/data/can.svg',
        currency: 'Canadian dollar'
    },
    {
        name: 'Cabo Verde',
        capital: 'Praia',
        languages: ['Portuguese'],
        population: 531239,
        flag: 'https://restcountries.eu/data/cpv.svg',
        currency: 'Cape Verdean escudo'
    },
    {
        name: 'Cayman Islands',
        capital: 'George Town',
        languages: ['English'],
        population: 58238,
        flag: 'https://restcountries.eu/data/cym.svg',
        currency: 'Cayman Islands dollar'
    },
    {
        name: 'Central African Republic',
        capital: 'Bangui',
        languages: ['French', 'Sango'],
        population: 4998000,
        flag: 'https://restcountries.eu/data/caf.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chad',
        capital: "N'Djamena",
        languages: ['French', 'Arabic'],
        population: 14497000,
        flag: 'https://restcountries.eu/data/tcd.svg',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chile',
        capital: 'Santiago',
        languages: ['Spanish'],
        population: 18191900,
        flag: 'https://restcountries.eu/data/chl.svg',
        currency: 'Chilean peso'
    },
    {
        name: 'China',
        capital: 'Beijing',
        languages: ['Chinese'],
        population: 1377422166,
        flag: 'https://restcountries.eu/data/chn.svg',
        currency: 'Chinese yuan'
    },
    {
        name: 'Christmas Island',
        capital: 'Flying Fish Cove',
        languages: ['English'],
        population: 2072,
        flag: 'https://restcountries.eu/data/cxr.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Cocos (Keeling) Islands',
        capital: 'West Island',
        languages: ['English'],
        population: 550,
        flag: 'https://restcountries.eu/data/cck.svg',
        currency: 'Australian dollar'
    },
    {
        name: 'Colombia',
        capital: 'Bogotá',
        languages: ['Spanish'],
        population: 48759958,
        flag: 'https://restcountries.eu/data/col.svg',
        currency: 'Colombian peso'
    },
    {
        name: 'Comoros',
        capital: 'Moroni',
        languages: ['Arabic', 'French'],
        population: 806153,
        flag: 'https://restcountries.eu/data/com.svg',
        currency: 'Comorian franc'
    }
]




//    const ress = nCountries                                                                                            
// const ress = nCountries.sort((a, b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
const ress = nCountries.map((item) => item.name).sort()
const cap = nCountries.map((item) => item.capital).sort()

// console.log(ress);
// console.log(cap);


// write function to find most spoken language from the object

const mostSpokenLan = (arr, num) => {
    const lan = arr.map((item) => item.languages).reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});
    // console.log(lan);
    const sorted = Object.entries(lan).sort((a, b) => b[1] - a[1]).slice(0, 3)
    // console.log(sorted);
}
// mostSpokenLan(nCountries, 3)


// write function to find mostPopulatedCountries 
const mostPopulatedCountries = (arr, num) => {
    const pop = arr.map((item) => item.population).sort((a, b) => b - a)
    // console.log(pop);
}
// mostPopulatedCountries(nCountries)


// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]



// =====> find how many languages are there in countries object

  const x=  nCountries.map((item) => item.languages)
//   const n = Array(x)
//   console.log(x);
//   const m = new Set(n)
//   console.log(m);
//   console.log(X);


// const n = nCountries.map(item => item.languages) 
    // .filter((value, index, self) => self.indexOf(value) === index)
// console.log(n); 
// console.log("day9");

const lang = nCountries.reduce((acc,curr) => {
    const arr = acc.languages.concat(curr.languages)
    console.log(arr);
    return arr                                                                              
})  

const newSet = new Set(lang).size
console.log(newSet);


// const rr = nCountries.map((item) => console.log(item.languages))