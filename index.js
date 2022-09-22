
let bienvenida = prompt("Hola, bienvenido a la tienda Phietas, queres ver un producto de la tienda, si queres continuar ingresa si.");


while (bienvenida != "si"){
    alert ("Por favor ingresá si o no")
    bienvenida = prompt("Hola, bienvenido a la tienda Phietas, queres ver un producto de la tienda, si queres continuar ingresa si.");

}

if(bienvenida == "si"){
eleccion = prompt ("Hola, ¿Desea ver monitores o teclados?");
}



class monitor{
    constructor (marca,modelo,resolucion, precio, stock){
    this.id = id
    this.marca = marca;
    this.modelo = modelo;
    this.resolucion = resolucion;
    this.precio = precio;
    this.stock = stock;
}
}



class teclado{
    constructor (id,marca,modelo, precio,rgb, stock){
    this.id = id
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.rgb = rgb;
    this.stock = stock;

}
}


let monitor1 = new monitor (1,"Gadnic", "G4D41N-F", 24, 52393, 10);
let monitor2 = new monitor (2,"BENQ", "GW2480", 24, 54400, 7);
let monitor3 = new monitor (3,"Samsung", "Odyssey", 27, 90000, 5);
let monitor4 = new monitor (4,"Gigabyte", "G24f", 24, 75000, 4);
let monitor5 = new monitor (5,"Asus", "VA27EHE", 27, 120000, 2);


let teclado1 = new teclado (1,"Redragon", "Shiva K512", 6300, "si", 15);
let teclado2 =  new teclado (2,"Hyper X", "Alloy core rgb", 11200, "si", 8);
let teclado3 = new teclado (3,"Logitech", "K380", 6430, "no", 4);





console.log(monitor1);

function mostrarInventarioMonitor() {
alert(
    "",
);
monitor.forEach((monitor) => {
    alert(`
            ${monitor.nombre}
            $${monitor.precio}
        `);
});
}

function mostrarInventarioTeclado() {
    alert(
        "",
    );
    teclado.forEach((teclado) => {
        alert(`
                ${teclado.nombre}
                $${teclado.precio}
            `);
    });
    }



function mostrarStock(){
    alert("Estos son los productos que tenemos:");
    monitor.forEach(monitor => {
        monitor.forEach(t => {
        alert(`
        ${monitor.nombre}
        ${teclado.nombre}
        `
        )
    });
        
    });
}



