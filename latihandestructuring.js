// destructuring

function penjumlahanPerkalian(a, b) {
  return [a + b, a * b, a - b, a / b];
}

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// maka lebih simple daripada menggunakan cara yang di atas
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// // bagaimana jika return valuenya bertambah?
// const [tambah, kurang, keli, bagi = "tidak ada"] = penjumlahanPerkalian(2, 3);
// // urutan sangat berpengaruh
// console.log(bagi);

// jika ingin tidak sesuai dengan urutan maka ganti returnnya dengan object

function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);

console.log(bagi);
console.log(kurang);
console.log(kali);

// jika returnnya object maka tidak perlu khawatir karena indexnya berdasarkan property
// yang ada di dlam object tersebut

// destructuring function argument
const mhs1 = {
  nama: "Favian Rasyad",
  umur: 33,
  email: "Bunuhdiri@gmail.com",
  nilai: {
    tugas: 60,
    uts: 70,
    uas: 80,
  },
};

// ini jika menggunakan cara yang biasa

// function cetakMhs(mhs1) {
//   return `halo, nama saya ${mhs1.nama}, saya berumur ${mhs1.umur} tahun`;
// }

// function cariRata(array) {
//   const sigma = array.reduce((a, c) => a + c);
//   return sigma / 3;
// }

// console.log(cetakMhs(mhs1));

// jika ingin menggunakan cara destructuring

function cetakMhs({ nama, umur, email, nilai: { tugas, uts, uas } }) {
  const CariRata = (tugas + uts + uas) / 3;
  return `Halo Perkenalkan Saya:
    nama: ${nama}
    umur: ${umur}
    email: ${email}
    nilai Tugas : ${tugas}
    nilai UTS : ${uts},
    nilai UAS : ${uas}
    dan rata rata nilai anda adalah: ${CariRata}
    `;
}

console.log(cetakMhs(mhs1));

// maka membuat outputnya menjadi lebih simple
// akan terpakai jika objectnya komplex

// sambil practect pembuatan object

class MahasiswaTeladan {
  constructor(names, umur, email, pekerjaan) {
    (this.nama = names),
      (this.sa = umur),
      (this.email = email),
      (this.pekerjaan = pekerjaan);
  }
}

const favianRasyad = new MahasiswaTeladan(
  "Favian Rasyad",
  23,
  "Favianrasyad@gmail.com",
  "Bunuh Diri"
);

const sammyAhmad = new MahasiswaTeladan(
  "Sammy Muchammad",
  23,
  "default@gmail.com",
  "Bunuh sesama binatang"
);

function ambilMahasiswa({ nama, sa, email, pekerjaan }) {
  return `Halo semua, nama saya ${nama}, Saya berumur ${sa} tahun,
    pekerjaan saya adalah ${pekerjaan}, anda bisa kontak saya di ${email}`;
}

console.log(ambilMahasiswa(favianRasyad));
console.log(ambilMahasiswa(sammyAhmad));

// kuiz dari chat gpt

const user = {
  name: "Bruce Wayne",
  age: 17,
  location: {
    city: "gotham",
    country: "usa",
  },
  hobbies: ["Fighting Crime", "Philantropy", "Travelling"],
};

function ambilDataUser({ name, age, location: { city }, hobbies }) {
  return `
  name : ${name}
  age : ${age}
  city : ${city}
  hobbies : ${hobbies.join(", ")}
  `;
}

console.log(ambilDataUser(user));

// kuiz chat gpt 2 arrow function

// menggunakan arrow function

const hitungPersegi = (panjang, lebar) => {
  return [panjang * lebar, panjang * 2 + lebar * 2];
};

const [luas, keliling] = hitungPersegi(5, 3);

console.log(luas);
console.log(keliling);

// mengambil input dari html

// const ambilInput = document.querySelector(".ambil-input-user .my-input");
// const ambilButton = document.querySelector(".ambil-input-user .button");

// let ambilValue = "";

// ambilButton.addEventListener("click", function () {
//   ambilValue = parseInt(ambilInput.value);
//   ambilInput.value = "";
// });

const hargaProdukUrutan = [1500000, 750000, 85000];
const [a, b, c] = hargaProdukUrutan;

const formattedNumber = (a) => {
  return new Intl.NumberFormat("ID-id").format(a);
};

function tampilKanFormat(e, ...values) {
  return e.reduce(
    (a, c, i) => `${a}${c}${formattedNumber(values[i] || "")}`,
    ""
  );
}

const stringFormat = tampilKanFormat`Harga Awal adalah: ${a}, 
Harga Kedua adalah: ${b}
Harga Ketiga Adalah : ${c}`;

console.log(stringFormat);

// membuat fungsi pengubah detik menjadi format menggunakan tagged temp literals

// for (let i = 0; i < waktu.length; i++) {
//   //   ubah terlebih dahulu detik ke jam
//   let jam = Math.floor(waktu[i] / 3660);
//   let sisaDetik = waktu[i] % 3600;
//   let menit = Math.floor(sisaDetik / 60);
//   const detikAkhir = sisaDetik % 60;
// }

function ubahWaktu(str, ...values) {
  return str.reduce((accumulator, current, index) => {
    // Menghitung jam, menit, dan detik dari values[index]
    const totalDetik = values[index];
    if (totalDetik !== undefined) {
      const jam = Math.floor(totalDetik / 3600);
      const sisaDetik = totalDetik % 3600;
      const menit = Math.floor(sisaDetik / 60);
      const detik = sisaDetik % 60;

      // Menggabungkan hasil ke dalam string
      return `${accumulator}${current}${jam} jam, ${menit} menit, ${detik} detik`;
    }
    return `${accumulator}${current}`;
  }, "");
}

// Contoh penggunaan
const detik1 = 3661;
const detik2 = 120;

const result = ubahWaktu`Durasi pertama adalah ${detik1}, durasi kedua adalah ${detik2}.`;
console.log(result);

// kuiz dari chat gpt tagged template literals

const nama = "Royan";
const age = 17;

function format(string, ...valuesss) {
  return string
    .map((e) => e.toUpperCase())
    .reduce((acc, curr, i) => {
      // nilai interpolasi dapat mengelompokkan expression itu sendiri
      const interPolatedValues = valuesss[i] ? `[Nilai : ${valuesss[i]}]` : "";
      return `${acc}${curr}${interPolatedValues}`;
    }, "");
}

const tempelString = format`Halo nama saya ${nama}, Saya berumur ${age} tahun`;

console.log(tempelString);
