// Javasciprt method: Filter, with Arrow Function 

// mencari angka >= 3 
// to have numbers >= 3 (bigger or equal three) within array angka
// gunakan metode "filter" dengan fungsi arrow
// please use "filter" method with arrow function

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka1 = angka.filter( (a) => {
 return a >= 3;
});

console.log(newAngka1); // result: [8, 9, 4, 3, 9]

// menggunakan filter dan arrow function yang disederhanakan
// to use filter and simplified arrow function

const newAngka2 = angka.filter( a => a >= 3);

console.log(newAngka2); // result: [8, 9, 4, 3, 9]
