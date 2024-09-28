// latihan tagged template

// const nama = "Bruce Wayne";
// const age = 17;

// function highlight(strings, ...values) {
//   let hasil = "";
//   strings.forEach(
//     (str, i) => (hasil += `${str}<strong>${values[i] || ""}</strong>`)
//   );
//   return hasil;
// }

// const result = highlight`Name : ${nama}, Age : ${age}`;

// console.log(result);

// kuiz reduce map filter

let numbers = [2, 5, 8, 10, 3, 7, 15, 20];
let coba = [3, 6, 7];
// menggunakan metode chaining

let ambilAngka = (masukArray) => {
  return masukArray
    .filter((e) => e > 5)
    .map((a) => a * 2)
    .reduce((acc, cur) => acc + cur);
};

console.log(ambilAngka(coba));
console.log(ambilAngka(numbers));

function introduce(name, age) {
  return `Hello, my name is ${name}, and i am ${age} years old`;
}

const result = introduce("Bruce Wayne", 17);
console.log(result);

const people = [
  { name: "Bruce Wayne", age: 17 },
  { name: "Clark Kent", age: 30 },
  { name: "Diana Prince", age: 28 },
];

// buatkan array yang baru

// ini jadinya satu string
const tempelPeople = `${people
  .map((e) => `Hallo nama saya ${e.name}, Saya Berumur ${e.age} \n`)
  .join("")}`;

console.log(tempelPeople);

// coba buat menjadi function

// ini akan menghasilkan array
function generateGreetings(people) {
  return people
    .map((e) => `Halo Nama Saya adalah ${e.name}, Dan saya Berumur ${e.age}`)
    .join("\n");
}

console.log(generateGreetings(people));