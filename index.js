
let bienvenida = prompt("Hola, bienvenido a la tienda Phietas, ¿Desea ver monitores o teclados?");



while (bienvenida !== "") {
    if (bienvenida == "monitores") {
        mostrarInventarioMonitor()
        break;
    } else if (bienvenida == "teclados") {
        mostrarInventarioTeclado()
        break;
    }
}




class monitor{
    constructor (id, marca, modelo,resolucion, precio, stock){
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.resolucion = resolucion;
    this.precio = precio;
    this.stock = stock;
}
}



class teclado{
    constructor (id,marca,modelo, precio,rgb, stock){
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.rgb = rgb;
    this.stock = stock;

}
}


let monitores = []
let teclados = []

let monitor1 = new monitor (1,"Gadnic", "G4D41N-F", 24, 52393, 10);
let monitor2 = new monitor (2,"BENQ", "GW2480", 24, 54400, 7);
let monitor3 = new monitor (3,"Samsung", "Odyssey", 27, 90000, 5);
let monitor4 = new monitor (4,"Gigabyte", "G24f", 24, 75000, 4);
let monitor5 = new monitor (5,"Asus", "VA27EHE", 27, 120000, 2);


let teclado1 = new teclado (1,"Redragon", "Shiva K512", 6300, "si", 15);
let teclado2 =  new teclado (2,"Hyper X", "Alloy core rgb", 11200, "si", 8);
let teclado3 = new teclado (3,"Logitech", "K380", 6430, "no", 4);

monitores.push(monitor1,monitor2,monitor3,monitor4,monitor5);
teclados.push(teclado1,teclado2,teclado3);



function mostrarInventarioMonitor() {
    monitores.forEach((monitores) => {
    alert(    `
            Monitor: ${monitores.modelo}
            Precio: ${monitores.precio}
        `);
    });
}


function mostrarInventarioTeclado() {
    teclados.forEach((teclados) => {
    alert(    `
            Monitor: ${teclados.modelo}
            Precio: ${teclados.precio}
        `);
    });
}

mostrarInventarioMonitor()
mostrarInventarioTeclado()
console.log(mostrarInventarioMonitor);















