import {Injectable} from "@angular/core";
import {Authority, UserDetails} from "../model/user-details.model";

@Injectable()
export class UserDetailFactory {

    constructor() {
    }

    produce(dbUser): UserDetails {

        console.log("dbUser: " + JSON.stringify(dbUser));
        let authority: Authority[];
        let id: number;
        let username: string;
        let enabled: boolean;

        id = dbUser.id;
        username = dbUser.username;
        enabled = dbUser.enabled;
        authority = dbUser.authorities;

        return new UserDetails(id, username, enabled, authority);
    }

}
