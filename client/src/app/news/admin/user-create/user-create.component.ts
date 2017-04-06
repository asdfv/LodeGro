import {Component, OnInit} from "@angular/core";
import User from "../../model/user.model";
import {Authority} from "../../model/authority.model";
import {roles} from "../../../app.roles";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {constant} from "../../../app.constatnts";

@Component({
    templateUrl: 'user-create.template.html'
})
export class UserCreateComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) {
    }

    private user: User = new User(0, "", [], "");
    private allRoles: Authority[] = [];
    private loading = false;
    private errorMessage: string = "";
    private LOADING_ICON = constant.LOADING_SMALL;

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
                this.router.navigate(["/admin"]);
            },
            error => {
                this.logError(error);
                this.errorMessage = "Error saving user " + user.username + ": " + error;
            }
        );
    }

    logError(err) {
        this.loading = false;
        console.error('Error: ' + err);
        this.errorMessage = 'Error occurred =( ';
    }
}