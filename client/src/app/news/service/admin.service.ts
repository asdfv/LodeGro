import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import User from "../model/user.model";
import {Http, Response} from "@angular/http";


@Injectable()
export class AdminService {

    private loadUsersLink: string = "/api/user/all"

    constructor(private http: Http) {
    };


    loadAllUsers(): Observable<User[]> {
        return this.http.get(this.loadUsersLink)
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