import {Injectable} from '@angular/core'

@Injectable()

export class RopaService{
    public nombre_prenda = 'Pantalones vaqueros'
    public coleccion_ropa = ['Pantalones blancos','Camisa roja']

    prueba(nombre_prenda: any){
        return nombre_prenda
    }

    addRopa(nombre_prenda:any){
        this.coleccion_ropa.push(nombre_prenda);
        return this.coleccion_ropa;
    }

    getRopa():Array<string>{
        return this.coleccion_ropa
    }

    deletePrenda(index:number):Array<string>{
        this.coleccion_ropa.splice(index,1);

        return this.getRopa()
    }
}