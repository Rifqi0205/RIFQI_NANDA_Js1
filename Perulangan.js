// Contoh penggunaan if, else if, dan nested if
let nilai = 95;

if (nilai >= 95) {
  console.log("Selamat! Anda mendapatkan nilai A");
} else if (nilai >= 90) {
  console.log("Anda mendapatkan nilai B");
} else if (nilai >= 80) {
  console.log("Anda mendapatkan nilai C");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai D");
} else {
  console.log("Anda mendapatkan nilai E");
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
while (count < 10) {
  console.log("perulangan " + (count + 1));
  count++;
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
