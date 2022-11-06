/* Vinculo los nodos desde HTML con JS */
const div = document.getElementById("cards")
const boton = document.getElementById("id")
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")
const botonComprar = document.getElementById("botonComprar")
const botonVaciar = document.getElementById("botonVaciar")
const carritoIcon = document.getElementById("carritoIcon")
const carritoTable = document.getElementById("carritoTable")
const botonComprarTodo = document.getElementById("botonComprarTodo")

/* Declaro Carrito y lo dejo vacio */
let carrito = []

/* Declaro la funcion constructora de objetos */
function nuevoMonitor(id, marca, modelo , resolucion, precio, imagen){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.resolucion = resolucion,
        this.precio = precio,
        this.imagen = imagen
        this.cantidad = 1
}

// Funcion de Comprar productos
const comprar = (monitor) =>{
        Toastify({
                text: "Agregado al carrito",
                gravity: "bottom",
                className: "info",
                style: {
                        background: "8758FF",
                }
                }).showToast();
                let productoComprado = carrito.find(item => {
                        console.log(`item`, item);
                        return item.id === monitor.id
})
                productoComprado == undefined 
                ? carrito.push({ ...monitor, cantidad: 1 }) 
                : (productoComprado.precio = productoComprado.precio + monitor.precio,
                productoComprado.cantidad++);
                localStorage.setItem("carrito", JSON.stringify(carrito)); 
                
}

//Traigo los productos desde el JSON y los renderizo 
//Aplico Desestructuración
let monitores 
fetch("./DB/productos.json")
.then(response => response.json())
.then(data => {
	data.forEach (nuevoMonitor => {
		const {id, marca, modelo, resolucion, precio, imagen} = nuevoMonitor
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
		const boton = document.getElementById(id)
		boton.addEventListener("click", () => comprar(nuevoMonitor)) 
	})	
	monitores = data
})

// Modal carrito
const dibujarCarrito = () => {
        carritoTable.innerHTML = ``
        carrito.forEach(productoCarrito => {
		const {id, marca, cantidad, precio, imagen} = productoCarrito
        let itemRenderizado = document.createElement("tr")
        itemRenderizado.innerHTML =  
        `
                <td><img class="fotoProductoCarrito" src="${imagen}" alt="imagen producto"></td>
                <td><p class="nombreProducto">${marca}</p></td>
                <td><p class="cantidadProducto">${cantidad}</p></td>
                <td><p class="precioProducto">$${precio}</p></td>
                <td><button id="sumar${id}" class="sumar btn btn-success">+</button></td>
                <td><button id="restar${id}" class="btn btn-danger">-</button></td>
        `
        carritoTable.append(itemRenderizado)
        const sumar = document.getElementById(`sumar${id}`)
        const restar = document.getElementById(`restar${id}`)
        sumar.addEventListener("click", () => sumarProducto(productoCarrito))
        restar.addEventListener("click", ()=> restarProducto(productoCarrito)) 
        })    
}

//Funcionalidad de restar y sumar un mismo producto desde el carrito
const sumarProducto = (monitorCarrito) => {
        let productoOriginal = monitores.find(item => item.id === monitorCarrito.id)
        let productoModificar = carrito.find(item => item.id === monitorCarrito.id)
        productoModificar.precio = productoModificar.precio + productoOriginal.precio
        productoModificar.cantidad = productoModificar.cantidad + 1
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        dibujarCarrito()
        console.log(productoModificar);
}

const restarProducto = (monitorCarrito) => {
        let productoOriginal = monitores.find(item => item.id === monitorCarrito.id)
        let productoABorrar = carrito.find(item => item.id === monitorCarrito.id)
        let indice = carrito.findIndex(item => item.id === monitorCarrito.id)
        productoABorrar.precio = productoABorrar.precio - productoOriginal.precio
        productoABorrar.cantidad = productoABorrar.cantidad - 1
        if(productoABorrar.cantidad <1){
                carrito.splice(indice, 1)
        }
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        dibujarCarrito()
        console.log(productoABorrar)
}

// Mantiene los productos del carrito aunque se actualice la pagina
const revisarStorage = () => {
        carrito.length = 0
        const storage = JSON.parse(localStorage.getItem("carrito"))
        if(storage !== null){
                carrito = storage
        }
}

//Buscador de productos por consola
const buscadorMonitores = (search) => {
	search = search.toLowerCase()
	let buscadorMonitores = monitores.find(monitor => monitor.marca.toLowerCase().includes(search))
	console.log(buscadorMonitores.marca);
	inputAfter.value = ``
}

//Doy funciones a los botones para poder buscar, vaciar y comprar
botonInput.addEventListener("click",() => buscadorMonitores(inputAfter.value));
carritoIcon.addEventListener("click",() => console.log(carrito))
carritoIcon.addEventListener("click",() => dibujarCarrito())
botonVaciar.addEventListener("click", () => localStorage.clear(carrito))
botonVaciar.addEventListener("click", () => {
        carrito.length = 0 
        Swal.fire({
        title: 'Seguro que desea vaciar el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Vaciar',
        denyButtonText: `Cancelar`,
        }).then((result) => {
        if (result.isDenied) {
        } else if (result.isConfirmed) {
                Swal.fire('Carrito vaciado')
                carritoTable.innerHTML = ``
        }
        
        })})
botonComprarTodo.addEventListener("click", () => 
Swal.fire('Productos Comprados!')
)

revisarStorage()




