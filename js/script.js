class Producto {
    constructor(nombreProducto, precioProducto) {
        this.nombre = nombreProducto
        this.precio = precioProducto
    }
}

//OPTIMIZACION//

let productos = JSON.parse(localStorage.getItem('storageProductos')) ?? []


const form = document.getElementById('idForm')
const botonProductos = document.getElementById('idBotonProducto')
const divProductos = document.getElementById('divProductos')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    let datForm = new FormData(e.target)
    const producto = new Producto (datForm.get('nombre'),datForm.get('precio'))
    productos.push(producto)
    localStorage.setItem('storageProductos', JSON.stringify(productos))
    form.reset()
})

//Agregando Libreria//
const botonStock = document.getElementById('botonStock')

botonStock.addEventListener('click', ()=> {
    Swal.fire({
        icon: 'success',
        title: 'Producto agregado al stock',
        text: ''
        
    })

})

botonProductos.addEventListener('click', () => {
    let productosStorage = JSON.parse(localStorage.getItem('storageProductos'))
    divProductos.innerHTML = ""
    productosStorage.forEach((producto,indice) => {
        divProductos.innerHTML += `
            <div class="card border-primary mb-3" id="producto${indice}" style="max-width: 20rem;margin:4px;">
                <div class="card-header">Producto: ${producto.nombre}</div>
                <div class="card-body">
                <h4 class="card-title">Precio: $${producto.precio}</h4>
                <button class="btn btn-danger">Eliminar Producto</button>
                </div>
            </div>
        `
    })

    productosStorage.forEach((producto, indice) => {
        document.getElementById(`producto${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
            document.getElementById(`producto${indice}`).remove()
            productos.splice(indice, 1)
            localStorage.setItem('storageProductos', JSON.stringify(productos))
            console.log(`${producto.nombre} eliminada`)
            console.log(productos)
        })
    })
})

//FETCH//

const divDolar = document.getElementById('divDolar')
fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(({blue}) => {
    
    divDolar.innerHTML = `
    <p>Dolar blue: $${(blue)} ARS</p>
    ` 
})

setInterval(() => {

    fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(({blue}) => {
    divDolar.innerHTML = ""
    divDolar.innerHTML = `
    <p>Dolar blue: $${(blue)} ARS </p>
    ` 
})
}, 30000)
