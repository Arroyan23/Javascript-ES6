// CALLBACK
// synchronus callback
// ini akan jarang di gunakan

// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

function tampilkanPesan(callback) {
  const nama = prompt("Masukkan Nama : ");
  callback(nama);
}

tampilkanPesan((nama) => alert(`Halo ${nama}`));
// sebuah function.