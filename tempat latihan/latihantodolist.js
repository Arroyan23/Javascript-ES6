// MEMBUAT TO - DO List sederhana

// ambil value dari input user pada html

const ambilInput = document.querySelector("#my-input");
const ambilDeskripsi = document.querySelector("#my-input-description");
const ambilTombol = document.querySelector("#my-button");
const ambilTombol2 = document.querySelector("#button-tampilkan");
const ambilLi = document.querySelector(".container-3");

// ambil value jika di klik tombol my buttton

let ambilPertama = "";
let ambilKedua = "";

const identifikasiValueKeObject = (obj, a, b, arr) => {
  const tambahObjek = new obj(a, b);
  arr.push(tambahObjek);
  return tambahObjek;
};
// buat object constructor untuk menampung data datanya

class ToDoList {
  constructor(judul, deskripsi, status = false) {
    (this.judul = judul), (this.deskripsi = deskripsi), (this.status = status);
  }
  toggleStatus() {
    return (this.status = !this.status);
  }
}

// buat array untuk mengisi objectnya

let arrToDoList = [];

ambilTombol.addEventListener("click", () => {
  ambilPertama = ambilInput.value;
  ambilKedua = ambilDeskripsi.value;
  identifikasiValueKeObject(ToDoList, ambilPertama, ambilKedua, arrToDoList);
});

// gunakan template literals untuk mencetak value dari tiap inputnya

function tampilkanHasil(arr) {
  return arr
    .map((e) => {
      return `Judul: ${e.judul} \nDeskripsi: ${e.deskripsi}`;
    })
    .join("\n");
}

// masukkan ke dalam element html

ambilTombol2.addEventListener("click", () => {
  const tampilkanKeHTML = /* html */ `
  <ul>
  <li>Judul: </li>
  </ul>
  `;

  return;
});
