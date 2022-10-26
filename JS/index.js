/* Vinculo los nodos desde HTML con JS */
const div = document.getElementById("cards")
const boton = document.getElementById("id")
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")
const botonComprar = document.getElementById("botonComprar")
const botonVaciar = document.getElementById("botonVaciar")
const carritoIcon = document.getElementById("carritoIcon")

/* Declaro Carrito y lo dejo vacio */
let carrito = []



//el "if" para traer el localStorage se ejecuta despues de que cargue la pagina
/* document.addEventListener('DOMContentLoaded', () =>{
        monitores();
        if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
}
}) */

/* Declaro la funcion constructora de objetos */
function nuevoMonitor(id, marca, modelo , resolucion, precio, imagen){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.resolucion = resolucion,
        this.precio = precio,
        this.imagen = imagen
}

const comprar = (monitor) =>{
        Toastify({
                text: "Agregado al carrito",
                gravity: "bottom",
                className: "info",
                style: {
                        background: "8758FF",
                }
                }).showToast();
                console.log(carrito);
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
		console.log(id);
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
		console.log(productoRenderizado);
		div.append(productoRenderizado)
		const boton = document.getElementById(id)
		boton.addEventListener("click", () => comprar(nuevoMonitor)) 
	})	
	monitores = data
})

//Buscador de productos
const buscadorMonitores = (search) => {
	search = search.toLowerCase()
	let buscadorMonitores = monitores.find(monitor => monitor.marca.toLowerCase().includes(search))
	console.log(buscadorMonitores.marca);
	inputAfter.value = ``
}

//Doy funciones a los botones para poder buscar y vaciar
botonInput.addEventListener("click",() => buscadorMonitores(inputAfter.value));
carritoIcon.addEventListener("click",() => console.log(carrito))
botonVaciar.addEventListener("click", () => localStorage.clear(carrito))
botonVaciar.addEventListener("click", () => {carrito.length = 0 && Swal.fire({
        title: 'Seguro que desea vaciar el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Vaciar',
        denyButtonText: `Cancelar`,
        }).then((result) => {
        if (result.isDenied) {
        } else if (result.isConfirmed) {
                Swal.fire('Carrito vaciado')
        }
        })})
        
botonVaciar.addEventListener("click" , () => {
        carrito.length = 0
        actualizarCarrito(
)
})

const actualizarCarrito = () =>{
        contenedorCarrito.innerHTML=`;`
}

carrito.forEach(monitor => {
        const {nombre, imagen, cantidad, precio, id} = monitor
        const carritoActualizado = document.createElement('div');
                carritoActualizado.innerHTML =`
        <div class="card bg-dark mb-3" style="max-width: 400px;">
                <div class="row g-0">
                <div class="col-md-4 align-items-center imagen-carrito">
                <img src="${imagen}" class="img-fluid rounded" alt="Imagen Producto"/>
                </div>
                <div class="col-md-8">
                <div class="card-body card-carrito">
                        <h5 class="card-title text-white">${nombre}</h5>
                        <div class="input-group mt-4 mb-2">
                        <button class="btn btn-outline-secondary text-white" type="button" id="restar${id}"> - </button>
                        <input type="text" class="form-control" placeholder="${cantidad}" aria-label=" " aria-describedby="button-addon1">
                        <button class="btn btn-outline-secondary text-white" type="button" id="sumar${id}"> + </button>
                        </div>
                        <h6 class="card-text"><small class="text-white">Precio: $${precio}</small></h6>                      
                        <button id="eliminar${id}" class="eliminarItem rounded"><i class="fas fa-trash-alt mr-2 text-white"></i></button>
                </div> 
                </div>
                </div>
        </div>
        `
})




