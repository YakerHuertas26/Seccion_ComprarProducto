'use strict';

// simulación de base de datos 

var dataProducto = {
    polo:{
        celeste:[
            {
                id:'1',
                color:"Celeste",
                precio:19.90,
                ruta: "./img/celeste/1.jpg"
            },
            {
                id:'2',
                color:"Celeste",
                precio:19.90,
                ruta: "./img/celeste/2.jpg"
            }
        ],
        gris:[
            {
                id:1,
                color:"Gris",
                precio:19.90,
                ruta: "./img/gris/1.jpg"
            },
            {
                id:2,
                color:"Gris",
                precio:19.90,
                ruta: "./img/gris/2.jpg"
            }
        ],
        rojo:[
            {
                id:1,
                color:"Rojo",
                precio:19.90,
                ruta: "./img/rojo/1.jpg"
            },
            {
                id:2,
                color:"Rojo",
                precio:19.90,
                ruta: "./img/rojo/2.jpg"
            }
        ]

    }
};

const producto$1 = document.getElementById('producto');
const color = producto$1.querySelector('.producto__radio');
const imgPrincipal = producto$1.querySelector('.producto__ImgPrincipal');
const img1 = producto$1.querySelector('#img1');
const img2 = producto$1.querySelector('#img2');
const precio = producto$1.querySelector('.producto__monto');
const datoColor = producto$1.querySelector('.producto__color');
const collage= producto$1.querySelector('.producto__coleccion');
const cantidad= producto$1.querySelector('.producto__content-cantidad');


const cambiarColor = (nuevoColor) => {
    const colorData = dataProducto.polo[nuevoColor];
    
    if (colorData) {
        imgPrincipal.setAttribute('src', colorData[0].ruta);
        img1.setAttribute('src', colorData[0].ruta);
        img2.setAttribute('src', colorData[1].ruta);
        datoColor.innerText = colorData[0].color;
        precio.innerText = `S/${colorData[0].precio}` ;
        img1.classList.add('producto__img--active');
        img2.classList.remove('producto__img--active');
        
    }
    
};

color.addEventListener('click', (e) => {
    if (e.target.closest('input')) {
        let opcionColor = e.target.closest('input').value;
        cambiarColor(opcionColor);
    }
});


collage.addEventListener('click',(e)=>{
    
    if (e.target.closest('img')) {
        let id = parseInt(e.target.closest('img').dataset.id); 
        let ruta = e.target.closest('img').src;
        
        
        if (id===0) {
            imgPrincipal.setAttribute('src', ruta);
            img1.classList.add('producto__img--active');
            img2.classList.remove('producto__img--active');
        }
        if (id===1) {
            imgPrincipal.setAttribute('src', ruta);
            img2.classList.add('producto__img--active');
            img1.classList.remove('producto__img--active');
        }
        }
        
});
// ++++ AUMNETAR Y DISMINURI CANTIDADES ++

// retorno la acción del btn 
const numero= cantidad.querySelector('#cantidad');
const btnAccion= (e)=>{
    let accion=e.target.closest('button').dataset.accion;
    return accion
};

// ejecuto la mi función 
cantidad.addEventListener('click',(e)=>{
    const accion= btnAccion(e);
    if (accion==='aumentar') {
        numero.value= parseInt(numero.value)+1;
    }
    else if (accion==='disminuir') {
        if (parseInt(numero.value)>1) {
            numero.value= parseInt(numero.value)-1;
        }
        
    }
});

const carrito= document.getElementById('carrito');
const abrirCarrito= document.querySelectorAll('[data-accion="abrir-carrito"]');
const cerrarCarrito= document.querySelectorAll('[data-accion="cerrar-carrito"]');
const producto= document.getElementById('producto');
const agregarProducto= producto.querySelector('.producto__btn-comprar');
let productosSeleccionados= [];
const darFormato= new Intl.NumberFormat('es-PE',{style: 'currency',currency:'PEN'});
let total=0;
// abrir carrito con una funcition
const desplegarCarrito =()=>{
    carrito.classList.add('carrito--active');
    
    // Arreglar la duplicidad del agregado 
    const cantidadAnterior= carrito.querySelectorAll('.carrito__producto');
    cantidadAnterior.forEach((element)=>{
        element.remove();
    });
    if (productosSeleccionados.length<1) {
        carrito.classList.add('carrito--vacio');
    }
    else {
        // agregar los productos seleccionados al carrito 
        productosSeleccionados.forEach((element)=>{
            // remuevo la clase carrito vacio 
            carrito.classList.remove('carrito--vacio');
            // guardo el precio
            const precio=dataProducto.polo.celeste[0].precio;
            element.precio=precio;

            // precio total de los productos
            total+= (element.precio*element.cantidad);

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
    }
    carrito.querySelector('.carrito__total').innerText= darFormato.format((total).toFixed(2));
};

// Abrir el carrito para cada uno 
abrirCarrito.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        desplegarCarrito();
    });
});

// cerrar carrito
const ocultarCarrito= ()=>{
    carrito.classList.remove('carrito--active');
    
};

cerrarCarrito.forEach((element) => {
    element.addEventListener('click',(e)=>{
        ocultarCarrito();
        total=0;
    });
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
            
        });
        if(!Añadido){
            productosSeleccionados.push({
                id:id,
                nombre:nombre,
                color: color,
                talla: talla,
                cantidad: cantidad
                
            });
        }
                
        }  
        
    else {
        // guardo los productos en un array de object
    productosSeleccionados.push({
        id:id,
        nombre:nombre,
        color: color,
        talla: talla,
        cantidad: cantidad
        
    });
    }
    
    
    
});

// eliminar un producto del carrito 
carrito.addEventListener('click',(e)=>{
    if (e.target.closest('button')?.dataset.accion==='eliminar-item-carrito') {
        const producto= e.target.closest('.carrito__producto');
        const indexProducto= [...document.querySelectorAll('.carrito__producto')].indexOf(producto);
        productosSeleccionados.splice(indexProducto,1);
        producto.remove();
        total=0;
        desplegarCarrito();
    }
});
