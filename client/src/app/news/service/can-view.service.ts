import {Injectable} from "@angular/core";
import {roles} from "../../app.roles";
import {AuthenticationService} from "../../security/authentication.service";

@Injectable()
export class CanViewService {

    constructor(private authenticationService: AuthenticationService){};

    printUser(): void {
        console.log('Current user is: ' + this.authenticationService.user.username);
    }

    //admin(): boolean {
    //    console.log(this.user.username);
    //    return this.username == roles.ADMIN;
    //}
    //
    //redactor(): boolean {
    //    return this.user.username == roles.REDACTOR;
    //}
}
