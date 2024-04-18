'use strict';

// simulación de base de datos 

var datos = {
    polo:{
        celeste:[
            {
                id:1,
                color:"Celeste",
                precio:"19.90",
                ruta: "./img/celeste/1.jpg"
            },
            {
                id:2,
                color:"Celeste",
                precio:"19.90",
                ruta: "./img/celeste/2.jpg"
            }
        ],
        gris:[
            {
                id:1,
                color:"Gris",
                precio:"19.90",
                ruta: "./img/gris/1.jpg"
            },
            {
                id:2,
                color:"Gris",
                precio:"19.90",
                ruta: "./img/gris/2.jpg"
            }
        ],
        rojo:[
            {
                id:1,
                color:"Rojo",
                precio:"19.90",
                ruta: "./img/rojo/1.jpg"
            },
            {
                id:2,
                color:"Rojo",
                precio:"19.90",
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
    const colorData = datos.polo[nuevoColor];
    
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
    });
});

// cerrar carrito
const ocultarCarrito= ()=>{
    carrito.classList.remove('carrito--active');
};

cerrarCarrito.forEach((element) => {
    element.addEventListener('click',(e)=>{
        ocultarCarrito();
    });
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
    

});
