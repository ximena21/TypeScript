// Clase (molde del objeto)
class Camiseta {

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
