const carrito= document.getElementById('carrito');
const abrirCarrito= document.querySelectorAll('[data-accion="abrir-carrito"]');
const cerrarCarrito= document.querySelectorAll('[data-accion="cerrar-carrito"]');
// abrir carrito con una funcition
const desplegarCarrito =()=>{
    carrito.classList.add('carrito--active');
};
// Abrir el carrito para cada uno 
abrirCarrito.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        desplegarCarrito();
    })
});

// cerrar carrito
const ocultarCarrito= ()=>{
    carrito.classList.remove('carrito--active')
};

cerrarCarrito.forEach((element) => {
    element.addEventListener('click',(e)=>{
        ocultarCarrito();
    })
});


