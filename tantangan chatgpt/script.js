// Kuiz dari chat gpt

// membuat manajemen buku

class Book {
  constructor(title, author, isRead = false) {
    this.title = title;
    this.author = author;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}

const bukuKedua = new Book("1984", "George Owell");

let listBuku = [];

function addBuku(arr, obj) {
  return arr.push(obj);
}

const sudahDibaca = addBuku(listBuku, new Book("Harry Potter", "JK Rowlings"));
addBuku(listBuku, new Book("1984", "George Owell"));

listBuku[0].toggleReadStatus();

function removeBook(arr, index) {
  arr.splice(index - 1, 1);
}

removeBook(listBuku, 2);

function boldItem(str, ...values) {
  return str.reduce(
    (a, b, c) => `${a}${b}${values[c] ? `**${values[c]}**` : ""}`,
    ""
  );
}

function tampilkanBuku(arr) {
  return arr
    .map((e) =>
      e.isRead
        ? boldItem`Judul: ${e.title}\nAuthor: ${e.author}`
        : `Judul: ${e.title} \nAuthor: ${e.author}`
    )
    .join("\n");
}

console.log(tampilkanBuku(listBuku));
