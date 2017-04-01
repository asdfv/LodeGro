import {Component, Input, OnInit} from "@angular/core";
import {AdminService} from "../../service/admin.service";
import {roles} from "../../../app.roles";
import User from "../../model/user.model";
import {UserDetails} from "../../model/user-details.model";
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

    // private allRoles: string[];

    ngOnInit(): void {
        this.adminService.loadUserByUsername(this.user.username).subscribe(
            // data => this.userDetails = data
            data => this.userDetails = this.userDetailFactory.produce(data)
        );
        console.log("with factory: " + this.userDetails);

        // this.allRoles = [];
        // // Convert values roles to array
        // for (let key in roles) {
        //     if (roles.hasOwnProperty(key)) {
        //         this.allRoles.push(roles[key].name);
        //     }
        // }


    }

    hasAuthority(authority: string, user: User): boolean {
        let ownAuthorities = this.adminService.getRoles(user);
        return ownAuthorities.indexOf(authority) > -1;
    }

    // getRoles(user: User): string[] {
    //     return this.adminService.getRoles(user);
    // }

}