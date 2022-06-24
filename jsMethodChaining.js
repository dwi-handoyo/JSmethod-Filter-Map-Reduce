// Javascript filter-map-reduce methods chaining

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Methods Chaining menjalankan beberapa method secara berantai:
// 1. cari angka > 5 dengan menggunakan metode filter
// 2. kalikan 3 dengan menggunakan metode map
// 3. jumlahkan dengan menggunakan metode reduce

// Methods Chaining executes several methods in a chain:
// 1. find number > 5 by using filter method
// 2. multiply by 3 using the map method
// 3. add up using the reduce method

// 1. Example: filter-map-reduce methods chaining
const hasil = angka.filter(a => a > 5) 
  .map(a => a * 3) 
  .reduce((acc, cur) => acc + cur); 
console.log(hasil); // result: 78

// 2. Example: filter-map-map-reduce methods chaining
const hasil2 = angka.filter(b => b > 5)
  .map(b => b * 3)
  .map(b => b/2) 
  .reduce((acc1, cur1) => acc1 + cur1);
console.log(hasil2); // result: 39

// 3. Example: filter-map methods chaining
const hasil3 = angka.filter(c => c > 5)
  .map(c => c * 3);  
console.log(hasil3); // result: 24, 27, 27
