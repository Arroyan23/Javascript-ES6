// PROTOTYPE
// jadi pemanggilan function diluar object tidak memerlukan untuk
// membuat object yang baru

function Mahasiswa(nama, energi) {
  // let mahasiswaData = Object.create(namaObject)
  // let mahasiswaData = Object.create(namaObject.prototype)
  // sehingga bisa dimanfaatkan prototype nya
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log(`Halo ${this.nama}, Selamat Makan!`);
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  console.log(`Halo ${this.nama}, selamat bermain`);
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  console.log(`Halo ${this.nama}, Selamat Tidur`);
};

var bobby = new Mahasiswa("Favian Rasyad", 10);

var saputra = new Mahasiswa("Bobby Saputra", 12);

// versi class dimana prototype dapat disimpan didalam kelas tersebut
