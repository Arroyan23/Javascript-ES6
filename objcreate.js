// review membuat object pada javascript
// 1. object mahasiswa dengan object terpisah untuk makan dan main
// object kedua untuk data mahasiswa itu sendiri

// hubungkan dengan object.create

// buat object untuk function di object Mahasiswa

const aktivitasMahasiswa = {
  makan: function (porsi) {
    // variabel setelah this.(harus sama dengan nama function yang ada di dalam nama function object yang dituju)
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },
};
function Mahasiswa(nama, energi) {
  let dataMahasiswa = Object.create(aktivitasMahasiswa);
  dataMahasiswa.nama = nama;
  dataMahasiswa.energi = energi;
  // jika tidak menggunakan object create maka memanggilnya seperti dibawah ini
  // dataMahasiswa.makan = aktivitasMahasiswa.makan;
  return dataMahasiswa;
}

var mhs1 = Mahasiswa("Favian Rasyad", 10);

var mhs2 = Mahasiswa("Bobby", 12);
