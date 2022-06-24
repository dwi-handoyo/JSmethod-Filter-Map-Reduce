# JSmethod-Filter-Map-Reduce
Javascript method of Filter, Map, and Reduce

Javascript Methods - Filter, Map, and Reduce

1. Filter

Filter() method creates a new array filled with elements that pass a test provided by a function. Filter() does not execute the function for empty elements. Filter() does not change the original array.
Metode Filter() membuat array baru berisi elemen yang memenuhi kondisi suatu fungsi. Filter() tidak menjalankan fungsi untuk elemen kosong. Filter() tidak mengubah array aslinya.

const array = [a, b, c, d, e, f, g, h];
const result = array.filter(element => element > 3);
console.log(result);

2. Map

Map() creates a new array from calling a function for every array element. It calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.
Map() membuat array baru dari memanggil fungsi untuk setiap elemen array. Ini memanggil fungsi sekali untuk setiap elemen dalam array. map() tidak menjalankan fungsi untuk elemen kosong. map() tidak mengubah array aslinya.

const array = [a, b, c, d, e, f, g, h];
const result = array.map(element => element * 3);
console.log(result);

3. Reduce

Reduce() method executes a reducer function for array element. Reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements. The reduce() method does not change.
Reduce() metode mengeksekusi fungsi peredam untuk elemen array. Reduce() metode mengembalikan nilai tunggal: hasil akumulasi fungsi. Metode reduce() tidak menjalankan fungsi untuk elemen array kosong. Metode reduce() tidak berubah.

const array = [a, b, c, d, e, f, g, h];
const result = array.reduce((acc, cur) => acc + cur);
console.log(result);

4. Chaining Method

Method chaining is when methods are invoked from one object to another without creating intermediate variables. In otherwords it is a single statement of multiple method invocations which we instruct our program to perform.
Metode chaining adalah ketika metode dipanggil dari satu objek ke objek lain tanpa membuat variabel perantara. Dengan kata lain, ini adalah pernyataan tunggal dari beberapa pemanggilan metode yang kita instruksikan untuk dilakukan oleh program kita.

const array = [a, b, c, d, e, f, g, h];
const result = array.filter(element => element > 5)
 .map(element => element * 3)
 .reduce((acc, cur) => acc + cur);
console.log(result)
