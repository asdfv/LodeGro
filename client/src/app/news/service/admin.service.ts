import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import User from "../model/user.model";
import {Http, Response} from "@angular/http";


@Injectable()
export class AdminService {

    private loadUsersLink: string = "/api/user/all"

    constructor(private http: Http) {
    };


    loadUsers(): Observable<User[]> {
        return this.http.get(this.loadUsersLink)
            .map((response: Response) => response.json());
    };

}