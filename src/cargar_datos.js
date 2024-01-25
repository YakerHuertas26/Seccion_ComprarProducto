import datos from "./data/producto";

const{celeste,gris,rojo}=datos.polo;


const producto = document.getElementById('producto');
const color= producto.querySelector('.producto__radio');
const imgPrincipal= producto.querySelector('.producto__ImgPrincipal')
const img1= producto.querySelector('#img1');
const img2= producto.querySelector('#img2');
color.addEventListener('click',(e)=>{
    if (e.target.closest('input')) {
        let color= e.target.closest('input').value;


        if (color=='celeste') {
            imgPrincipal.setAttribute('src',celeste[0].ruta);
            img1.setAttribute('src',celeste[0].ruta)
            img2.setAttribute('src',celeste[1].ruta)
        }
        else if (color=='gris') {
            imgPrincipal.setAttribute('src',gris[0].ruta);
            img1.setAttribute('src',gris[0].ruta)
            img2.setAttribute('src',gris[1].ruta)
        }
        else if (color=='rojo') {
            imgPrincipal.setAttribute('src',rojo[0].ruta);
            img1.setAttribute('src',rojo[0].ruta)
            img2.setAttribute('src',rojo[1].ruta)
            
        }
        
    }

})

