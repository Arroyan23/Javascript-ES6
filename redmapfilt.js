// CONTOH PENGGUNAAN HIGH ORDER FUNCTION
// MAP(), FILTER(), REDUCE();

const angka = [1, 2, 4, 3, 9, 6, -5, -7];

// mencari angka >= 3
// menggunakan metodologi for

// const newAngka = [];

// for (let n = 0; n < angka.length; n++) {
//   if (angka[n] <= 3) {
//     newAngka.push(angka[n]);
//   }
// }

// newAngka.forEach(function (b) {
//   console.log(b);
// });

// menggunakan metodologi filter
// gunakan arrow function saja

const newAngka = angka.filter((e) => e >= 3);
// lebih simple menggunakan filter
console.log(newAngka);

// metodelogi map

const angkaDikali = angka.map((e) => e * 2);

console.log(angkaDikali);

// jika menggunakan metodologi for

let angkaDikaliFor = [];

for (let i = 0; i < angka.length; i++) {
  angkaDikaliFor = angka[i] * 2;
}

console.log(angkaDikali);

// hasilnya akan sama aja dengan penggunaan map namun penggunaan program lebih complex

// menggunakan metodologi reduce
// reduce dapat menjumlahkan keseluruhan data dari array

const jumlahkanSeluruhAngka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// ini menjumlahkan keseluruhan dari array tersebut

console.log(jumlahkanSeluruhAngka);

// yang terjadi pada balik layar
// menggunakan metodelogi for

let jumlahkanAngkaFor = 0;

for (let i = 0; i < angka.length; i++) {
  jumlahkanAngkaFor += angka[i];
}

console.log(jumlahkanAngkaFor);

// menghasilkan value yang sama

// metodelogi chaint menggabungkan semua fungsi map reduce filter

const menggabungkanSemuaFungsi = angka
  .filter((e) => e < 3)
  .map((e) => e * 2)
  .reduce((angka, cur) => angka + cur);

//   jadi semua fungsi dapat digunakan dalam bersamaan

console.log(menggabungkanSemuaFungsi);
