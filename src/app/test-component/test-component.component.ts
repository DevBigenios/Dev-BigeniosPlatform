import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  edad: number;
  nombres:Array<string>;

  constructor() { 
    this.edad = 15;
    this.nombres = ['Gabriela','Victor','Jose','Maria']
  }

  ngOnInit(): void {
    console.log('Componente cargado')
  }

  aumentarEdad(){
    this.edad++;
    console.log("aumentar")
  }

  disminuirEdad(){
    this.edad--;
    console.log("disminuir")
  }

}
