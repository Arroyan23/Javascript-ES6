// ARROW FUNCTION

// jika menggunakan function biasa

const tampilNama = function (nama) {
  console.log(`Halo ${nama}, Selamat Datang!`);
};

// jika menggunakan arrow function maka penggunaan function lebih ringkas dari
// biasanya
// sebuah function yang lebih simple dari function biasanya

const tampilPesan = (nama) => {
  alert(`Hello ${nama}`);
};

tampilPesan("Royan");

// bisa di ringkas lagi jika hanya menggunakan 1 parameter

const tampilPesan1 = (nama) => alert(`Halo ${nama}`);

tampilPesan("waw");

const tampilHelo = () => alert("favian rasyad");

tampilHelo();

// menghitung total character dari array

let mahasiswa = ["favian rasyad", "doddy saputra"];

// konsep this pada arrow function

// constructor function

class Mahasiswa {
  constructor() {
    (this.nama = "Bobby Saputra"), (this.umur = "23");
    console.log(this);
  }

  sayHello() {
    console.log(`Halo ${this.nama}, Yang berumur ${this.umur}`);
  }
}

const favian = new Mahasiswa();

// coba buat menggunakan arrow function

const DataMahasiswa2 = function () {
  (this.nama = "Azzam Wartaputra"),
    (this.waktu = "Siang"),
    (this.sayHello = () => {
      console.log(`Halo ${this.nama}, Selamat ${this.waktu}`);
    });
};

const azzam = new DataMahasiswa2();
// hasilnya adalah tidak bisa membuat constructor menggunakan arrow function

// jika membuatnya menggunakan object literal
const mhs1 = {
  nama: "Sammy",
  Waktu: "Malam",
  sayHello: () => {
    // console.log(`Halo ${this.nama}, Selamat ${this.waktu}`);
    // this didalam arrow function tidak berfungsi
    console.log(`Halo ${this.nama}, Selamat ${this.waktu}`);
    // sehingga akan menghasilkan undefined
  },
};

// gambaran menggunakan arrow function

const ClassMahasiswa = function () {
  this.nama = "sammy";
  this.umur = 33;
  // this.sayHello = funtion () {
  //     console.log(`Halo ${this.nama}, Berumur ${this,umur}`)
  // }
  this.sayHello = function () {
    console.log(`Halo ${this.nama}, Berumur ${this.umur}`);
  };

  //   jika menggunakan set interval lalu menggunakan function biasa maka nanti
  // acuan thisnya akan ke window sehingga tidak dapat menemukan variabel dari this.umur
  // maka gunakanlah arrow function agar dapat melihat ke variabel yang ada di parrent functionnya

  //   setInterval(() => {
  //     console.log(this.umur++);
  //   }, 1000);
};

const panggilSammy = new ClassMahasiswa();

// CONTOH REAL DARI ARROW FUNCTION

const box = document.querySelector("box");

box.addEventListener("click", function () {
  this.classList.toggle("size");

  //   jika pada saat set timeout menggunakan function biasa maka ia tidak dapat mengetahui
  // thisnya sehingga mengacu pada window
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});

// kesimpulannya
// - arrow function tdk memakai konsep this dan variabelny akan di telusuri lgi di lokal parent trdkt 
// - declaration function memakai konsep this tpi bila variabelny  yg dicri tdk ad dlm localnya maka lngsng di telesuri di window
// - expression function memakai konsep this tpi bila variabel yg dicri tdk dlm local maka, ditelusuri lgi ke lokal parent trdkt