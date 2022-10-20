/* import { traerMonitores } from "../DB/traerMonitores.js" */

/* const traerMonitores = async () =>{
        const monitoresJson = await fetch("./DB/productos.json")
        .then((response)=>{
                return response.json();
        })
        .then ((data)=>{
                console.log(data);
                return data
        })        
        

        console.log(monitoresJson);

} */

const traerMonitores = async() =>{
        const response = await fetch("./DB/productos.json")
        const data = response.json ()
        console.log(data);
}

const monitores = await traerMonitores()
console.log(monitores);


const div = document.getElementById("cards")
const boton = document.getElementById("boton")
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")
const botonComprar = document.getElementById("botonComprar")
const listaProductosComprados = document.getElementById("listaProductosComprados")
const botonVaciar = document.getElementById("botonVaciar")
const carritoIcon = document.getElementById("carritoIcon")


localStorage.setItem("carrito", JSON.stringify(monitores));


function nuevoMonitor(id, nombre, precio, imagen){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.resolucion = resolucion,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad = 1
}


let carrito = []
monitores.forEach(monitores => {
        const {id, marca, modelo, resolucion, precio, imagen} = monitores
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


const comprar = (monitores) =>{
        let productoComprado = carrito.find(item => item.id === monitores.id)
        productoComprado === undefined ? carrito.push({ ...monitores, cantidad: 1 }) : productoComprado.precio = productoComprado.precio + monitores.precio 
        productoComprado.cantidad++ 
        Toastify({
                text: "Agregado al carrito",
                className: "info",
                style: {
                        background: "8758FF",
                }
                }).showToast();
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
        confirmButtonText: 'Vaciar',
        denyButtonText: `Cancelar`,
        }).then((result) => {
        if (result.isDenied) {
        } else if (result.isConfirmed) {
                Swal.fire('Carrito vaciado',)
        }
        }))

