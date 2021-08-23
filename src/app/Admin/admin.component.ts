import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/Model/auth.service';


@Component({
    templateUrl: "admin.component.html"
})

export class AdminComponent{

    constructor(private auth: AuthService, private router: Router){

    }

    // this to admin user log out
    logout(){

        this.auth.clear();
        this.router.navigateByUrl("/");
    }
    
}