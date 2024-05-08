// crear clase 
export default class Tubs{
    // creamos un constructor 
    constructor(idElement){
        // crear atributos de la clase
        this.tabs= document.getElementById(idElement);
        this.nav= this.tabs.querySelector('.tabs');

        this.nav.addEventListener('click',(e)=>{
            if (e.target.closest('button')) {
                let acction= e.target.closest('button').dataset.tab;
                
                // eliminar el tab deseleccionado 
                if (this.tabs.querySelector('.tab--active')) {
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active');
                }
                // para eliminar el botton tab deseleccioando 
                if ( this.nav.querySelector('.tabs__button--activo')) {
                    this.nav.querySelector('.tabs__button--activo').classList.remove('tabs__button--activo');
                }

                // activar la sección seleccionada 
                this.tabs.querySelector(`#${acction}`).classList.add('tab--active');

                // activar el btn seleccionado
                e.target.closest('button').classList.add('tabs__button--activo');
            }
        })
    }
};