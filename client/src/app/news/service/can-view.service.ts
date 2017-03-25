import {Injectable} from "@angular/core";
import {roles} from "../../app.roles";
import {AuthenticationService} from "../../security/authentication.service";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

@Injectable()
export class CanViewService {

    constructor(private authenticationService: AuthenticationService) {
    };

    // If authorities contains roles.ADMIN return true, else - false
    isAdmin(): boolean {
        let authorities: string[] = this.authenticationService.user.authorities;
        return authorities == null ? false : authorities.indexOf(roles.ADMIN) > -1;
    }

    isRedactor(): boolean {
        let authorities: string[] = this.authenticationService.user.authorities;
        return authorities == null ? false : authorities.indexOf(roles.REDACTOR) > -1;
    }
}
