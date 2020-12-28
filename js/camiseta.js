ar __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
  // Método constructor
  function Camiseta(color, modelo, marca, talla, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }
  // Métodos (funciones o acciones del objeto)
  Camiseta.prototype.setColor = function (color) {
    this.color = color;
  };
  Camiseta.prototype.getColor = function () {
    return this.color;
  };
  return Camiseta;
}());
// Herencia
var Sudadera = /** @class */ (function (_super) {
  __extends(Sudadera, _super);
  function Sudadera() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Sudadera.prototype.setCapucha = function (capucha) {
    this.capucha = capucha;
  };
  Sudadera.prototype.getCapucha = function () {
    return this.capucha;
  };
  return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("fdas", "fads", "fdas", "fas", 12);
console.log(camiseta);
var sudaderaNike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 30);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor("Gris Jaspeado");
console.log(sudaderaNike);
