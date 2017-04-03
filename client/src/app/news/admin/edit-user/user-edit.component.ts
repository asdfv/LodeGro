import {Component, Input, OnInit} from "@angular/core";
import {AdminService} from "../../service/admin.service";
import {roles} from "../../../app.roles";
import User from "../../model/user.model";
import {Authority, UserDetails} from "../../model/user-details.model";
import {UserDetailFactory} from "../../service/user-detail.factory";

@Component({
    selector: 'edit-user',
    templateUrl: 'user-edit.template.html'
})
export class UserEditComponent implements OnInit {

    constructor(private adminService: AdminService, private userDetailFactory: UserDetailFactory) {
    }

    @Input() user: User;
    private userDetails: UserDetails;
    private allRoles: Authority[] = [];

    ngOnInit(): void {
        this.adminService.loadUserByUsername(this.user.username).subscribe(
            data => this.userDetails = this.userDetailFactory.produce(data)
        );

        // Get all roles and push it into list of roles
        for (let key in roles) {
            console.log(roles[key]);
            this.allRoles.push(roles[key]);
        }
    }

    getRoles(user: User): string[] {
        return this.adminService.getRoles(user);
    }

    update(user: UserDetails) {
        this.adminService.update(user).subscribe(
            data => console.log(JSON.stringify(data))
        );
    }

}