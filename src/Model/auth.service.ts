import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RestDataSource} from './rest.datasource';

@Injectable()

export class AuthService{

    constructor(private dataSource: RestDataSource){

    }

    //this menthod will recive user / admin credinatials
    authenticate(username: string, password: string) : Observable<boolean> {

        return this.dataSource.authenticate(username, password);
    }

    //authenticated property getter only
    get authenticated() : boolean {

        return this.dataSource.auth_token != null;
    }

    //clear it will remove token fron data source
    clear(){

        this.dataSource.auth_token = null;
    }
}