import fs from 'fs';

const data = fs.readFileSync('./numbers.txt');

const numberArray = data.toString().split('\n')

let totalFuel = 0;

numberArray.forEach(number => {
    const divdedNumber = Math.floor(number / 3);
    totalFuel += divdedNumber - 2;
});

console.log(totalFuel);