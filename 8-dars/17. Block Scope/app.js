// Block Scop

"use strict";

let age = 24; // Global Scope

// if (true) {
//   console.log("If elsening ichidagi age", age);
// }

// console.log("Tashqi tomonda chiqarilgan age", age);

// Global Scope => js faylni ichada hohlagan joyimizda ishlatishimiz mumkin

// let age = 24; // bunaqa holda ishlatish mumkin emas

// age = 25

// if (true) {
//   let age = 26;
//   let ism = "Asilbek";
//   console.log("If elsening ichidagi age", age, ism);
// }

console.log("Tashqi tomonda chagirilgan age:", age);

// {} => scope (qamrov)

if (true) {
  let age = 26;
  let ism = "Asilbek";
  console.log("If elsening ichidagi age", age, ism);

  if (true) {
    console.log("Ikkinchi ifni ichi", age);
  }
}

// Scope ni ichidagi narsani tashqaridagi o'zgaruvchi olishi mumkin emas

if (true) {
  let asd = 41;
  if (true) {
    console.log(asd);
  }
}

// ota if ni ichida turgan ma'lumotni uni ichidagi bola if lari olishi mumkin

// lekin bola if ni ichidagi ma'lumotni ota if olishi mumkin emas
