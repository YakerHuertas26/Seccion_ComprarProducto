'use strict';

// simulación de base de datos 

var datos = {
    polo:{
        celeste:[
            {
                id:1,
                color:"celeste",
                precio:19.90,
                ruta: "./img/celeste/1.jpg"
            },
            {
                id:2,
                color:"celeste",
                precio:19.90,
                ruta: "./img/celeste/2.jpg"
            }
        ],
        gris:[
            {
                id:1,
                color:"gris",
                precio:19.90,
                ruta: "./img/gris/1.jpg"
            },
            {
                id:2,
                color:"gris",
                precio:19.90,
                ruta: "./img/gris/2.jpg"
            }
        ],
        rojo:[
            {
                id:1,
                color:"rojo",
                precio:19.90,
                ruta: "./img/rojo/1.jpg"
            },
            {
                id:2,
                color:"rojo",
                precio:19.90,
                ruta: "./img/rojo/2.jpg"
            }
        ]

    }
};

const{celeste,gris,rojo}=datos.polo;


const producto = document.getElementById('producto');
const color= producto.querySelector('.producto__radio');
const imgPrincipal= producto.querySelector('.producto__ImgPrincipal');
const img1= producto.querySelector('#img1');
const img2= producto.querySelector('#img2');
color.addEventListener('click',(e)=>{
    if (e.target.closest('input')) {
        let color= e.target.closest('input').value;


        if (color=='celeste') {
            imgPrincipal.setAttribute('src',celeste[0].ruta);
            img1.setAttribute('src',celeste[0].ruta);
            img2.setAttribute('src',celeste[1].ruta);
        }
        else if (color=='gris') {
            imgPrincipal.setAttribute('src',gris[0].ruta);
            img1.setAttribute('src',gris[0].ruta);
            img2.setAttribute('src',gris[1].ruta);
        }
        else if (color=='rojo') {
            imgPrincipal.setAttribute('src',rojo[0].ruta);
            img1.setAttribute('src',rojo[0].ruta);
            img2.setAttribute('src',rojo[1].ruta);
            
        }
        
    }

});
