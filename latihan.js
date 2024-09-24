// 1. ambil semua elemen video

const videos = Array.from(document.querySelectorAll("[data-manakal]"));

// 2. pilih hanya yang javascript lanjutan
// menggunakan fitur filter

let newPlaylist = videos
  // ambil yang ada tulisan javascript lanjutan dengan menggunakan filter
  .filter((p) => p.textContent.includes("JAVASCRIPT LANJUTAN"))

  .map((e) => e.dataset.manakal)

  .map((waktu) => {
    // 10 : 30 pecah keduanya menadi array -> [10,30]
    // pecah waktunya dengan menggunakan map
    // split akan menghasilkan array yang baru
    // [10:30, 20:30] - > [[10,30][20,30]]
    // disini ubah semua string menjadi float dengan menggunakan map lagi
    const parts = waktu.split(":").map((part) => parseFloat(part));
    // yang dibentuk array baru adalah parts tersebut
    return parts[0] * 60 + parts[1];
    //sehingga menghasilkan return yang didalamnya dapat dikali
  })

  .reduce((acc, cur) => acc + cur);

// saatnya merubah menjadi jam

const jam = Math.floor(newPlaylist / 3600);
const jsLanjut = newPlaylist - jam * 3600;
// merubah menjadi menit

const menit = Math.floor(jsLanjut / 60);

// mengubah menjadi detik

const detik = jsLanjut - menit * 60;

// console.log(newPlaylist / 3600);

// console.log(jamGenap);

// masukkan hasilnya ke dalam html menggunakan DOM

const pDurasi = document.querySelector(".total-durasi");

pDurasi.textContent = `${jam} Jam, ${menit} menit, ${detik} detik`;

// masukkan total vidionya

const pTotal = document.querySelector(".jumlah-video");

const ambilJumlah = videos.filter((e) =>
  e.textContent.includes("JAVASCRIPT LANJUTAN")
);

pTotal.textContent = `${ambilJumlah.length} Video`;
