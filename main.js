const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 1985},
    {name: "Company Two", category: "Retail", start: 1982, end: 2000},
    {name: "Company Three", category: "Auto", start: 1933, end: 2001},
    {name: "Company Four", category: "Retail", start: 1995, end: 2008},
    {name: "Company Five", category: "Technology", start: 1980, end: 2007},
    {name: "Company Six", category: "Finance", start: 1998, end: 2005},
    {name: "Company Seven", category: "Auto", start: 1999, end: 2003},
    {name: "Company Eight", category: "Retail", start: 1987, end: 2001},
    {name: "Company Nine", category: "Finance", start: 1983, end: 1996}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// for(let i = 0; i <companies.length; i++) {
//   console.log(companies[i]);
// }


// forEach

// companies.forEach(function(company) {
//     console.log(company)
// })

// companies.forEach(element => {
//     console.log(element.name)
// });



// filter

// GET 21 AND OLDER
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }


// const canDrink = ages.filter(age => {
//     if(age >= 21) {
//         return true;
//     }
// });


// const canDrink = ages.filter(age => age >= 21);

// FILTER RETAIL COMPANIES

// const retailCompanies = companies.filter(function(company) {
//     if (company.category === "Retail") {
//         return true;
//     }
// });


// const retailCompanies = companies.filter(company => company.category === "Retail");


// GET 80s COMPANIES

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1990);

// GET COMPANIES THAT LASTED 10 YEARS OR MORE

// const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);

// console.log(lastedTenYears);




// map

// CREATE ARRAY OF COMPANY NAMES

// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const agesSquare = ages.map(age => Math.sqrt(age));

// const agesTimesTwo = ages.map(age => age * 2);


// const agesMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);

// console.log(agesMap);



// sort

// SORT COMPANIES BY START YEAR
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });


// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// SORT AGES

// const sortAges = ages.sort((a, b) => b - a);//asending
// const sortAges = ages.sort((a, b) => b - a);//desending

// console.log(sortAges);



// reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);


// const ageSum = ages.reduce((total, age) => total + age, 0);

// GET TOTAL YEARS FOR ALL COMPANIES

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);


// console.log(totalYears);


// COMBINE METHODS

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0)


// console.log(combined);
