// TEMPLATE LITERAL
// menggunakan back tick ``
// Embedded expression
// HTML Fragments
// Expression Interpolation
// Tagged Template

// const nama = "favian";
// umur = 33;

// console.log(`Halo, nama saya ${nama}, Saya berumur ${umur} tahun`);

// // embedded expressions

// console.log(`${alert("Halo!")}`);

// // simpan ternary dalam literal
// const x = 10;

// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML fragments

const mhs = {
  nama: "Favian Rasyad",
  umur: 33,
  niat: "bundir",
};

// bisa dengan mudah membuat tag html dan memasukkan dengan metodelogi DOM

// HTML FRAGMENTS LATIHAN

const suara = /* html */ `
<div class = "mhs" >
    <h2>Nama :${mhs.nama}</h2>
    <p>Umur : ${mhs.umur} </p>
    <p>Niat : ${mhs.niat}</p>
</div>`;

const ambilHeading = document.querySelector(".untuk-heading");
ambilHeading.insertAdjacentHTML("afterbegin", suara);

// masukkan ke html

// membuat looping ke dalam objek

const mahasiswaSeteres = [
  {
    nama: "Favian Rasyad",
    hobi: "Bunuh Diri",
  },
  {
    nama: "Sammy Muchammad",
    hobi: "membunuh sesama hewan",
  },
  {
    nama: "Doddy",
    hobi: "mencari uang",
  },
];

const el = /* html */ `<div class="tampil">
${mahasiswaSeteres
  .map(
    (e) => /* html */ `<ul>
    <li>Nama : ${e.nama}</li>
    <li>Hobi : ${e.hobi}</li>
  </ul>`
  )
  .join("")}
</div>
`;

const ambilKelas = document.querySelector(".kelas-untuk-favian");

ambilKelas.insertAdjacentHTML("afterbegin", el);

// ada 4 str dalam insertAdjacentHTML
// 1. before begin (untuk sebelum tempat di select)
// 2. after begin tepat setelah tempat di select
// dsb

// membuat if didalam string literal

const namaFilm = {
  nama: "marvin gaye",
  penyanyi: "Charlie Puth",
  feating: "Wiz Khalifa",
};

const taroJudul = /* html */ `
<div class="tempat-film">
<ul>
<li>Judul Lagu : ${namaFilm.nama}</li>
<li>Nama Penyanyi : ${namaFilm.penyanyi} ${
  namaFilm.feating ? `(Feating. ${namaFilm.feating})` : ""
}</li>
</ul>
</div>
`;

ambilKelas.insertAdjacentHTML("beforeend", taroJudul);

// untuk menambahkan data mahasiswa menggunakan function ke dalam string

const dataMahasiswa = {
  nama: "Favian Rasyad",
  semester: 5,
  matakuliah: [
    "Pemrograman Website",
    "Praktek Biologi",
    "Praktek Sosiologi",
    "Praktek penggelapan uang",
  ],
};

function tampilkanMataKuliah(mataKuliahF) {
  const menampilkan = /* html */ `
    ${mataKuliahF
      .map(
        (e) => /* html */ `
        <li>${e}</li>
        `
      )
      .join("")}
    `;

  return menampilkan;
}

const tampilkanDataMahasiswa = /* html */ `
<ul>
<li>Nama Mahasiswa: ${dataMahasiswa.nama}</li>
<li>Semester : ${dataMahasiswa.semester}</li>
${tampilkanMataKuliah(dataMahasiswa.matakuliah)}
</ul>
`;
const ambilDataMahasiswa = document.querySelector(".data-mahasiswa");

ambilDataMahasiswa.insertAdjacentHTML("afterbegin", tampilkanDataMahasiswa);

// jika menggunakan object constructor