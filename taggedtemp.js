// tagged templates
const nama = "Favian Rasyad";
const umur = 33;

// jadi di dalam function coba utk tagged literals
// urutan pertama dalam parameternya adalah untuk string yang dipisahkan oleh expression
// urutan selanjutnya adalah urutan expression yang telah kita susun dalam string literals
// agar tidak menulis terlalu banyak value kita dapat mengubah parameter selanjutnya dengan
// ...value (rest parameter) dapat menampung seluruh template literals
function coba(string, ...values) {
  //   return value;
  //   kita bisa menggabungkan keseluruhan dari function ini seperti
  //   - > string[0] + expression[0] + string[1] + expression[1] + string [2]
  // di atas menggunakan looping dengan penggabungan
  //   ini jika menggunakan for each
  //   let result = "";
  //   string.forEach((str, i) => {
  //     result += `${str}${values[i]}` || ""; //cara untuk ngakalin dibagian akhir masih terdapat bilangan undefined
  //     // karena seperti dilihat string indexnya sampai 2 sedangkan expression indexnya hanya 1
  //   });

  // kita bisa menggunakan reduce yang paling gampang
  //   higher order function
  return string.reduce((acc, str, i) => `${acc}${str}${values[i]}`, ""); //kasih tanda kutip kosong karena awalnya akan melahirkan string baru yang mulanya kosong
}

// akan memecah tiap string yang dipisahkan oleh expression
// expression disimpan pada parameter berikutnya dalam function coba
const str = coba`Halo nama saya ${nama}, Saya berumur ${umur} tahun`;

console.log(str);

// kegunaannya bisa untuk mengedit bagian tertentu
// contoh

const namaPanggilan = "bopay";
const mataKuliah = "Finance";

function panggil(strings, ...values) {
  // coba dulu menggunakan for each
  //   let result = ""; 
  //   strings.forEach((str, i) => (result += `${str}${values[i]}`));
  //   return result;
  // coba gunakan reduce
  return strings.reduce((a, b, i) => `${a}${b}${values[i] || ""}`, "");
}

const tempelkanFungsiString = panggil`Halo nama saya ${namaPanggilan}, Saya mempelajari mata kuliah ${mataKuliah}
`;

console.log(tempelkanFungsiString);

// untuk esok hari buat valuesnya dikelompokkan menjadi div dan dapat di atur backgroundnya

