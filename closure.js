// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// // init(); jika memanggil dengan cara seperti ini maka tidak akan jalan
// // buat variabel terlebih dahulu

// var panggilNama = init();

// panggilNama("bopay");
// panggilNama("favian rasyad");

// contoh pembuatan closure

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama} selamat ${waktu}.`);
    // jika di dalam function memanggil argumen tidak memerlukan this
    // dan this hanya untuk digunakan di dalam object / class
  };
}

var ucapanPagi = ucapkanSalam("Pagi");
var ucapanSiang = ucapkanSalam("Siang");
var ucapanMalam = ucapkanSalam("Malam");

ucapanPagi("Royan");
ucapanSiang("Bobi");
ucapanMalam("Favian Rasyad");

// fungsi penggunaan untuk closure counter

// menambahkan counter setiap kali ditambahkan

let add = (function () {
  let counter = 0;
  return function () {
    return counter++;
  };
})();

counter = 100;
// tidak akan mengganggu functionnya.

// let a = add();
// gunakan immediately invol function
console.log(add());
console.log(add());
console.log(add());
console.log(add());


// bisa juga untuk memecah fungsi

function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // Output: 10
