// Spread Operator & Rest Parameter

// memecah iterables menjadi single element

const mhs = ["Favian", "Bunuh", "Diri"];
console.log(...mhs);
// pecah
console.log(...mhs[0]);

// menggabungkan kedua array

const dosen = ["Sammy", "bunuh", "binatang"];

const orang = [...mhs, "aji", ...dosen]; //bisa menggunakan concat namun tidak se fleksibel spread
// bisa menyisipkan nilai ditengah

console.log(orang);

// meng copy array

const mhs1 = mhs;
// dia tidak benar benar melakukan copy
mhs1[0] = "Bundir";
// kalo seperti itu dia tidak mengcopy jadi pengaruhb=nya sama
console.log(mhs);

const mhs2 = [...mhs];

mhs2[0] = "bunuh";
console.log(mhs);
console.log(mhs2);

// contoh implementasi pada html
// mengubah nodelist menjadi array

const ambilLi = document.querySelectorAll(".nama");

// ambil nodelistnya

const FBN = [...ambilLi].map((m) => m.textContent);

console.log(FBN);

FBN[0] = "Rasyad";

// untuk hover tiap text

const ambilh1 = document.querySelector(".container .favian");
const huruf = [ambilh1.innerHTML];
// jika tambah titik tittik / spread operator maka akan memisahkan tiap tiap huruf dalam array
console.log(huruf);
const pisahkan = [...ambilh1.innerHTML]
  .map((e) => `<span>${e}</span>`)
  .join("");

ambilh1.innerHTML = pisahkan;

// kuiz dari chat gpt
// Soal 1

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const gabungkan = [...arr1, ...arr2];
console.log(gabungkan);

// Soal 2
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { c: 3, d: 4, e: 5 };
const gabungObj = { ...obj1, ...obj2 };
console.log(gabungObj);

// Soal 3
// Salin array

const numbers = [10, 20, 30];
const copyNumbers = [...numbers];
console.log(copyNumbers);

// Soal 4
// Spread pada fungsi
function penjumlahan(a, b, c) {
  return a + b + c;
}

const values = [10, 20, 30];
console.log(penjumlahan(...values));

// REST PARAMETER

function jumlahkanAngka(...angka) {
  //   let bana = 0;
  //   for (const a of angka) {
  //     bana += a;
  //   }
  //   return bana;
  return angka.reduce((a, b) => a + b);
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5, 6, 7));

// array destructuring

const kelompok1 = ["Favian", "Rasyad", "Bunuh", "Sammy"];

const [ketua, wakil, ...anggota] = kelompok1;

console.log(anggota);

// object destructuring

const team = {
  pm: "Favian",
  frontEnd1: "Sammy",
  frontEnd2: "Azzam",
  backend: "Bunuh",
  us: "diri",
};

// jika ingin memisahkan

const { pm, ...myTeam } = team;

console.log(myTeam);

// melakukan filter pada parameter yang ada

function filterBy(type, ...values) {
  return values.filter((e) => typeof e === type);
}

const pilihYangDifilter = "number";

console.log(
  filterBy(
    pilihYangDifilter,
    1,
    2,
    "Favian",
    3,
    false,
    4,
    "Rasyad",
    5,
    6,
    "pembunuh",
    true
  )
);

// kuiz dari chat gpt

// soal 1

function sumAll(...valuess) {
  return valuess.reduce((a, b) => a + b);
}

console.log(sumAll(2, 3, 4, 5));

// soal 2

const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

// destructuring
const [apple, bananam, ...buahLain] = fruits;

console.log(buahLain);

// soal 3

function introduce(namaDepan, namaBelakang, ...informasiLainnya) {
  console.log(
    `Halo, nama saya ${namaDepan} ${namaBelakang}, saya ${informasiLainnya[0]}, tinggal di ${informasiLainnya[1]}, dan ${informasiLainnya[2]}`
  );
}

introduce("Bruce", "Wayne", "30 tahun", "Gotham", "Suka coding");

// kuiz dari chat gpt
// TAGGED TEMPLATE LITERALS
// mengubah menjad strong dalam elemen html

const nama = "Yeng";
const hobby = "Coding";

function highlight(str, ...value) {
  return str.reduce(
    (e, i, a) => `${e}${i}<strong>${value[a] || ""}</strong>`,
    ""
  );
}

const printPerkenalan = highlight`My name is ${nama} and i Love ${hobby}`;
console.log(printPerkenalan);

// kuiz dari chat gpt
// TEMPLATE LITERALS

const day = 5;
const month = "September";
const year = 2024;

