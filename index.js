
class Monitor{
    constructor (marca,modelo,resolucion, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.resolucion = resolucion;
    this.precio = precio;
}
}

class Teclado{
    constructor (marca,modelo,precio, rgb){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.rgb = rgb;
    }
}



let productoStockMonitores = [];
productoStockMonitores.push(new Monitor ("Samsung", "Odyssey", 27, 90000));
productoStockMonitores.push(new Monitor ("Gadnic", "G4D41N-F", 24, 52393));
productoStockMonitores.push(new Monitor ("BENQ", "GW2480", 24, 54400));
productoStockMonitores.push(new Monitor ("Gigabyte", "G24f", 24, 75000));
productoStockMonitores.push(new Monitor ("Asus", "VA27EHE", 27, 120000));

let productoStockTeclados = [];
productoStockTeclados.push(new Teclado ("Redragon", "Shiva K512", 6300, "si"));
productoStockTeclados.push(new Teclado ("Hyper X", "Alloy core rgb", 11200, "si"));
productoStockTeclados.push(new Teclado ("Logitech", "K380", 6430, "no"));




console.log(productoStockMonitores);
console.log(productoStockTeclados);




/* let bienvenida = prompt ("Hola, queres comprar un monitor nuevo?")

while (bienvenida != "si" && seleccion != "no"){
    alert ("Por favor ingresá si o no")
    bienvenida = prompt ("Hola, queres comprar un monitor nuevo?");
}

if (bienvenida == "si"){

} */