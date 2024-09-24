function tes() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
// variabel yang ada di dalam pengulangan seharusnya tidak bisa di akses
// sehingga solusinya ada beberapa cara
// tes();
// jika dijalankan akan error
// console.log(i);
// console.log(i);
// gunakan block scope dan
// IIFE (Immediately Invoked Function Expression)
// SIAF (Self Invoking Anonymous Function)

// anonymous function fungsi tidak bernama

(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();

// ini tidak bisa di akses yang diharapkan
// karena variabel dalam looping seharusnya tidak bisa di akses
// console.log(i);
// namun dengan javascript es6 kita bisa memblock dengan mengganti var menjadi let

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// var menganut function scope
// sedangkan let dan const menggunakan block scope

// jika yakin suatu variabel tidak akan dirubah maka gunakan const
// const = constanta

// kita tidak dapat mengubah nilai tsb
const i = 10;

// kita hanya bisa menambah/mengubah isi dari const tapi hanya nilai dalam objek
const mhs = {
  nama: "bobby",
  energi: 21,
};

mhs.energi(23);
