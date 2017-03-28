import {Component, OnInit} from "@angular/core";
import {AdminService} from "../service/admin.service";
import User from "../model/user.model";

@Component({
    templateUrl: "./admin.template.html"
})
export class AdminComponent implements OnInit {
    constructor(private adminService: AdminService) {
    };

    private users: User[];


    ngOnInit(): void {
        this.adminService.loadUsers().subscribe(
            (data) => this.users = data
        );
    }



}