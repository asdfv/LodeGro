import {Component, OnInit} from "@angular/core";
import {AdminService} from "../service/admin.service";
import User from "../model/user.model";

@Component({
    templateUrl: "./admin.template.html",
})
export class AdminComponent implements OnInit {
    constructor(private adminService: AdminService) {
    };

    private users: User[];
    private editMode: boolean = false;
    private selectedUser: User;

    ngOnInit(): void {
        this.adminService.loadAllUsers().subscribe(
            data => this.users = data
        );
    }

    edit(user: User): void {
        this.selectedUser = user;
        this.editMode = true;
    }
}
