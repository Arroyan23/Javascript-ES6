// DESTRUCTURING ASSIGNMENT
// expression di javascript yang membuat kita dapat membongkar
// nilai dari array atau properti di dalam object
// kedalam variabel terpisah

// destructuring array

// const perkenalan = ["Halo", "Nama", "Saya", "Favian Rasyad"];

// // const [a, b, c, d] = perkenalan;

// // skipping items
// const [a, , , b] = perkenalan;

// console.log(b);

// // swap items

// let as = 1;
// let bs = 2;

// console.log(as);
// console.log(bs);
// [as, bs] = [bs, as];

// console.log(as);
// console.log(bs);

// digunakan untuk return value pada function

// function coba() {
//   return [1, 2];
// }

// // dapat membaca array yang ada di dalam function secara spesifik
// // bs dibongkar
// const [a, b] = coba();
// console.log(a); // output = 1

// jika ingin menggunakan parameter yang banyak
// rest parameter
const [a, ...values] = [1, 2, 3, 4, 5, 56, 7];

console.log(values); //akan menghasilkan array dari 2-7

// destructuring Object

// const mhs = {
//   nama: "Favian Rasyad",
//   umur: 23,
// };

// bisa langsung destructuring tanpa deklarasi object

// ({ nama, hobby } = {
//   nama: "Favian Rasyad",
//   hobby: "Bunuh Diri",
// });
// console.log(nama);
// console.log(hobby);

// assign ke variabel baru

const mhs = {
  nama: "Favian Rasyad",
  hobby: "Bunuh Diri",
  email: "Favianrasyad@gmail.com",
};

// memberi nilai default dan assign ke variable baru

const { nama: u, hobby: n, email: e = "useremail@default.com" } = mhs;

console.log(u);
console.log(n);
console.log(e);

// rest parameter dalam object

const mhs1 = {
  nama: "Favian",
  hobby: "Bunuh diri",
  umur: 23,
};

const { nama, ...value } = mhs;

console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function

const mhs2 = {
  id: 617,
  nama: "Favian Rasyad",
  umur: 23,
  email: "bunuhdiri@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

// jadi bisa lebih simple

console.log(getIdMhs(mhs2));