function formatDate(day, month, year) {
  let urutan = "th";
  if (day == 1) {
    urutan = "St";
  } else if (day == 2) {
    urutan = "nd";
  } else if (day == 3) {
    urutan = "rd";
  }
  return `Today is ${day}${urutan} ${month}, ${year} `;
}

const today = formatDate(5, "September", 2024);
console.log(today);

// kuiz dari chat gpt

const Profile = {
  name: "Yeng",
  age: 17,
  hobbies: ["coding", "gaming", "reading"],
};

function createProfile({ name, age, hobbies }) {
  let hobbiesString;
  // jika hobi kosong
  if (hobbies.length == 0) {
    hobbiesString = "Has no hobbies";
  } else if (hobbies.length == 1) {
    hobbiesString = hobbies[0];
  } // gabungkan hobby
  else {
  } //menjadi pertanyaan
  const tempelProfile = `Meet ${name}, a ${age}-years-old who enjoys ${hobbiesString}`;
  return tempelProfile;
}

console.log(createProfile(Profile));

// kuiz dari chat gpt
// FOR OF FOR IN

// menghitung berapa vokalnyaz

function countVowels(objVowels) {
  const vowels = "aiueoAIUEO";
  let hitung = 0;

  for (o of objVowels) {
    // includes sudah merepresentasikan tiap karakter yang ada di dalam vowels
    if (vowels.includes(o)) {
      hitung += 1;
    }
  }

  return hitung;
}

const result = countVowels("Hello, how are youA");
console.log(result);

// kuiz dari chat gpt
// destructure

const userProfile = {
  name: "Bruce Wayne",
  age: 17,
  location: {
    city: "Gotham",
    country: "USA",
  },
  hobbies: ["coding", "parkour", "driving"],
  social: {
    instagram: "@batman",
    twitter: "@darkknight",
  },
};

const {
  name,
  age,
  location: { city },
} = userProfile;
const {
  social: { instagram },
} = userProfile;
const {
  hobbies: [, a],
} = userProfile;

// kuiz dari chat gpt

class Car {
  constructor(brand, model, year) {
    (this.brand = brand), (this.model = model), (this.year = year);
  }

  getCarInfo() {
    return `This car is a ${this.year} ${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo());

// kuiz dari chat gpt

const person = {
  name: "Bruce Wayne",
  age: 17,
  city: "Gotham",
};

const tasks = ["fighting crime", "driving Batmobile", "updating Batcomputer"];

function ambilObj(obj, arr) {
  let arrayTambahan = `${arr.slice(0, -1).join(", ")}, and ${
    arr[arr.length - 1]
  }`;
  // mengatur array dibagian akhir

  return `Halo my name is ${obj.name}, Im ${obj.age} years old, and i live in ${obj.city}, 
  today I will be ${arrayTambahan}
  `;
}

console.log(ambilObj(person, tasks));

// kuiz dari chat gpt

const names = "Bruce";
const task = "saving gotham";

function bold(str, ...values) {
  return str.reduce((a, b, i) => `${a}${b}**${values[i] || ""}**`, "");
}

const tempelIdentitas = bold`Hello, ${names}! your task today is ${task}`;

console.log(tempelIdentitas);

// tantangan membuat to do list:

// buat class untuk deskripsi to do list

class ToDoItem {
  constructor(tittle, description, completed = false) {
    (this.judul = tittle), (this.description = description);
    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

function masukkanToDoList(objToDoLis, judulList, deskripsiList, arrToDoList) {
  const ambilObj = new objToDoLis(judulList, deskripsiList);
  arrToDoList.push(ambilObj);
}

const toDoList = [];

const item1 = masukkanToDoList(
  ToDoItem,
  "Beli Susu",
  "Beli Susu di dekat rumah",
  toDoList
);
const item2 = masukkanToDoList(
  ToDoItem,
  "Beli java",
  "Beli Susu di dekat rumah",
  toDoList
);

// item1.toggleCompleted();
// ini akan error karena item1 adalah array maka ia tidak bisa mendefinisikan tersebut
toDoList[1].toggleCompleted();

function boldItem(str, ...value) {
  return str.reduce((a, b, c) => {
    return `${a}${b}${value[c] ? `**${value[c]}**` : ""}`; // cara ini tidak akan menambah string tambahan ke dalam console
  }, ""); //ini untuk menembalkan yang sudah ada
} //single funnction untuk nge bold

function displayItem(list) {
  return list
    .map(
      (e) =>
        e.completed
          ? boldItem`Judul: ${e.judul}, Deskripsi: ${e.description}` // jika true nmaka pakai tagged template boldItem
          : `Judul: ${e.judul}, Deskripsi: ${e.description}` // jika false maka jangan pake tagged template boldItem
    )
    .join("\n");
}

console.log(displayItem(toDoList));

