import dataProducto from "./data/producto";
const carrito= document.getElementById('carrito');
const abrirCarrito= document.querySelectorAll('[data-accion="abrir-carrito"]');
const cerrarCarrito= document.querySelectorAll('[data-accion="cerrar-carrito"]');
const producto= document.getElementById('producto');
const agregarProducto= producto.querySelector('.producto__btn-comprar')
const productosSeleccionados= [];
const darFormato= new Intl.NumberFormat('es-PE',{style: 'currency',currency:'PEN'});

// abrir carrito con una funcition
const desplegarCarrito =()=>{
    carrito.classList.add('carrito--active');
    

    // Arreglar la duplicidad del agregado 
    const cantidadAnterior= carrito.querySelectorAll('.carrito__producto');
    cantidadAnterior.forEach((element)=>{
        element.remove();
    })

    // agregar los productos seleccionados al carrito 

    productosSeleccionados.forEach((element)=>{
        // guardo el precio
        const precio=dataProducto.polo.celeste[0].precio;
        element.precio=precio;
        
        // 1.- creo mi elemento div
        const newElement= document.createElement('div');
        // 2.- creo la clase del elemento
        newElement.classList.add('carrito__producto');
        // 3.- mi plantilla HTML
        const plantillaHTML= `
        <div class="carrito__producto-info">
            <img src="./img/${element.color}/1.jpg" alt="" class="carrito__thumb"  />
            <div>
                <p class="carrito__producto-nombre">
                    <span class="carrito__producto-cantidad">${element.cantidad} x </span>
                    ${element.nombre}
                </p>
                <p class="carrito__producto-propiedades">
                    tamaño:<span>${element.talla}</span> Color: <span> ${element.color}</span> 
                </p>
            </div>
        </div>
        <div class="carrito__producto-contenedor-precio">
            <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                    />
                </svg>
            </button>
            <p class="carrito__producto-precio">${
            darFormato.format((element.precio*element.cantidad).toFixed(2))}</p>
        </div>
        `;
        //4.- inserto la plantilla en mi new element
        newElement.innerHTML=plantillaHTML;
        
        // 5.- ubico donde insertare el new element
        const ubicacion= carrito.querySelector('.carrito__body');

        // 6.- inseto el new element
        ubicacion.appendChild(newElement);

    });


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
    const id= producto.dataset.producto_id;
    const nombre= producto.querySelector('.producto__titulo').innerText;
    const color= producto.querySelector('.producto__color').innerText;
    const talla= (producto.querySelector('.producto__detalle-talla input:checked').value).toUpperCase();
    const cantidad= parseInt(producto.querySelector('.producto__input-cantidad').value);
    
    if (productosSeleccionados.length>0) {
        let  Añadido= false;
        productosSeleccionados.forEach((element)=>{
            if (element.nombre===nombre && element.color===color && element.talla===talla) {
                element.cantidad+=cantidad;
                Añadido=true;
            }
            
        })
        if(!Añadido){
            console.log('no');
            productosSeleccionados.push({
                id:id,
                nombre:nombre,
                color: color,
                talla: talla,
                cantidad: cantidad
                
            });
        }
                
        }  
        
    else{
        // guardo los productos en un array de object
    productosSeleccionados.push({
        id:id,
        nombre:nombre,
        color: color,
        talla: talla,
        cantidad: cantidad
        
    });
    }
    
    
    
})


