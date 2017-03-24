import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../security/authentication.service";

@Component({
    templateUrl: "./login.template.html"
})
export class LoginComponent implements OnInit {

    credentials: any = {};
    error = "";

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.authenticationService.login(this.credentials.username, this.credentials.password)
            .subscribe(result => {
                if (result === true) {
                    console.log("auth successfully");
                    // login successful
                    this.router.navigate(['/home']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                }
            });
    }
}