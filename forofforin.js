// FOR OFF FOR IN
// Dapat me looping banyak skali

// for...of
const mahasiswa = ["Favian", "Rasyad", "Saputra"];

mahasiswa.forEach((e) => console.log(e));

for (m of mahasiswa) {
  console.log(m);
}

// for ... in

const namaFavian = "Favian";

for (n of namaFavian) {
  console.log(n); //outputnya akan character yang di ulang
}

for (n in namaFavian) {
  console.log(n); //outputnya akan urutan karakter dari 0
}

// bisa untuk mengambil index dari array

mahasiswa.forEach((e, i) => {
  console.log(`Mahasiswa ${e} adalah urutan ke - ${i + 1}`); // ini menggunakan forEach
});

// kalau menggunakan for of

for ([index, maha] of mahasiswa.entries()) {
  console.log(`Mahasiswa ${maha} adalah Mahasiswa ke - ${index + 1}`);
}

// untuk mengulang Node List

const ambilLi = document.querySelectorAll(".nama");

let printCoba = ``;

for (i of ambilLi) {
  printCoba += `Mahasiswa ${i.innerHTML} \n`;
}

console.log(printCoba);

// arguments

function jumlahkanAngka() {
  // KARENA ARUMENTS BERBEDA DENGAN ARRAY
  // MAKA TIDAK BISA MENGGUNAKAN FUNGSI REDUCE ATAUPUN FOR EACH
  let jumlah = 0;
  for (n of arguments) {
    jumlah += n;
  }

  return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// FOR ... IN
// hanya untuk numerable/ untuk object

const mhs = {
  nama: "favian",
  hobby: "Bunuh Diri",
};

for (m in mhs) {
  console.log(m); // hnya nama properti object
  console.log(mhs[m]); // isi dari properti object itu sendiri
}

// kuiz dari chat gpt

const superHeroes = ["Batman", "Superman", "Spiderman", "Iron Man"];

for ([i, s] of superHeroes.entries()) {
  console.log(`Super Hero ke - ${i + 1} : ${s}`);
}

const superheroInfo = {
  name: "Batman",
  realName: "Bruce Wayne",
  city: "Gotham",
  nemesis: "Joker",
};

for (g in superheroInfo) {
  console.log(`${g} : ${superheroInfo[g]}`);
}
