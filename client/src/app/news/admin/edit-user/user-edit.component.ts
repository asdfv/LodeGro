import {Component, Input, OnInit} from '@angular/core';
import User from "../../model/user.model";
import {AdminService} from "../../service/admin.service";
import {roles} from "../../../app.roles";

@Component({
    selector: 'edit-user',
    templateUrl: 'user-edit.template.html'
})
export class UserEditComponent implements OnInit {

    ngOnInit(): void {

        this.allRoles = [];
        // Convert values roles to array
        for (let key in roles) {
            if (roles.hasOwnProperty(key)) {
                this.allRoles.push(roles[key]);
            }
        }
    }

    @Input() user: User;
    private allRoles: Object[];

    private selected: boolean = false;

    constructor(private adminService: AdminService) {
    }

    getRoles(user: User): string[] {
        return this.adminService.getRoles(user);
    }

}