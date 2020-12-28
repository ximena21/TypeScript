// Creación de un nuevo tipo de dato
type letrasNumeros = string | number;

// String
let cadena: letrasNumeros = "victorrobles.es";
cadena = 20;

// Number
let numero: number = 12;

// Booleano
let verdaderoFalso: boolean = true;

// Any
let cualquiera: any = "hola";
cualquiera = 77;

// Arrays
var lenguajes: Array<any> = ["PHP", "JS", "CSS", 12];
let years: number[] = [12, 13, 14];

console.log(cadena, numero, verdaderoFalso, cualquiera, lenguajes, years);
