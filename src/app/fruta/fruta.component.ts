import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente fruta'
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia'
    
    public nombre: string = '';

    constructor(){
        this.nombre = 'Gabriela'
        console.log(this.nombre);
    }

    ngOnInit(){
        this.holaMundo();

        // variables y alcance
        // let funciona a nivel global
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3;
            var dos = 88;

            console.log('dentro del if '+uno)
        }

        console.log('fuera del if '+uno)
    }

    holaMundo(){
        console.log('Hola '+this.nombre)
    }
} 