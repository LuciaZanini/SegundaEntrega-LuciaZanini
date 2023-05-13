// Arrays y Objetos

let mates = [
    { nombre: "Zeus", precio: 2000 },
    { nombre: "Atenas", precio: 1500 },
    { nombre: "Arquimedes", precio: 1300 }
];

// Declaro carrito de compras (array vacio)
let carrito = [];

// Función para agregar un producto al carrito (recibe un producto como parametro y lo agrega al arreglo vacio utilizando push)
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log("Producto agregado al carrito: " + producto.nombre);
}

// Función para calcular el total de la compra. Recorre el array carrito y suma los precios de los productos para llegar al total.
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

// Mensaje de bienvenida
alert("Bienvenidx a Your Best Mate. Vamos a armar tu carrito de compras.");

// Interaccion con el usuario mediante prompt() para que ingrese los productos que desea agregar al carrito
let cantidadProductos = parseInt(prompt("Ingresa la cantidad de productos que deseas agregar al carrito:"));

// Funcion para validar que la cantidad ingresada sea un número válido
if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
    alert("La cantidad ingresada no es válida. Inténtalo nuevamente.");
} else {
    // Bucle for, solicito el nombre del producto que se agregará al carrito. 
    for (let i = 0; i < cantidadProductos; i++) {
        // Entonces declaro variable y uso prompt() para obtener el nombre y se almacena en la variable nombreProducto.
        let nombreProducto = prompt("Ingresa el nombre del producto #" + (i + 1) + ":");

        // Utilizo el find() en el arreglo mates para buscar el producto ingresado por el usuario. 
        let productoSeleccionado = mates.find(producto => producto.nombre === nombreProducto);

        // Validar si se encontró el producto
        if (productoSeleccionado) {
            agregarAlCarrito(productoSeleccionado);
            alert("Producto agregado al carrito: " + productoSeleccionado.nombre);
        } else {
            alert("El producto ingresado no está disponible. Inténtalo nuevamente.");
            i--; // Resto 1 al contador para repetir el ciclo
        }
    }

    // Calcular y mostrar al usuario el total de la compra
    let totalCompra = calcularTotal();
    alert("Total de la compra: $" + totalCompra);
}
