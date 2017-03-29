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



    ngOnInit(): void {
        this.adminService.loadAllUsers().subscribe(
            (data) => this.users = data
        );
    }

    edit(): void {
        this.editMode = true;
    }

    save(user: User): User {
        this.editMode = false;
        return user;
    }



}