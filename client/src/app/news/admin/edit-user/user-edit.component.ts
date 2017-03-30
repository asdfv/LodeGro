import {Component, Input, OnInit} from "@angular/core";
import {AdminService} from "../../service/admin.service";
import {roles} from "../../../app.roles";
import User from "../../model/user.model";

@Component({
    selector: 'edit-user',
    templateUrl: 'user-edit.template.html'
})
export class UserEditComponent implements OnInit {

    constructor(private adminService: AdminService) {
    }

    @Input() user: User;
    private allRoles: string[];

    ngOnInit(): void {

        this.allRoles = [];
        // Convert values roles to array
        for (let key in roles) {
            if (roles.hasOwnProperty(key)) {
                this.allRoles.push(roles[key].name);
            }
        }
    }

    hasAuthority(authority: string, user: User): boolean {
        let ownAuthorities = this.adminService.getRoles(user);
        return ownAuthorities.indexOf(authority) > -1;
    }



    // private selected: boolean = false;



    getRoles(user: User): string[] {
        return this.adminService.getRoles(user);
    }

}