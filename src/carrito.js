const carrito= document.getElementById('carrito');
const abrirCarrito= document.querySelectorAll('[data-accion="abrir-carrito"]');
const cerrarCarrito= document.querySelectorAll('[data-accion="cerrar-carrito"]');
const producto= document.getElementById('producto');
const agregarProducto= producto.querySelector('.producto__btn-comprar')
const productosSeleccionados= [];
// abrir carrito con una funcition
const desplegarCarrito =()=>{
    carrito.classList.add('carrito--active');
    console.log(productosSeleccionados);
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

// guardar la info del producto al agregar al carrito
agregarProducto.addEventListener('click',(e) =>{
    const nombre= producto.querySelector('.producto__titulo').innerText;
    const color= producto.querySelector('.producto__color').innerText;
    const talla= (producto.querySelector('.producto__detalle-talla input:checked').value).toUpperCase();
    const cantidad= producto.querySelector('.producto__input-cantidad').value;
    
    // guardo los productos en un array de object
    productosSeleccionados.push({
        nombre:nombre,
        color: color,
        talla: talla,
        cantidad: cantidad
    });
    

})


