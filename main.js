// Defino arrays y productos
let mates = [
    { nombre: "Zeus", precio: 2000 },
    { nombre: "Atenas", precio: 1500 },
    { nombre: "Arquimedes", precio: 1300 }
  ];
  
  let carrito = [];
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log("Producto agregado al carrito: " + producto.nombre);
    mostrarCarrito();
  }
  
  // Función para mostrar los productos en el carrito
  function mostrarCarrito() {
    const carritoContainer = document.querySelector('#carrito');
    carritoContainer.innerHTML = ""; // Limpio el contenido del carrito antes de mostrar los productos
  
    carrito.forEach((producto) => {
      const productoElement = document.createElement('div');
      productoElement.textContent = producto.nombre + " ($" + producto.precio + ")";
      carritoContainer.appendChild(productoElement);
    });
  
    const totalCompraElement = document.querySelector('#total-compra');
    if (totalCompraElement) {
      totalCompraElement.textContent = calcularTotal();
    }
  }
  
  // Función para calcular el total de la compra
  function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio;
    });
    return "$" + total;
  }
  
  // Función para vaciar el carrito
  function vaciarCarrito() {
    carrito = []; // Vacio el arreglo del carrito
    mostrarCarrito(); // Actualizo el carrito
  }
  
  // Para recuperar el carrito almacenado en localStorage
  const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
  
  carrito = carritoGuardado; // Restaura el carrito desde localStorage
  mostrarCarrito(); // y muestra los productos en el carrito
  
  // Selecciono el formulario de contacto en el HTML
  const form = document.querySelector('#contact form');
  
  // Agrego un Event Listener para capturar la tecla Enter
  form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // con esto evito que el form se envie de forma automatica 
      enviarMensaje(); // Llamo a una función para enviar el mensaje
    }
  });
  
  // Guardo el carrito en localStorage al cerrar la página
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  });
  
 // Creo elemento con DOM
const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = '2023 Your Best Mate. All rights reserved.';

// Aplico estilos 
nuevoElemento.style.textAlign = 'center';  // para centrar  el texto
nuevoElemento.style.fontSize = '16px';     // cambio el tamaño de fuente
nuevoElemento.style.color = 'black';        // cambio el color del texto

document.body.appendChild(nuevoElemento);

  