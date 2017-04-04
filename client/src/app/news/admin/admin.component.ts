import {Component, OnInit} from "@angular/core";
import {UserService} from "../service/user.service";
import User from "../model/user.model";

@Component({
    templateUrl: "./admin.template.html",
})
export class AdminComponent implements OnInit {
    constructor(private userService: UserService) {
    };

    private users: User[];
    private editMode: boolean = false;
    private selectedUser: User;
    private loading: boolean = false;
    private errorMessage: string = "";

    ngOnInit(): void {
        this.userService.loadAllUsers().subscribe(
            data => this.users = data
        );
    }

    edit(user: User): void {
        this.selectedUser = user;
        this.editMode = true;
    }

    delete(id: number): void {
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
