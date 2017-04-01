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

        // console.log("UserDetails: \nid: " + id + "\nusername: " + username + "\nenabled: " + enabled + "\nauth: " + JSON.stringify(authority));

        return new UserDetails(id, username, enabled, authority);

    }

}

// {
//     "id": 2,
//     "username": "red",
//     "password": "a",
//     "enabled": true,
//     "authorities": [
//     {
//         "id": 2,
//         "name": "ROLE_REDACTOR"
//     }
// ]
// }