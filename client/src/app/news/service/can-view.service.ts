import {Injectable} from "@angular/core";
import {roles} from "../../app.roles";
import {AuthenticationService} from "../../security/authentication.service";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {CurrentUserService} from "./current-user.service";

@Injectable()
export class CanViewService {

    constructor(private currentUserService: CurrentUserService) {
    };

    isAdmin(): boolean {
        let authorities: string[] = this.currentUserService.get().authorities;
        return authorities == null ? false : authorities.indexOf(roles.ADMIN.name) > -1;
    }

    isRedactor(): boolean {
        let authorities: string[] = this.currentUserService.get().authorities;
        return authorities == null ? false : authorities.indexOf(roles.REDACTOR.name) > -1;
    }
    isAuthor(): boolean {
        let authorities: string[] = this.currentUserService.get().authorities;
        return authorities == null ? false : authorities.indexOf(roles.AUTHOR.name) > -1;
    }
}
