// Interface
interface CamisetaBase {
  setColor(color);
  getColor();
}

// Decorador
function estampar(logo: string) {
  return function(target: Function) {
    target.prototype.estampacion = function(): void {
      console.log("Camiseta estampada con el logo de: " + logo);
    }
  }
}

// Clase (molde del objeto)
// @estampar("Gucci Gang")  --> checar la nueva notación
class Camiseta implements CamisetaBase {

  // Propiedades (características del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  // Método constructor
  constructor(color, modelo, marca, talla, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }

  // Métodos (funciones o acciones del objeto)
  public setColor(color) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }
}

// Herencia
class Sudadera extends Camiseta {
  public capucha: boolean;

  setCapucha(capucha: boolean) {
    this.capucha = capucha;
  }

  getCapucha(): boolean {
    return this.capucha;
  }
}

var camiseta = new Camiseta("fdas", "fads", "fdas", "fas", 12);
console.log(camiseta);
// camiseta.estampacion();

var sudaderaNike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 30);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor("Gris Jaspeado");

console.log(sudaderaNike);
