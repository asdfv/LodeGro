import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../security/authentication.service";

@Component({
    templateUrl: "./login.template.html"
})
export class LoginComponent {

    credentials: any = {};
    error: any = "";

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    login() {
        this.authenticationService.login(this.credentials.username, this.credentials.password)
            .subscribe(
                result => {
                    console.log("Result: " + result);
                    this.router.navigate(['/']);
                },
                error => {
                    this.error = "Bad credentials";
                    console.log("Authorization error: " + error)
                }
            );
    }
}
