function getNumero1(numero = 12) {
  return "El número es: " + numero;
}

console.log(getNumero1(55));

function getNumero2(numero: number = 12): string {
  return "El número es: " + numero;
}

console.log(getNumero2(55));
