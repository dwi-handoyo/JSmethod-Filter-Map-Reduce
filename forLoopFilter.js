// Filter through a loop

// mencari angka >= 3 
// to have numbers >= 3 (bigger or equal three) within array angka
// gunakan pengulangan "for" 
// please use "for" loop 

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = [];
for(let i = 0; i < angka.length; i++){
  if (angka[i] >= 3) {
   newAngka.push(angka[i]);
  }
}
 
console.log(newAngka); //result: [8, 9, 4, 3, 9]
