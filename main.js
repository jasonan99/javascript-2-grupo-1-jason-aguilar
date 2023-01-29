let numero = 123;
let palabra = "pedro";

function invertir (n) {
  let i = n.toString().split("").reverse().join("");
  return Number(i);
}

function mayuscula (p) {
  return p[0].toUpperCase() + p.slice(1);
}

console.log(invertir(numero));
console.log(mayuscula(palabra));