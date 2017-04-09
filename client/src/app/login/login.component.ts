import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../security/authentication.service";
import {CurrentUserService} from "../news/service/current-user.service";
import {CanViewService} from "../news/service/can-view.service";

@Component({
    templateUrl: "./login.template.html"
})
export class LoginComponent {

    credentials: any = {};
    error: any = "";

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private canViewService: CanViewService) {
    }

    login() {
        this.authenticationService.login(this.credentials.username, this.credentials.password)
            .subscribe(
                result => {
                    this.navigator();
                },
                error => {
                    this.error = "Bad credentials";
                    console.log("Authorization error: " + error)
                }
            );
    }

    navigator(): void {
        if (this.canViewService.isAdmin()) {
            this.router.navigate(['/admin']);
            return;
        }
        if (this.canViewService.isRedactor()) {
            this.router.navigate(['/redactor']);
            return;
        }
        if (this.canViewService.isAuthor()) {
            this.router.navigate(['/author']);
            return;
        }
    }
}
