import {Injectable} from "@angular/core";
import {roles} from "../../app.roles";
import {AuthenticationService} from "../../security/authentication.service";

@Injectable()
export class CanViewService {

    constructor(private authenticationService: AuthenticationService){};

    printUser(): void {
        console.log('Current user is: ' + this.authenticationService.username);
    }

    //admin(): boolean {
    //    console.log(this.username);
    //    return this.username == roles.ADMIN;
    //}
    //
    //redactor(): boolean {
    //    return this.username == roles.REDACTOR;
    //}
}
