// Contoh penggunaan if, else if, dan nested if
let hasil = 95;

if (hasil >= 95) {
  console.log("Selamat! hasil yang anda dapatkan adalah A");
} else if (hasil >= 90) {
  console.log("hasil yang anda dapatkan adalah B");
} else if (hasil >= 80) {
  console.log("hasil yang anda dapatkan adalah C");
} else if (hasil >= 70) {
  console.log("hasil yang anda dapatkan adalah D");
} else {
  console.log("hasil yang anda dapatkan adalah E");
}

// Contoh penggunaan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari ini pergi ke kampus");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur");
    break;
  default:
    console.log("Hari ini tidak jelas");
}

// Contoh penggunaan for statement
for (let x = 1; x <= 9; x++) {
  console.log("Hari per " + x);
}

// Contoh penggunaan while loop
let count = 0;
while (ulang < 10) {
  console.log("perulangan " + (ulang + 1));
  ulang++;
}

// Contoh penggunaan do-while loop
let nomer = 3;
do {
  console.log("nomer: " + nomer);
  nomer++;
} while (nomer <= 8);

// Contoh penggunaan function
function tambah(x, y) {
  return x + y;
}
let hasilPenambahan = tambah(9, 20);
console.log("Hasil penambahan: " + hasilPenambahan);
