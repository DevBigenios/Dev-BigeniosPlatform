import { Component } from "@angular/core";
import {Router, ActivatedRoute, Params} from '@angular/router' 

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(
        private _route: ActivatedRoute,
        private _router: Router 
    ){}

    login(){
        this._router.navigate(['/main',''])
    }
    
}