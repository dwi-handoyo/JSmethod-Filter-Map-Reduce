
# Javascript Methods - Filter, Map, and Reduce

Javascript method of Filter, Map, and Reduce

### 1. FILTER

Filter() method creates a new array filled with elements that pass a test provided by a function. Filter() does not execute the function for empty elements. Filter() does not change the original array.

Metode Filter() membuat array baru berisi elemen yang memenuhi kondisi suatu fungsi. Filter() tidak menjalankan fungsi untuk elemen kosong. Filter() tidak mengubah array aslinya.

        const array = [a, b, c, d, e, f, g, h];
        const result = array.filter(element => element > 3);
        console.log(result);

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/jsMethodFilterNormalFunction.js

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/jsMethodFilterArrowFunction.js

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/forLoopFilter.js

### 2. MAP

Map() creates a new array from calling a function for every array element. It calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.

Map() membuat array baru dari memanggil fungsi untuk setiap elemen array. Ini memanggil fungsi sekali untuk setiap elemen dalam array. map() tidak menjalankan fungsi untuk elemen kosong. map() tidak mengubah array aslinya.

         const array = [a, b, c, d, e, f, g, h];
         const result = array.map(element => element * 3);
         console.log(result);

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/jsMethodMap.js

Please check above file for some examples of map method implementation:

##### A. Map method with Function Declaration

##### B. Map method with Arrow Function 

##### C. Map method with Arrow Function in Single Line

##### D. Map Method with Function Declaration inside Function Declaration

##### E. Map Method with Function Declaration inside Function Expression

##### F. Map Method with Arrow Function inside Function Declaration

##### G. Map Method with Arrow Function inside Function Expression

##### H. Map Method with Single Line Arrow Function inside Function Declaration

##### I. Map Method with Single Line Arrow Function inside Function Expression

### 3. REDUCE

Reduce() method executes a reducer function for array element. Reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements. The reduce() method does not change.

Reduce() metode mengeksekusi fungsi peredam untuk elemen array. Reduce() metode mengembalikan nilai tunggal: hasil akumulasi fungsi. Metode reduce() tidak menjalankan fungsi untuk elemen array kosong. Metode reduce() tidak berubah.

        const array = [a, b, c, d, e, f, g, h];
        const result = array.reduce((acc, cur) => acc + cur);
        console.log(result);

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/jsMethodReduce.js

### 4. CHAINING METHOD

Method chaining is when methods are invoked from one object to another without creating intermediate variables. In otherwords it is a single statement of multiple method invocations which we instruct our program to perform.

Metode chaining adalah ketika metode dipanggil dari satu objek ke objek lain tanpa membuat variabel perantara. Dengan kata lain, ini adalah pernyataan tunggal dari beberapa pemanggilan metode yang kita instruksikan untuk dilakukan oleh program kita.

        const array = [a, b, c, d, e, f, g, h];
        const result = array.filter(element => element > 5)
        .map(element => element * 3)
        .reduce((acc, cur) => acc + cur);
        console.log(result)

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/jsMethodChaining.js

### 5. EXERCISE

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/Exercise_FilterMapReduce_1.html

* https://github.com/dwi-handoyo/JSmethod-Filter-Map-Reduce/blob/main/Exercise_FilterMapReduce_2.html



