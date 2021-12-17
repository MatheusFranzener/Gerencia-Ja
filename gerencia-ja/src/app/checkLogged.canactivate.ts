import { Injectable } from "@angular/core";
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";

import { routerNgProbeToken } from "@angular/router/src/router_module";
import { Observable } from "rxjs";

@Injectable()

class CheckLogged implements CanActivate{
    constructor(private router: Router){ }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise <boolean> | boolean{
        
        console.log('DENTRO');

        let user = localStorage.getItem('USER');
        
        if(user){
            return true;
        } else{
            this.router.navigate(['/']);
            return false;
        }
            
    }
}

export default CheckLogged;