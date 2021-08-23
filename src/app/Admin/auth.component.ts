import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../Model/auth.service';

@Component({
        templateUrl:"auth.component.html",
    })
    

export class AuthComponent{

    public username: string;
    public password: string;
    public errorMessage: string;

    constructor(private router: Router, private auth: AuthService){

    }

    authenticate(form: NgForm){

        if(form.valid){
            //perform the authentication
            this.auth.authenticate(this.username, this.password)
            .subscribe(response => {

                if(response){
                    this.router.navigateByUrl("/admin/main");
                }
                this.errorMessage = "Authentication Failed!!";
            })
            
        }else{
            this.errorMessage = "Form Data Invalid";
        }
    }

}

