import { Component } from "@angular/core";
import { Empleado } from "./empleado";

@Component ({
    selector: 'empleado-component',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente Empleados'
    public empleado!: Empleado;
    public trabajadores!:Array<Empleado>;
    public trabajador_externo: boolean;
    public color:string | undefined;
    public color_seleccionado: string | undefined;

    constructor(){
        this.trabajadores = [
            this.empleado = new Empleado('Gabriela Barrezueta',29,'Programmer',true),
            this.empleado = new Empleado('David Lopez',35,'Administrativo',false),
            this.empleado = new Empleado('Ana Lopez',25,'Cocinera',true),
            this.empleado = new Empleado('Victor Robles',32,'Programmer',true)
        ]
        
        this.empleado = new Empleado('Gabriela Barrezueta',29,'Programmer',true);
        
        this.trabajador_externo = true
        this.color = 'green'
        this.color_seleccionado = '#ccc'
    }

    ngOnInit(): void{
        console.log(this.empleado)
        console.log(this.trabajadores)
    }

    cambiarExterno(valor: boolean){
        this.trabajador_externo = valor;
        console.log(this.trabajador_externo)
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado)
    }
}