import { Component, OnInit } from '@angular/core';
import User from "../../model/user.model";
import {Authority} from "../../model/authority.model";
import {roles} from "../../../app.roles";
import {UserService} from "../../service/user.service";

@Component({
    templateUrl: 'user-create.template.html'
})
export class UserCreateComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    private user: User = new User(0, "", [], "");
    private allRoles: Authority[] = [];
    private loading = false;
    private errorMessage: string = "";
    private successMessage: string = "";


    ngOnInit(): void {
        for (let key in roles) {
            this.allRoles.push(roles[key]);
        }
    }

    getRoles(user: User): string[] {
        return this.userService.getRoles(user);
    }

    save(user: User) {
        this.loading = true;
        this.userService.save(user).subscribe(
            data => {
                console.log("Successfully saved: " + JSON.stringify(data));
                this.loading = false;
                this.successMessage = "Successfully saved!";
            },
            error => this.logError(error)
        );
    }

    logError(err) {
        this.loading = false;
        console.error('Error: ' + err);
        this.errorMessage = 'Error occurred =( ';
    }
}