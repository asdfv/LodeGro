import {Injectable} from "@angular/core";
import {roles} from "../../app.roles";
import {AuthenticationService} from "../../security/authentication.service";

@Injectable()
export class CanViewService {

    constructor(private authenticationService: AuthenticationService){};

    printUser(): void {
        console.log('Current user is: ' + this.authenticationService.user.username);
    }

    admin(): boolean {
       let authorities: string[] = this.authenticationService.user.authorities;
       console.log("this.authenticationService.user.authorities:" + authorities);
       return authorities == null ? false : authorities.indexOf(roles.ADMIN) > -1;
    }

    // redactor(): boolean {
    //    return this.user.username == roles.REDACTOR;
    // }
}
