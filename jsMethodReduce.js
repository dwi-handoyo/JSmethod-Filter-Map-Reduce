// Javascript method: Reduce 

// mencari jumlah total angka pada array
// reduce is used to get total sum of numbers within an array (array angka in this example)
// gunakan metode "reduce" 
// please use "reduce" method

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Example-1
const newAngka1 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
// dengan 0 di belakang.
// with 0 (zero) in the after comma.

console.log(newAngka1); // result: 26 (total summary of array's component)

// Example-2
const newAngka2 = angka.reduce((accumulator, currentValue) => accumulator + currentValue); 
// tanpa 0 di belakang, 0 merupakan default jika tidak di-state.
// without 0 (zero) in the after comma, 0 is default when it is not stated clearly

console.log(newAngka2); // result : 26

// Example-3
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5) 
// dengan angka 5 di belakang, maka jumlah total akan ditambah dengan 5.
// with 5 after comma, hence total sumation will be added with 5.

console.log(newAngka3); // result: 31 
// hasil 31 berasal dari 26+5=31
// result is 31, from 26+5=31
