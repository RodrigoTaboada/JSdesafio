const div = document.getElementById("cards")
console.log(cards);

let monitores = [
    {
        id: 1,
        marca: "Gadnic",
        modelo: "G4D41N-F",
        resolucion: 24,
        precio: 52393,
        imagen : "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/MON00121/1000x1000-MON00121.jpg&w=1000&q=100"        

},
{
        id: 2,
        marca: "BENQ",
        modelo: "GW2480",
        resolucion: 24,
        precio: 54400,
        imagen : "https://http2.mlstatic.com/D_NQ_NP_753276-MLA45212632297_032021-O.webp"        
},
{
        id: 3,
        marca: "Samsung",
        modelo: "Odyssey G5",
        resolucion: 27,
        precio: 90000,
        imagen : "https://http2.mlstatic.com/D_NQ_NP_629742-MLA50170137833_062022-O.webp"        
        
},
{
        id: 4,
        marca: "Gigabyte",
        modelo: "G24f",
        resolucion: 24,
        precio: 75000,
        imagen : "https://http2.mlstatic.com/D_NQ_NP_988574-MLA48049744030_102021-O.webp"        
},
{
        id: 5,
        marca: "Asus",
        modelo: "VA27EHE",
        resolucion: 27,
        precio: 120000, 
        imagen : "https://http2.mlstatic.com/D_NQ_NP_665931-MLA45212708615_032021-O.webp"        
}
]








monitores.forEach(item => {
    let productoRenderizado = document.createElement("div")
    productoRenderizado.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="Gadnic">
    <div class="card-body">
        <h5 class="card-text">${item.marca}</h5>
        <p>Resolución: ${item.resolucion}</p>
        <p>Precio: $${item.precio}</p>
    </div>
    </div>
    `
    div.append(productoRenderizado)
})



















