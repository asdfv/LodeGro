import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import User from "../model/user.model";
import {Http, Response} from "@angular/http";
import {UserDetails} from "../model/user-details.model";
import {constant} from "../../app.constatnts";

@Injectable()
export class AdminService {

    constructor(private http: Http) {
    };

    loadUserByUsername(username: string): Observable<UserDetails> {
        return this.http.get(constant.LOAD_USER_BY_USERNAME_URL + username)
            .map((response: Response) => response.json());
    };

    loadAllUsers(): Observable<User[]> {
        return this.http.get(constant.LOAD_ALL_USERS_URL)
            .map((response: Response) => response.json());
    };

    getRoles(user: User): string[] {
        let authorities: Object[] = user.authorities;
        let stringArrayRoles: string[] = [];

        authorities.forEach((authority, index, authorities) =>
            stringArrayRoles.push(JSON.parse(JSON.stringify(authority)).name));
        return stringArrayRoles;
    }

}