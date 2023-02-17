import {Component} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router' 

@Component({
    selector : 'contacto-component',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Pagina de contacto"
    public parametro: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params) =>{
            this.parametro = params['page'];
        });
    }

    redirigir(){
        this._router.navigate(['/contacto','victorroblesweb.es'])
    }

    redirigir2(){
        this._router.navigate(['/fruta',''])
    }
}