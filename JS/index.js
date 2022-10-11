const div = document.getElementById("cards")
const boton = document.getElementById("boton")
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")
const botonComprar = document.getElementById("botonComprar")
const listaProductosComprados = document.getElementById("listaProductosComprados")
// const contenedorCarrito = document.getElementById(`carrito-contenedor`)
const botonVaciar = document.getElementById("botonVaciar")


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
},
{
        id: 6,
        marca: "Viewsonic",
        modelo: "Vx2768",
        resolucion: 27,
        precio: 100499, 
        imagen : "https://http2.mlstatic.com/D_NQ_NP_614055-MLA50623198260_072022-O.webp"        
},
{
        id: 7,
        marca: "Viewsonic",
        modelo: "Xg2431",
        resolucion: 24,
        precio: 115869, 
        imagen : "https://http2.mlstatic.com/D_NQ_NP_665087-MLA49041346064_022022-O.webp"        
},
{
        id: 8,
        marca: "Samsung",
        modelo: "F24T35",
        resolucion: 24,
        precio: 54599, 
        imagen : "https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp"        
},
{
        id: 9,
        marca: "Samsung",
        modelo: "Odyssey G3",
        resolucion: 24,
        precio: 70699, 
        imagen : "https://http2.mlstatic.com/D_NQ_NP_926028-MLA48705312123_122021-O.webp"        
},
{
        id: 10,
        marca: "LG",
        modelo: "29WP500",
        resolucion: 29,
        precio: 89900, 
        imagen : "https://http2.mlstatic.com/D_NQ_NP_818868-MLA48049743458_102021-O.webp"        
}
]

let carrito = []
localStorage.setItem("carrito", JSON.stringify(monitores));

monitores.forEach(monitores => {
        const {id,marca,modelo,resolucion,precio,imagen} = monitores
        let productoRenderizado = document.createElement("div")
        productoRenderizado.innerHTML = `
        <div class="card" style="width: 18rem;">
                <img src="${imagen}" class="card-img-top" alt="Gadnic">
        <div class="card-body">
                <h5 class="marca">${marca}</h5>
                <p class="modelo">Modelo:</p>
                <p class="modelo"> ${modelo}</p>
                <p class="resolucion">Resolución: ${resolucion}</p>
                <p class= "precio">Precio: $${precio}</p>
        </div>
                <button id="${id}" class="comprar">Comprar</button>
        </div>
        `
        div.append(productoRenderizado)
        const boton = document.getElementById(monitores.id)
        boton.addEventListener("click", () => comprar(monitores))
})
/* Realiza la funcion de agregar al carrito, si es la 1era vez agrega todo el producto y sino suma +1 a la */
/* const comprar = (monitores) =>{
        let productoComprado = carrito.find(item => item.id === monitores.id)
        if (productoComprado === undefined){
        carrito.push({
////Doy uso al Spread para abreviar y resumir codigo
                ...monitores,
                cantidad: 1
        })

        }else{
        productoComprado.precio = productoComprado.precio + monitores.precio
        productoComprado.cantidad++ /* = productoComprado.cantidad + 1 */



const comprar = (monitores) =>{
        let productoComprado = carrito.find(item => item.id === monitores.id)
        productoComprado === undefined ? carrito.push({ ...monitores, cantidad: 1 }) : productoComprado.precio = productoComprado.precio + monitores.precio 
        productoComprado.cantidad++ 
}

const buscadorMonitores = (input) => {
        console.log(input)
        let buscadorMonitores = monitores.find(monitores => monitores.marca.includes(input))
        console.log(buscadorMonitores.id);
        inputAfter.value = ``
}


listaProductosComprados.addEventListener("click",() => console.log(carrito))
listaProductosComprados.addEventListener("click",() => localStorage.setItem("carrito", JSON.stringify(carrito)))
botonVaciar.addEventListener("click", () => localStorage.clear(carrito))
botonVaciar.addEventListener("click", () => carrito = [] && Swal.fire({
        title: 'Seguro que desea vaciar el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Conservar',
        denyButtonText: `Vaciar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        } else if (result.isDenied) {
          Swal.fire('Carrito vaciado',)
        }
      }))

