// Clase (molde del objeto)
var Camiseta = /** @class */ (function() {
  // Método constructor
  function Camiseta(color, modelo, marca, talla, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }
  // Métodos (funciones o acciones del objeto)
  Camiseta.prototype.setColor = function(color) {
    this.color = color;
  };
  Camiseta.prototype.getColor = function() {
    return this.color;
  };
  return Camiseta;
}());
