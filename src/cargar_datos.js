import datos from "./data/producto";

const { celeste, gris, rojo } = datos.polo;

const producto = document.getElementById('producto');
const color = producto.querySelector('.producto__radio');
const imgPrincipal = producto.querySelector('.producto__ImgPrincipal');
const img1 = producto.querySelector('#img1');
const img2 = producto.querySelector('#img2');
const precio = producto.querySelector('.producto__monto');
const datoColor = producto.querySelector('.producto__color');
const collage= producto.querySelector('.producto__coleccion');
const cantidad= producto.querySelector('.producto__content-cantidad');


const cambiarColor = (nuevoColor) => {
    const colorData = datos.polo[nuevoColor];
    
    if (colorData) {
        imgPrincipal.setAttribute('src', colorData[0].ruta);
        img1.setAttribute('src', colorData[0].ruta);
        img2.setAttribute('src', colorData[1].ruta);
        datoColor.innerText = colorData[0].color;
        precio.innerText = `S/${colorData[0].precio}` ;
        img1.classList.add('producto__img--active')
        img2.classList.remove('producto__img--active')
        
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
        let id = parseInt(e.target.closest('img').dataset.id) 
        let ruta = e.target.closest('img').src
        
        
        if (id===0) {
            imgPrincipal.setAttribute('src', ruta);
            img1.classList.add('producto__img--active')
            img2.classList.remove('producto__img--active')
        }
        if (id===1) {
            imgPrincipal.setAttribute('src', ruta);
            img2.classList.add('producto__img--active')
            img1.classList.remove('producto__img--active')
        }
        }
        
})
// ++++ AUMNETAR Y DISMINURI CANTIDADES ++

// retorno la acción del btn 
const numero= cantidad.querySelector('#cantidad');
const btnAccion= (e)=>{
    let accion=e.target.closest('button').dataset.accion;
    return accion
}

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
})


    



            



