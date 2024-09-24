// menggunakan prototype namun membuatnya di dalam class

// operasinya akan menghasilkan output yang sama dengan menggunakan prototype

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  }

  main(jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat Main`);
  }

  tidur(jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, Selamat Tidur`);
  }
}

var bobby = new Mahasiswa("Favian Rasyad", 10);

var saputra = new Mahasiswa("Bobby Saputra", 12);
