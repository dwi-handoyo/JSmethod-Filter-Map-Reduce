// Javascript method: Map 

// Example-1:
// mencari angka * 2 
// to have numbers * 2 (multiple by two) within array angka
// gunakan metode "map" 
// please use "map" method

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Example-2:
// menampilkan jumlah huruf untuk tiap elemen array mahasiswa, result berupa array

// Example-3:
// menampilkan nama dan jumlah huruf untuk tiap elemen array mahasiswa, result berupa object

const mahasiswa = ['Andromeda', 'Bima Sakti', 'Solar System'];

// A. Map method with normal function 

  // Example-1
const newAngka1 = angka.map( function(a) {
  return a * 2;
});
console.log(newAngka1); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
let strLength1 = mahasiswa.map(function(nama){
 return nama.length;
});
console.log(strLength1); // result: [9, 10, 12]

  // Example-3  
let mhsObject1 = mahasiswa.map(function(nama){
 return {nama: nama, letters: nama.length} 
});
console.log(mhsObject1); 
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// B. Map method with arrow function 

  // Example-1
const newAngka2 = angka.map( (a) => {
  return a * 2;
});
console.log(newAngka2); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
let strLength2 = mahasiswa.map( (nama) => {
  return nama.length;
});
console.log(strLength2); // result: [9, 10, 12]

  // Example-3
let mhsObject2 = mahasiswa.map( (nama) => {
  return {nama: nama, letters: nama.length}
});
console.log(mhsObject2); 
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// C. Map method with arrow function in one line

  // Example-1:
const newAngka3 = angka.map( a => a * 2);
console.log(newAngka3); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2:
let strLength3 = mahasiswa.map( nama => nama.length);
console.log(strLength3); // result: [9, 10, 12]

  // Example-3:
let mhsObject3 = mahasiswa.map( nama => ({nama: nama, letters: nama.length})); // add parentheses () to return object in single line arrow function
console.log(mhsObject3);
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]





