const data = require('./seeds/companiesOnLinkedin');

// retriving all data

data.forEach(obj => {
	console.log(obj, 'LINE 6');
});

// retrieving a specific num of data objects from the start of the list

let num = 10;

for (let i = 0; i < num; i++) {
	console.log(data[i], 'LINE 14');
}

// retrieving data between two indexes

let start = 25;
let end = 30;

for (let i = start - 1; i < end; i++) {
	console.log(data[i], 'LINE 23');
}

// retrieving a single random data object

let random = data[Math.floor(Math.random() * data.length)];

console.log(random, 'LINE 30');

// retrieving multiple random data objects

let total = 5;

let randoms;

for (let i = 0; i < total; i++) {
	randoms = data[Math.floor(Math.random() * data.length)];
	console.log(randoms, 'LINE 40');
}
