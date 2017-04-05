import {Component, OnInit} from "@angular/core";
import {UserService} from "../service/user.service";
import User from "../model/user.model";
import {constant} from "../../app.constatnts";

@Component({
    templateUrl: "./admin.template.html",
})
export class AdminComponent implements OnInit {
    constructor(private userService: UserService) {
    };

    private users: User[];
    private loading: boolean = false;
    private errorMessage: string = "";
    private LOADING_ICON = constant.LOADING_SMALL;

    ngOnInit(): void {
        this.userService.loadAllUsers().subscribe(
            data => this.users = data
        );
    }

    delete(id: number): void {
        confirm("Are you serious?");
        this.loading = true;
        this.userService.delete(id).subscribe(
            () => {
                this.loading = false;
                this.ngOnInit();
            },
            error => this.errorMessage = error
        );
    }

    getRoles(user: User): string[] {
        return this.userService.getRoles(user);
    }
}
