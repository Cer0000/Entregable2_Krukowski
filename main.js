let listaDeProductos = JSON.parse(localStorage.getItem("Productos")) || []


class Producto {
    constructor(id, producto, precio) {
        this.id = id
        this.producto = producto
        this.precio = precio
    }
}


function agregarProducto() {
    const inputId = document.getElementById('input-id').value
    const inputProducto = document.getElementById('input-producto').value
    const inputPrecio = document.getElementById('input-precio').value

    
    const productoExistente = listaDeProductos.some(producto => 
        producto.id === inputId || producto.producto.toLowerCase() === inputProducto.toLowerCase()
    )

    if (productoExistente) {
        console.error("El ID o el nombre del producto ya existen. Por favor, ingresa uno diferente")
        return
    }else if ((inputId === "") || (inputProducto === "") || (inputPrecio === "")) {
        console.error("Complete todos los datos para agregar el producto")
        return
    }


    const nuevoProducto = new Producto(inputId, inputProducto, inputPrecio)

    
    listaDeProductos.push(nuevoProducto)

    
    localStorage.setItem("Productos", JSON.stringify(listaDeProductos))

    
    document.getElementById('input-id').value = ''
    document.getElementById('input-producto').value = ''
    document.getElementById('input-precio').value = ''

    console.log("Agregaste un nuevo producto")
}


function mostrarProductos() {
    const productos = JSON.parse(localStorage.getItem("Productos")) || []
    console.log(productos)
}


function borrarProducto() {
    localStorage.clear()
}


document.getElementById("add").addEventListener("click", agregarProducto)
document.getElementById("mostrar").addEventListener("click", mostrarProductos)
document.getElementById("delete").addEventListener("click", borrarProducto)
