// CALLBACK
// synchronus callback
// ini akan jarang di gunakan

// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo ${nama}`));
// sebuah function yang memanggil function itu sendiri

const mhs = [
  {
    nama: "Favian Rasyad",
    hobby: "Bunuh Diri",
    id: 1,
  },
  {
    nama: "Sammy Muchammad",
    hobby: "Membunuh Favian",
    id: 3,
  },
  {
    nama: "Sammy Wartaputra",
    hobby: "Membunuh Sammy",
    id: 3,
  },
];

//kemungkinan kita akan mengambil data dari API yang lain dan mungkin akan memakan waktu yang
// lama dalam memproses data tersebut

// memanggil nama

// console.log("mulai");
// mhs.forEach((e) => {
//   for (let i = 0; i < 100000000000000; i++) {
//     //ini akan me loading dengan sangat lama
//     let date = new Date();
//   }
//   console.log(`nama: ${e.nama} \n`);
// });
// console.log("selesai");

// ASYNCHRONUS CALLBACK

console.log("Mulai");

console.log("Selesai");

// maka loading data ke json akan dilewati dan langsung ke selesai

// PROMISE

// console.log("Mulai");
// $.ajax({
//   url: "https://www.omdbapi.com/?i=tt3896198&apikey=a78cf8b",
//   success: (m) => console.log(m),
// });

// jika tidak menggunakan library dengan menggunakan fetch

fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a78cf8b")
  .then((respons) => respons.json())
  .then((response) => console.log(response));

// apa itu promise
// sebuah object yang merepresentasikan keberhasilan at ke gagalan
// sebuah asynchronus di masa yang akan datang
// janji (terpenuhi / ingkari)
// states (fullfiled / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)
let ditepati = true;
// Contoh 1
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji Telah di tepati");
  } else {
    reject("Ingkar Janji");
  }
});

janji1
  .then((response) => console.log("OK! : " + response))
  .catch((r) => console.log("NOT OK! : " + r));

// catch untuk menangkap else didalam promise

// contoh 2

let ditepati1 = false;

const janji2 = new Promise((resolve, reject) => {
  if (ditepati1 == true) {
    setTimeout(() => {
      resolve("Janji Di Tepati Konz");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("Anda adalah Seorang yang ingkar janji");
    }, 2000);
  }
}); // ini akan membuat kode dari promise ter pending sebentar
// namun mulai dan berakhirnya masih tetap akan berjalan

console.log("Mulai");

// jika seperti ini maka akan ada tulisan pending terlebih dahulu
// console.log(janji2.then(() => console.log(janji2)));
janji2
  .finally(() => console.log("Selesai Menunggu"))
  .then((response) => console.log("OK! : " + response))
  .catch((response) => console.log("TIDAK OK! : " + response));

console.log("Selesai");

// promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Ade Aditya",
        pemeran: "Favian, Rasyad",
      },
    ]);
  }, 3000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Depok",
        temp: 21,
        keadaan: "Mantap",
      },
    ]);
  }, 2000);
});

// menggunakan fungsi promise all

// jika menggunakan cara biasa

// console.log(film.then(() => console.log(film)));
// cuaca.then((response) =>
//   console.log("Data Cuaca Berhasil Di load: \n" + response)
// );

// cara untuk langsung load semua promisenya

Promise.all([cuaca, film])
  .finally(() => console.log("Selesai Di eksekusi"))
  .then((response) => {
    const [cuaca, film] = response;

    console.log(cuaca);
    console.log(film);
  });
