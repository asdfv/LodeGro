import {Component, Input, OnInit} from "@angular/core";
import {UserService} from "../../service/user.service";
import {roles} from "../../../app.roles";
import User from "../../model/user.model";
import {Authority} from "../../model/authority.model";

@Component({
    selector: 'edit-user',
    templateUrl: 'user-edit.template.html'
})
export class UserEditComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    @Input() user: User;
    private allRoles: Authority[] = [];
    private loading: boolean = false;
    private errorMessage: string = "";
    private successMessage: string = "";

    ngOnInit(): void {

        // Get all roles and push it into list of roles
        for (let key in roles) {
            this.allRoles.push(roles[key]);
        }
    }

    getRoles(user: User): string[] {
        return this.userService.getRoles(user);
    }

    update(user: User) {
        this.loading = true;
        this.userService.update(user).subscribe(
            data => {
                console.log("Successfully update: " + JSON.stringify(data));
                this.loading = false;
                this.successMessage = "Successfully update!";
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