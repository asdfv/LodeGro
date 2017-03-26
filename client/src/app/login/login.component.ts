import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../security/authentication.service";

@Component({
    templateUrl: "./login.template.html"
})
export class LoginComponent {

    credentials: any = {};
    error = "";

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    login() {
        this.authenticationService.login(this.credentials.username, this.credentials.password)
            .subscribe(result => {
                if (result === true) {
                    console.log("auth successfully");
                    // login successful
                    this.router.navigate(['/home']);
                } else {
                    console.log("unsuccessfully auth");
                    // login failed
                    this.error = 'Username or password is incorrect';
                }
            });
    }
}