// HIGHER ORDER FUNCTION
// memiliki function di dalam argumen function itu sendiri

function kerjakanTugas(nama, selesai) {
  console.log(`Halo ${nama}, Selamat mengerjakan tugass`);
  selesai();
}

function selesai() {
  alert("Selamat anda sudah mengerjakan tugas");
}

kerjakanTugas("Sammy", selesai);

// di atas adalah contoh higher order function

// fungsinya adalah membuat suatu program sesederhana mungkin

// misal membuat pengulangan

// bisa memakai for
// atau buat function untuk parameternya

function repeatLog(n, aksi) {
  for (let i = 0; i < n; i++) {
    aksi(i);
  }
}

const konsol = console.log;
const peringatan = alert;

repeatLog(4, konsol);

repeatLog(10, peringatan);

// kita bisa menentukan lewat fungsi lebih fleksibel
// dengan terbiasa membuat sesuatu menjadi function
// maka kita mengalami pendekatan functional programming
// dan membuat program kita lebih efektif
