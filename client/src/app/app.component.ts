import {Component} from "@angular/core";
import {CanViewService} from "./news/service/can-view.service";
import {AuthenticationService} from "./security/authentication.service";
import {CurrentUserService} from "./news/service/current-user.service";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.template.css"]
})
export class AppComponent {

    constructor(
        private canViewService: CanViewService,
        private authenticationService: AuthenticationService,
        private currentUserService: CurrentUserService) {
    };

    isAdmin(): boolean {
        return this.canViewService.isAdmin();
    }

    isRedactor(): boolean {
        return this.canViewService.isRedactor();
    }

    isAuthor(): boolean {
        return this.canViewService.isAuthor();
    }

    logOut(): void {
        this.authenticationService.logout();
    }

    isLogIn(): boolean {
        return this.currentUserService.isLogIn();
    }

    getCurrentUsername(): string {
        let currentUser = this.currentUserService.get().username;
        return currentUser == "anon" ? "" : " - " + currentUser;
    }

}
