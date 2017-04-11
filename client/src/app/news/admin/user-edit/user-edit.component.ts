import {Component, OnInit} from "@angular/core";
import {UserService} from "../../service/user.service";
import {roles} from "../../../app.roles";
import {Authority} from "../../model/authority.model";
import User from "../../model/user.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: "edit-user",
    templateUrl: "user-edit.template.html",
    styleUrls: ["./user-edit.style.css"]
})
export class UserEditComponent implements OnInit {

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    private userDetails: Object = {};
    private allRoles: Authority[] = [];
    private loading: boolean = false;
    private errorMessage: string = "";

    ngOnInit(): void {

        let username: string;
        this.route.params.subscribe(
            (params: Params) => {
                username = params["username"];
                this.userService.loadUserByUsername(username).subscribe(
                    data => {
                        this.userDetails = data;
                        this.loading = false;
                    }
                );
                this.loading = false;
            }
        );

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
                this.router.navigate(["/admin"]);
            },
            error => this.logError(error)
        );
    }

    logError(err) {
        this.loading = false;
        console.error("Error: " + err);
        this.errorMessage = "Error occurred =( ";
    }

}