// Javasciprt method: Filter, with normal function 

// mencari angka >= 3 
// to have numbers >= 3 (bigger or equal three) within array angka
// gunakan metode "filter" dengan fungsi normal
// please use "filter" method with normal function

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = angka.filter( function (a) {
  return a >= 3;  
});

console.log(newAngka); // result: [8, 9, 4, 3, 9] 
