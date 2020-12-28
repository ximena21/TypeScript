var bicicleta = {
  color: "Rojo",
  modelo: "BMX",
  frenos: "De disco",
  velocidadMexima: "60km",
  cambiaColor: function(nuevoColor) {
    // bicicleta.color = nuevoColor;
    this.color = nuevoColor;
    console.log(this);
  }
};

bicicleta.cambiaColor("Azul");
