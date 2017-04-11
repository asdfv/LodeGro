import {Component, OnInit} from "@angular/core";
import {UserService} from "../service/user.service";
import User from "../model/user.model";

@Component({
    templateUrl: "./admin.template.html",
    styleUrls: ["./admin.style.css"]
})
export class AdminComponent implements OnInit {
    constructor(private userService: UserService) {
    };

    private users: User[];
    private loading: boolean = true;
    private errorMessage: string = "";

    ngOnInit(): void {
        this.userService.loadAllUsers().subscribe(
            data => {
                this.users = data;
                this.loading = false;
            }
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
