// js
let saludo = "hello"; // seria de forma inferida por el motor
// ts
let saludos: string = "hello"; // seria de forma explicita por el programador

saludos = 1; // error
saludos = 2; // error

const myNumber: number = 1;

myNumber = 2; // error

(() => {
  let myProductName = "Product";
  let myProductPrice = 123;
})();
