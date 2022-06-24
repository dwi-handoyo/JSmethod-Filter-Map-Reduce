// Javascript method: Map 

// mencari angka * 2 
// to have numbers * 2 (multiple by two) within array angka
// gunakan metode "map" 
// please use "map" method

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Map method with normal function 

const newAngka1 = angka.map( function(a) {
  return a * 2;
});

console.log(newAngka1); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

// Map method with arrow function 
const newAngka2 = angka.map( (a) => {
  return a * 2;
});

console.log(newAngka2); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

// Map method with arrow function in one line

const newAngka3 = angka.map( a => a * 2);

console.log(newAngka3); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]
